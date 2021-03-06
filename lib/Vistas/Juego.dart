import 'dart:async';
import 'dart:math';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:dibujillo/Controladores/Sesion.dart';
import 'package:dibujillo/Modelos/Jugador.dart';
import 'package:dibujillo/Modelos/Mensaje.dart';
import 'package:dibujillo/Modelos/Palabras.dart';
import 'package:dibujillo/Modelos/Trazo.dart';
import 'package:dibujillo/Modelos/Usuario.dart';
import 'package:dibujillo/Vistas/FinPartida.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';
import 'package:flutter/services.dart';
import 'package:flutter_material_color_picker/flutter_material_color_picker.dart';
import 'package:provider/provider.dart';

class Juego extends StatefulWidget {
  @override
  _JuegoState createState() => _JuegoState();
}

class _JuegoState extends State<Juego> with TickerProviderStateMixin {
  Sesion sesion;

  List<Trazo> newPoints = [];
  Color colorTrazo = Color(0xFF000000);

  int contador = 0;
  Timer timer;

  List<Msg> _mensajes = List();
  final TextEditingController _textController = new TextEditingController();
  bool _isWriting = false;
  bool tecladoUp = false;
  bool palabraAcertada = false;

  int turnoAnterior;
  List<Jugador> jugadoresAnterior = List();

  @override
  void dispose() {
    if (timer != null) {
      timer.cancel();
    }
    if (timerSelect != null) {
      timerSelect.cancel();
    }
    super.dispose();
  }

  iniciarContador() {
    timer = Timer.periodic(Duration(seconds: 1), (timer) {
      if (contador > 0) {
        setState(() {
          print('Segundos restantes: $contador');
          contador--;
        });
      } else {
        timer.cancel();
      }
    });
  }

  Map<int, Color> obtenerMapaDeColor(Color color) {
    return {
      50: Color(color.value).withOpacity(0.05),
      100: Color(color.value).withOpacity(0.1),
      200: Color(color.value).withOpacity(0.2),
      300: Color(color.value).withOpacity(0.3),
      400: Color(color.value).withOpacity(0.4),
      500: Color(color.value).withOpacity(0.5),
      600: Color(color.value).withOpacity(0.6),
      700: Color(color.value).withOpacity(0.7),
      800: Color(color.value).withOpacity(0.8),
      900: Color(color.value).withOpacity(0.9),
    };
  }

  void _showDialogColor() async {
    showDialog(
      context: context,
      barrierDismissible: false,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text("Elije un color"),
          content: Container(
            child: MaterialColorPicker(
              shrinkWrap: true,
              allowShades: false, // default true
              colors: sesion.usuario.colores.map((color) {
                return MaterialColor(color.value, obtenerMapaDeColor(color));
              }).toList(),
              //selectedColor: colorTrazo,
              onMainColorChange: (color) {
                colorTrazo = Color.fromRGBO(
                    color.red, color.green, color.blue, color.opacity);
                Navigator.pop(context);
              },
            ),
          ),
        );
      },
    );
  }

  Future<bool> _showExitDialog() async {
    return showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text("¿Abandonar partida?"),
          content: Container(
            child: Text(
                'Si abandonas la partida tu puntuacion alcanzada hasta el momento se restará y se te aplicará una penalización adicional '),
          ),
          actions: <Widget>[
            FlatButton(
              onPressed: () {
                Navigator.pop(context, false);
              },
              child: Text('Volver'),
            ),
            FlatButton(
              onPressed: () async {
                await Firestore.instance
                    .collection('partidas')
                    .document(sesion.partidaActual.id)
                    .updateData({
                  "jugadores": FieldValue.arrayRemove([
                    {
                      "email": sesion.usuario.email,
                      "apodo": sesion.usuario.apodo,
                      "photoUrl": sesion.usuario.photoUrl,
                      "score": sesion.partidaActual.jugadores
                          .singleWhere((jugador) =>
                              jugador.email == sesion.usuario.email)
                          .score,
                      "pause": sesion.partidaActual.jugadores[getIndex()].pause,
                    }
                  ]),
                  "activos": FieldValue.increment(-1),
                  "hay_hueco": true,
                  "turno": sesion.partidaActual.turno ==
                          sesion.partidaActual.jugadores.length - 1
                      ? 0
                      : sesion.partidaActual.turno,
                  "palabra": sesion.partidaActual.activos - 1 == 0
                      ? ""
                      : sesion.partidaActual.palabra,
                });
                Navigator.pop(context, true);
                if (sesion.partidaActual.activos == 0) {
                  Firestore.instance
                      .collection('partidas')
                      .document(sesion.partidaActual.id)
                      .delete();
                }
              },
              child: Text('Abandonar'),
            ),
          ],
        );
      },
    );
  }

  Widget _buildComposer(Usuario usuario) {
    print('palabraAcertada $palabraAcertada');
    return IconTheme(
      data: IconThemeData(color: Theme.of(context).accentColor),
      child: Container(
        margin: const EdgeInsets.symmetric(horizontal: 10.0),
        decoration: BoxDecoration(
            color: Colors.grey[300], borderRadius: BorderRadius.circular(20)),
        width: MediaQuery.of(context).size.width,
        child: Row(
          children: <Widget>[
            Flexible(
              flex: 1,
              child: Padding(
                padding: const EdgeInsets.only(left: 20.0),
                child: TextField(
                  enabled: !palabraAcertada,
                  controller: _textController,
                  keyboardType: TextInputType.text,
                  autocorrect: false,
                  minLines: 1,
                  textCapitalization: TextCapitalization.none,
                  enableInteractiveSelection: false,
                  enableSuggestions: false,
                  onChanged: (String txt) {
                    setState(() {
                      tecladoUp = true;
                      _isWriting = txt.length > 0;
                    });
                  },
                  onTap: () {
                    setState(() {
                      tecladoUp = true;
                    });
                  },
                  onSubmitted: (value) {
                    if (_isWriting && _textController.text.trim().isNotEmpty) {
                      _submitAndClose(usuario, _textController.text);
                    }
                  },
                  decoration: InputDecoration.collapsed(
                      hintText: "Introduce una palabra para jugar"),
                ),
              ),
            ),
            Container(
              margin: EdgeInsets.symmetric(horizontal: 3.0),
              child: IconButton(
                icon: Icon(Icons.send),
                onPressed: _isWriting && _textController.text.trim().isNotEmpty
                    ? () => _submitMsg(usuario, _textController.text)
                    : null,
              ),
            ),
          ],
        ),
      ),
    );
  }

  int getIndex() {
    int i = 0;
    for (Jugador jugador in sesion.partidaActual.jugadores) {
      if (jugador.email == sesion.usuario.email) {
        return i;
      }
      i++;
    }
    return i;
  }

  void _submitAndClose(Usuario usuario, String contenido) {
    _submitMsg(usuario, contenido);
    if (contenido.isEmpty) tecladoUp = false;
  }

  void _submitMsg(Usuario usuario, String contenido) {
    _textController.clear();
    setState(() {
      _isWriting = false;
    });
    List<Map<String, dynamic>> nuevoMensaje = List();
    nuevoMensaje.add({
      "usuario": {
        "amigos": [],
        "apodo": usuario.apodo,
        "photoUrl": usuario.photoUrl,
        "colores": [],
        "email": usuario.email,
        "iconos": [],
        "monedas": usuario.monedas,
        "solicitudes": [],
        "total_puntos": usuario.total_puntos,
      },
      "contenido": contenido,
      "timestamp": Timestamp.now(),
    });

    DocumentReference documentReference = Firestore.instance
        .collection('partidas')
        .document(sesion.partidaActual.id);
    Firestore.instance.runTransaction((Transaction transaction) async {
      List<Jugador> jugadores = new List(sesion.partidaActual.jugadores.length);
      int puntuacion = 0;
      int i = 0;
      while (i < sesion.partidaActual.jugadores.length) {
        if (getIndex() == i &&
            contenido.toLowerCase().trim() ==
                sesion.partidaActual.palabra.toLowerCase().trim()) {
          puntuacion = sesion.partidaActual.jugadores[i].score;
          if (contador > 25)
            puntuacion += 25;
          else if (contador > 20)
            puntuacion += 15;
          else if (contador > 15)
            puntuacion += 10;
          else if (contador > 10)
            puntuacion += 5;
          else
            puntuacion += 2;
        } else {
          puntuacion = sesion.partidaActual.jugadores[i].score;
        }
        jugadores[i] = new Jugador(
            sesion.partidaActual.jugadores[i].apodo,
            sesion.partidaActual.jugadores[i].email,
            sesion.partidaActual.jugadores[i].photoUrl,
            puntuacion,
            sesion.partidaActual.jugadores[i].pause);
        i++;
      }
      await transaction.update(documentReference, <String, dynamic>{
        'chat': FieldValue.arrayUnion(nuevoMensaje),
        'nAciertos': contenido.toLowerCase().trim() ==
                sesion.partidaActual.palabra.toLowerCase().trim()
            ? FieldValue.increment(1)
            : FieldValue.increment(0),
        'jugadores': [],
      });
      print('Num jugadores actualizando:' + jugadores.length.toString());
      jugadores.forEach((jugador) async {
        await transaction.update(documentReference, <String, dynamic>{
          'jugadores': FieldValue.arrayUnion([jugador.toMap()]),
        });
      });
    });
    if (contenido.isEmpty) tecladoUp = false;
  }

  Timer timerSelect;
  int start = 0;

  void startTimer() {
    const oneSec = const Duration(seconds: 1);
    timerSelect = Timer.periodic(
      oneSec,
      (timerSelect) {
        if (start > 0) {
          start--;
        } else {
          timerSelect.cancel();
          timerSelect = null;

          DocumentReference documentReference = Firestore.instance
              .collection('partidas')
              .document(sesion.partidaActual.id);
          Firestore.instance.runTransaction((Transaction transaction) async {
            DocumentSnapshot document =
                await transaction.get(documentReference);
            List jugadoresRaw = document.data['jugadores'];
            List<Jugador> jugadores = List();
            for (var jugador in jugadoresRaw) {
              jugadores.add(Jugador.decodeJugador(jugador));
            }
            int numJugadores = jugadores.length;
            int anterior = document.data['turno'];
            int turno = (document.data['turno'] + 1) % numJugadores;
            int ronda = document.data['ronda'];
            int saveRonda = ronda;

            //
            int numComprobados = 0;
            while (numComprobados < numJugadores) {
              if (sesion.partidaActual.jugadores[turno].pause) {
                turno = (turno + 1) % numJugadores;
                if (ronda == saveRonda && turno <= anterior) {
                  ronda++;
                }
              } else {
                numComprobados = numJugadores;
              }
            }

            if (ronda == saveRonda && turno <= anterior) {
              ronda++;
            }

            await transaction.update(documentReference, <String, dynamic>{
              'turno': turno,
              'ronda': ronda,
              'palabra': "",
              'activos': numJugadores,
              'puntos': [],
              'chat': [],
              'nAciertos': 0,
            });
            newPoints = [];
          });
        }
      },
    );
  }

  double ancho;
  List<Mensaje> revisarChat;
  int pista;

  @override
  Widget build(BuildContext context) {
    sesion = Provider.of<Sesion>(context);
    ancho = MediaQuery.of(context).size.width;
    revisarChat = sesion.partidaActual.chat;
    for (Mensaje mensaje in revisarChat) {
      if (mensaje.contenido.trim().toLowerCase() ==
              sesion.partidaActual.palabra.trim().toLowerCase() &&
          mensaje.usuario.email == sesion.usuario.email) {
        palabraAcertada = true;
        //print('${mensaje.contenido.trim().toLowerCase()} - ${sesion.partidaActual.palabra.trim().toLowerCase()} - ${mensaje.usuario.email} - ${sesion.usuario.email}');
        break;
      }
    }
    String palabra = "";
    if (contador == 30) {
      Random random = Random();
      pista = random.nextInt(sesion.partidaActual.palabra.length - 1);
    }
    for (var letra in sesion.partidaActual.palabra.split('')) {
      if (pista != null &&
          sesion.partidaActual.palabra.split('')[pista] == letra) {
        palabra += letra + ' ';
      } else {
        palabra += '_ ';
      }
    }
    if (sesion.usuario.email ==
        sesion.partidaActual.jugadores[sesion.partidaActual.turno].email) {
      palabra = sesion.partidaActual.palabra;
    }
    if (sesion.partidaActual.nAciertos ==
        sesion.partidaActual.num_jugadores - 1) {
      contador = 0;
    }

    return WillPopScope(
      onWillPop: () async {
        return Future(() async {
          bool decision = await _showExitDialog();
          print('Decision tomada $decision');
          return decision;
        });
      },
      child: Scaffold(
        resizeToAvoidBottomInset: false,
        appBar: AppBar(
          title: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: <Widget>[
              Text(palabra != "" ? '  $palabra' : 'Dibujillo'),
              Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.center,
                mainAxisSize: MainAxisSize.min,
                children: <Widget>[
                  sesion.partidaActual.turno == getIndex()
                      ? Container()
                      : IconButton(
                          icon: sesion.partidaActual.jugadores[getIndex()]
                                      .pause ==
                                  false
                              ? Icon(Icons.pause)
                              : Icon(Icons.play_arrow),
                          onPressed: () {
                            // Actualizar base de datos
                            int i = 0;
                            bool pau = sesion
                                .partidaActual.jugadores[getIndex()].pause;
                            var jugadoresActualizados =
                                new List(sesion.partidaActual.num_jugadores);
                            while (i < sesion.partidaActual.num_jugadores) {
                              if (i == getIndex()) {
                                jugadoresActualizados[i] = new Jugador(
                                    sesion.partidaActual.jugadores[i].apodo,
                                    sesion.partidaActual.jugadores[i].email,
                                    sesion.partidaActual.jugadores[i].photoUrl,
                                    sesion.partidaActual.jugadores[i].score,
                                    !pau);
                              } else {
                                jugadoresActualizados[i] = new Jugador(
                                    sesion.partidaActual.jugadores[i].apodo,
                                    sesion.partidaActual.jugadores[i].email,
                                    sesion.partidaActual.jugadores[i].photoUrl,
                                    sesion.partidaActual.jugadores[i].score,
                                    sesion.partidaActual.jugadores[i].pause);
                              }
                              i++;
                            }
                            DocumentReference documentReference = Firestore
                                .instance
                                .collection('partidas')
                                .document(sesion.partidaActual.id);
                            Firestore.instance.runTransaction(
                                (Transaction transaction) async {
                              await transaction
                                  .update(documentReference, <String, dynamic>{
                                'jugadores': [],
                              });
                              jugadoresActualizados.forEach((jugador) async {
                                await transaction.update(
                                    documentReference, <String, dynamic>{
                                  'jugadores':
                                      FieldValue.arrayUnion([jugador.toMap()]),
                                });
                              });
                            });
                          },
                        ),
                  Text(
                    'Restante: $contador',
                    style: TextStyle(
                      fontSize: 10,
                    ),
                  ),
                ],
              ),
            ],
          ),
          backgroundColor: Color(0xff61ffa6),
          leading: Padding(
            padding: EdgeInsets.only(left: 12),
            child: Image.asset(
              'images/logoChiqui.png',
              fit: BoxFit.cover,
            ),
          ),
        ),
        body: Stack(
          children: <Widget>[
            Container(
              height: double.maxFinite,
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: <Widget>[
                  Consumer<Sesion>(
                    builder: (context, sesion, child) {
                      this.sesion = sesion;
                      if (sesion.partidaActual.puntos.length > newPoints.length)
                        newPoints.clear();
                      bool soyMasPequeno = ancho < sesion.anchoLienzo;
                      return ConstrainedBox(
                        constraints: BoxConstraints(
                          minHeight: soyMasPequeno ? ancho : sesion.anchoLienzo,
                        ),
                        child: Stack(
                          fit: StackFit.loose,
                          children: <Widget>[
                            Transform.scale(
                              scale: soyMasPequeno
                                  ? 1
                                  : ancho / sesion.anchoLienzo,
                              alignment: Alignment.topLeft,
                              child: Container(
                                width:
                                    soyMasPequeno ? ancho : sesion.anchoLienzo,
                                height:
                                    soyMasPequeno ? ancho : sesion.anchoLienzo,
                                decoration: BoxDecoration(
                                    border: Border.all(color: Colors.black),
                                    shape: BoxShape.rectangle),
                                child: GestureDetector(
                                  onPanUpdate: (DragUpdateDetails details) {
                                    if (sesion.partidaActual.jugadores
                                            .isNotEmpty &&
                                        sesion
                                                .partidaActual
                                                .jugadores[
                                                    sesion.partidaActual.turno]
                                                .email ==
                                            sesion.usuario.email &&
                                        sesion.partidaActual.palabra != "" &&
                                        contador != 0) {
                                      setState(() {
                                        RenderBox renderBox =
                                            context.findRenderObject();
                                        Offset _localPosition =
                                            renderBox.globalToLocal(
                                                details.globalPosition);
                                        newPoints.add(
                                            Trazo(_localPosition, colorTrazo));
                                      });
                                    }
                                  },
                                  onPanEnd: (DragEndDetails details) {
                                    if (sesion.partidaActual.jugadores
                                            .isNotEmpty &&
                                        sesion
                                                .partidaActual
                                                .jugadores[
                                                    sesion.partidaActual.turno]
                                                .email ==
                                            sesion.usuario.email &&
                                        sesion.partidaActual.palabra != "" &&
                                        contador != 0) {
                                      newPoints.add(null);
                                      List<Map<String, dynamic>> aux = List();
                                      for (Trazo trazo in newPoints) {
                                        if (trazo == null) {
                                          aux.add({
                                            "x": -sesion.separadores,
                                            "y": -sesion.separadores,
                                            "color": null
                                          });
                                        } else {
                                          aux.add({
                                            "x": trazo.offset.dx,
                                            "y": trazo.offset.dy,
                                            "color": trazo.color
                                                .toString()
                                                .substring(6, 16)
                                          });
                                        }
                                      }
                                      print('levanto de pintar');
                                      Firestore.instance
                                          .collection('partidas')
                                          .document(sesion.partidaActual.id)
                                          .updateData({
                                        "puntos": FieldValue.arrayUnion(aux),
                                      });
                                      sesion.updateSeperador();
                                    }
                                  },
                                  child: Stack(children: [
                                    Row(
                                        mainAxisAlignment:
                                            MainAxisAlignment.end,
                                        children: [
                                          Padding(
                                              padding: EdgeInsets.all(9.0),
                                              child: Text(
                                            'CÓDIGO: ' +
                                                sesion.partidaActual.id
                                                    .toString() +
                                                ' ',
                                            style: TextStyle(
                                              fontSize: 15,
                                              color: Colors.green,
                                              fontWeight: FontWeight.bold,
                                            ),
                                          )),
                                        ]),
                                    ClipRect(
                                      child: CustomPaint(
                                        painter: new Pantalla(
                                            trazos: sesion.partidaActual.puntos,
                                            refresh: false),
                                        size: Size(ancho, ancho),
                                      ),
                                    ),
                                    ClipRect(
                                      child: CustomPaint(
                                        painter: new Pantalla(
                                            trazos: newPoints, refresh: true),
                                        size: Size(ancho, ancho),
                                      ),
                                    ),
                                  ]),
                                ),
                              ),
                            ),
                            Positioned(
                              left: 0,
                              top: 0,
                              child: Visibility(
                                visible:
                                    sesion.partidaActual.jugadores.isNotEmpty &&
                                        sesion
                                                .partidaActual
                                                .jugadores[
                                                    sesion.partidaActual.turno]
                                                .email ==
                                            sesion.usuario.email,
                                child: Padding(
                                  padding: EdgeInsets.all(10),
                                  child: Row(
                                    children: <Widget>[
                                      FloatingActionButton(
                                        heroTag: 'buttonBorrar',
                                        onPressed: () {
                                          if (sesion.partidaActual.palabra !=
                                              "") {
                                            sesion.separadores = 1;
                                            Firestore.instance
                                                .collection('partidas')
                                                .document(
                                                    sesion.partidaActual.id)
                                                .updateData({"puntos": []});
                                            setState(() {
                                              newPoints = [];
                                            });
                                          }
                                        },
                                        child: Icon(
                                          Icons.delete,
                                          color: Colors.white,
                                        ),
                                        backgroundColor: colorTrazo,
                                        mini: true,
                                      ),
                                      FloatingActionButton(
                                        heroTag: 'buttonColor',
                                        onPressed: () {
                                          if (sesion.partidaActual.palabra !=
                                              "") {
                                            _showDialogColor();
                                          }
                                        },
                                        child: Icon(
                                          Icons.color_lens,
                                          color: Colors.white,
                                        ),
                                        backgroundColor: colorTrazo,
                                        mini: true,
                                      ),
                                    ],
                                  ),
                                ),
                              ),
                            )
                          ],
                        ),
                      );
                    },
                  ),
                  Consumer<Sesion>(
                    builder: (context, sesion, child) {
                      List<Mensaje> newChat =
                          sesion.partidaActual.chat.sublist(_mensajes.length);
                      for (Mensaje mensaje in newChat) {
                        _mensajes.insert(
                            0,
                            Msg(
                              palabra: sesion.partidaActual.palabra,
                              mensaje: mensaje,
                              animationController: new AnimationController(
                                  vsync: this,
                                  duration: new Duration(milliseconds: 300)),
                            ));
                        _mensajes[0].animationController.forward();
                      }
                      print('El chat tiene ${_mensajes.length} mensajes');
                      return Flexible(
                        child: chat(context),
                      );
                    },
                  ),
                ],
              ),
            ),
            AnimatedPositioned(
              duration: Duration(milliseconds: 10),
              bottom: tecladoUp
                  ? MediaQuery.of(context).viewInsets.bottom + 10
                  : 10,
              left: 0,
              right: 0,
              child: Visibility(
                visible: sesion.partidaActual.jugadores.isNotEmpty &&
                    sesion.partidaActual.jugadores[sesion.partidaActual.turno]
                            .email !=
                        sesion.usuario.email &&
                    contador > 0,
                child: _buildComposer(sesion.usuario),
              ),
            ),
            FutureBuilder(
              future: calcularEstado(),
              builder: (context, estado) {
                print('Aciertos: ' + sesion.partidaActual.nAciertos.toString());
                if (estado.hasData) {
                  if (estado.data == 'esperarJugadores') {
                    return AlertDialog(
                      title: Text("Esperando..."),
                      content: Text('Esperando mas jugadores'),
                    );
                  } else if (estado.data == 'esperarPalabra') {
                    List<String> palabras = Palabras.getSugerencias();

                    return AlertDialog(
                      title: Text("Elige una palabra"),
                      //aqui
                      content: Column(
                        crossAxisAlignment: CrossAxisAlignment.center,
                        mainAxisSize: MainAxisSize.min,
                        children: List.generate(palabras.length, (index) {
                          return RaisedButton(
                            onPressed: () async {
                              await Firestore.instance
                                  .collection('partidas')
                                  .document(sesion.partidaActual.id)
                                  .updateData({
                                'palabra': palabras[index],
                              });
                              print('Palabra actualizada: ${palabras[index]}');
                              if (timerSelect != null) {
                                timerSelect.cancel();
                              }
                              timerSelect = null;
                            },
                            child: Text(palabras[index]),
                          );
                        }),
                      ),
                    );
                  } else if (estado.data == 'esperarEleccionPalabra') {
                    return AlertDialog(
                      title: Text("Esperando..."),
                      content: Text(
                          '${sesion.partidaActual.jugadores[sesion.partidaActual.turno].apodo} está eligiendo palabra'),
                    );
                  } else if (contador == 0 ||
                      sesion.partidaActual.nAciertos ==
                          sesion.partidaActual.activos - 1) {
                    if (sesion.usuario.email ==
                        sesion.partidaActual
                            .jugadores[sesion.partidaActual.turno].email) {
                      return AlertDialog(
                        title: Text("Fin del turno"),
                        content: Column(
                          mainAxisSize: MainAxisSize.min,
                          children: List.generate(
                              sesion.partidaActual.jugadores.length, (index) {
                            Jugador jugador =
                                sesion.partidaActual.jugadores[index];
                            return ListTile(
                              leading: CircleAvatar(
                                backgroundImage: NetworkImage(jugador.photoUrl),
                              ),
                              title: Text(jugador.apodo),
                              trailing: Text(jugador.score.toString()),
                            );
                          }),
                        ),
                        actions: <Widget>[
                          FlatButton(
                            onPressed: () {
                              DocumentReference documentReference = Firestore
                                  .instance
                                  .collection('partidas')
                                  .document(sesion.partidaActual.id);
                              Firestore.instance.runTransaction(
                                  (Transaction transaction) async {
                                DocumentSnapshot document =
                                    await transaction.get(documentReference);
                                List jugadoresRaw = document.data['jugadores'];
                                List<Jugador> jugadores = List();
                                for (var jugador in jugadoresRaw) {
                                  jugadores.add(Jugador.decodeJugador(jugador));
                                }
                                //  ronda 2, turno 1
                                int numJugadores = jugadores.length;
                                int anterior = document.data['turno'];
                                int turno =
                                    (document.data['turno'] + 1) % numJugadores;
                                int ronda = document.data['ronda'];
                                int saveRonda = ronda;

                                // ronda 2, turno 2
                                int numComprobados = 0;
                                while (numComprobados < numJugadores) {
                                  if (sesion
                                      .partidaActual.jugadores[turno].pause) {
                                    turno = (turno + 1) % numJugadores;
                                    if (ronda == saveRonda &&
                                        turno <= anterior) {
                                      ronda++;
                                    }
                                  } else {
                                    numComprobados = numJugadores;
                                  }
                                }

                                if (ronda == saveRonda && turno <= anterior) {
                                  ronda++;
                                }

                                await transaction.update(
                                    documentReference, <String, dynamic>{
                                  'turno': turno,
                                  'ronda': ronda,
                                  'palabra': "",
                                  'activos': numJugadores,
                                  'puntos': [],
                                  'chat': [],
                                  'nAciertos': 0,
                                });
                                newPoints = [];
                              });
                            },
                            child: Text('Siguiente turno'),
                          ),
                        ],
                      );
                    } else {
                      return AlertDialog(
                        title: Text("Fin del turno"),
                        content: Column(
                          mainAxisSize: MainAxisSize.min,
                          children: List.generate(
                              sesion.partidaActual.jugadores.length, (index) {
                            Jugador jugador =
                                sesion.partidaActual.jugadores[index];
                            return ListTile(
                              leading: CircleAvatar(
                                backgroundImage: NetworkImage(jugador.photoUrl),
                              ),
                              title: Text(jugador.apodo),
                              trailing: Text(jugador.score.toString()),
                            );
                          }),
                        ),
                      );
                    }
                  } else {
                    return SizedBox.shrink();
                  }
                } else {
                  return SizedBox.shrink();
                }
              },
            )
          ],
        ),
      ),
    );
  }

  Future<String> calcularEstado() {
    if (sesion.partidaActual.activos < 2) {
      return Future.value('esperarJugadores');
    } else {
      if (sesion.partidaActual.ronda >= 4) {
        print('Se acabo la partida');
        timer = null;
        contador = 0;
        timerSelect = null;
        sesion.dejarDeEscuchar();

        List<Jugador> jugadores =
            new List(sesion.partidaActual.jugadores.length);
        List puntuaciones = new List(sesion.partidaActual.jugadores.length);
        for (int j = 0; j < sesion.partidaActual.jugadores.length; j++) {
          puntuaciones[j] = sesion.partidaActual.jugadores[j].score;
        }
        puntuaciones.sort;
        for (int i = 0; i < sesion.partidaActual.jugadores.length; i++) {
          for (int j = i; j < sesion.partidaActual.jugadores.length; j++) {
            if (sesion.partidaActual.jugadores[i].score == puntuaciones[i]) {
              jugadores[i] = new Jugador(
                sesion.partidaActual.jugadores[i].apodo,
                sesion.partidaActual.jugadores[i].email,
                sesion.partidaActual.jugadores[i].photoUrl,
                sesion.partidaActual.jugadores[i].score,
                sesion.partidaActual.jugadores[i].pause,
              );
            }
          }
        }

        Future.delayed(Duration(seconds: 1), () {
          Navigator.pushReplacement(
            context,
            MaterialPageRoute(
                builder: (context) => FinPartida(
                    sesion.partidaActual,
                    sesion.partidaActual.jugadores.singleWhere(
                        (jugador) => jugador.email == sesion.usuario.email))),
          );
        });
      } else {
        if (sesion.usuario.email ==
            sesion.partidaActual.jugadores[sesion.partidaActual.turno].email) {
          if (sesion.partidaActual.palabra == "") {
            timer = null;
            contador = 0;
            start = 0;
            _mensajes.clear();
            colorTrazo = Colors.black;
            palabraAcertada = false;
            pista = null;
            if (timerSelect == null) {
              start = 10;
              startTimer();
            }
            return Future.value('esperarPalabra');
          } else {
            if (timerSelect != null) {
              timerSelect.cancel();
            }
            timerSelect = null;
            start = 0;
            if (timer == null) {
              contador = 30;
              iniciarContador();
              turnoAnterior = sesion.partidaActual.turno;
              jugadoresAnterior = sesion.partidaActual.jugadores;
            }
            return Future.value("");
          }
        } else {
          if (sesion.partidaActual.palabra == "") {
            if (timerSelect != null) {
              timerSelect.cancel();
            }
            timerSelect = null;
            timer = null;
            contador = 0;
            start = 0;
            _mensajes.clear();
            colorTrazo = Colors.black;
            palabraAcertada = false;
            pista = null;
            return Future.value('esperarEleccionPalabra');
          } else {
            if (timerSelect != null) {
              timerSelect.cancel();
            }
            timerSelect = null;
            start = 00;
            if (timer == null) {
              contador = 30;
              iniciarContador();
              turnoAnterior = sesion.partidaActual.turno;
              jugadoresAnterior = sesion.partidaActual.jugadores;
            }
            return Future.value("");
          }
        }
      }
    }
  }

  Widget chat(BuildContext context) {
    return ListView.builder(
      itemBuilder: (_, int index) => _mensajes[index],
      itemCount: _mensajes.length,
      shrinkWrap: true,
      physics: ClampingScrollPhysics(),
      reverse: false,
      padding: new EdgeInsets.only(top: 6, left: 6, right: 6, bottom: 66),
    );
  }
}

class Pantalla extends CustomPainter {
  List<Trazo> trazos;
  bool refresh;

  Pantalla({this.trazos, this.refresh});

  @override
  void paint(Canvas canvas, Size size) {
    Paint paint;

    for (int i = 0; i < trazos.length - 1; i++) {
      if (trazos[i] != null && trazos[i + 1] != null) {
        paint = new Paint()
          ..color = trazos[i].color
          ..strokeCap = StrokeCap.round
          ..strokeWidth = 3.0;
        canvas.drawLine(trazos[i].offset, trazos[i + 1].offset, paint);
      }
    }
  }

  @override
  bool shouldRepaint(Pantalla oldDelegate) =>
      refresh || oldDelegate.trazos != trazos;
}

class Msg extends StatelessWidget {
  Msg({this.palabra, this.mensaje, this.animationController});

  final String palabra;
  final Mensaje mensaje;
  final AnimationController animationController;

  @override
  Widget build(BuildContext ctx) {
    bool acierto =
        mensaje.contenido.trim().toLowerCase() == palabra.trim().toLowerCase();

    return SizeTransition(
      sizeFactor: new CurvedAnimation(
          parent: animationController, curve: Curves.easeOut),
      axisAlignment: 0.0,
      child: Container(
        color: acierto ? Colors.greenAccent : null,
        padding: const EdgeInsets.symmetric(vertical: 8.0, horizontal: 5.0),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            Container(
              margin: const EdgeInsets.only(right: 18.0),
              child: CircleAvatar(child: Text(mensaje.usuario.apodo[0])),
            ),
            acierto
                ? Text('${mensaje.usuario.apodo} ha acertado!!',
                    style: acierto
                        ? TextStyle(fontSize: 20)
                        : Theme.of(ctx).textTheme.subhead)
                : Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        Text(mensaje.usuario.apodo,
                            style: Theme.of(ctx).textTheme.subhead),
                        Container(
                          margin: const EdgeInsets.only(top: 6.0),
                          child: Text(mensaje.contenido),
                        ),
                      ],
                    ),
                  ),
          ],
        ),
      ),
    );
  }
}
