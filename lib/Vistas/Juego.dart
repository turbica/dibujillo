import 'dart:async';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:dibujillo/Controladores/Sesion.dart';
import 'package:dibujillo/Modelos/Mensaje.dart';
import 'package:dibujillo/Modelos/Trazo.dart';
import 'package:dibujillo/Modelos/Usuario.dart';
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
  Color colorTrazo = Colors.black;

  int contador = 60;
  Timer timer;

  List<Msg> _mensajes = List();
  final TextEditingController _textController = new TextEditingController();
  bool _isWriting = false;
  bool tecladoUp = false;
  bool palabraAcertada = false;

  @override
  void dispose() {
    if (timer != null) {
      timer.cancel();
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
        _showFinRonda();
      }
    });
  }

  void _showFinRonda() async {
    // flutter defined function
    showDialog(
      context: context,
      builder: (BuildContext context) {
        // return object of type Dialog
        return AlertDialog(
          title: Text("Fin del turno"),
          actions: <Widget>[
            FlatButton(
              onPressed: () {
                Navigator.pop(context);
                Navigator.pop(context);
              },
              child: Text('Siguiente ronda'),
            ),
          ],
        );
      },
    );
  }

  void _showDialog() async {
    // flutter defined function
    showDialog(
      context: context,
      builder: (BuildContext context) {
        // return object of type Dialog
        return AlertDialog(
          title: Text("Elije un color"),
          content: Container(
            child: MaterialColorPicker(
              shrinkWrap: true,
              allowShades: false, // default true
              onMainColorChange: (ColorSwatch color) {
                colorTrazo = Color.fromRGBO(color.red, color.green, color.blue, color.opacity);
                Navigator.pop(context);
              },
              selectedColor: colorTrazo,
            ),
          ),
        );
      },
    );
  }

  Future<bool> _showExitDialog() async {
    // flutter defined function
    return showDialog(
      context: context,
      builder: (BuildContext context) {
        // return object of type Dialog
        return AlertDialog(
          title: Text("¿Abandonar partida?"),
          content: Container(
            child: Text(
              'Sia abandonas la partida tu puntuacion alcanzada hasta el momento se restará y se te aplicará una penalización adicional'
            ),
          ),
          actions: <Widget>[
            FlatButton(
              onPressed: () {
                Navigator.pop(context, false);
              },
              child: Text(
                  'Volver'
              ),
            ),
            FlatButton(
              onPressed: () async {
                await Firestore.instance.collection('partidas').document(sesion.partidaActual.id).updateData({
                  "jugadores": FieldValue.arrayRemove([
                    {
                      "usuario": {
                        "email": sesion.usuario.email,
                        "apodo": sesion.usuario.apodo,
                        "total_puntos": sesion.usuario.total_puntos,
                        "monedas": sesion.usuario.monedas,
                        "colores": sesion.usuario.colores,
                        "iconos": sesion.usuario.iconos,
                        "amigos": sesion.usuario.amigos,
                        "solicitudes": sesion.usuario.solicitudes,
                      },
                      "score": sesion.partidaActual.jugadores.singleWhere((jugador) => jugador.usuario.email == sesion.usuario.email).score,
                    }
                  ]),
                  "activos" : FieldValue.increment(-1),
                  "hay_hueco" : true,
                });
                Navigator.pop(context, true);
              },
              child: Text(
                  'Abandonar'
              ),
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
        decoration: BoxDecoration(color: Colors.grey[300], borderRadius: BorderRadius.circular(20)),
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
                  decoration: InputDecoration.collapsed(hintText: "Enter some text to send a message"),
                ),
              ),
            ),
            Container(
              margin: EdgeInsets.symmetric(horizontal: 3.0),
              child: IconButton(
                icon: Icon(Icons.send),
                onPressed: _isWriting && _textController.text.trim().isNotEmpty ? () => _submitMsg(usuario, _textController.text) : null,
              ),
            ),
          ],
        ),
      ),
    );
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
    Firestore.instance.collection('partidas').document(sesion.partidaActual.id).updateData({
      "chat": FieldValue.arrayUnion(nuevoMensaje),
    });
    if (contenido.isEmpty) tecladoUp = false;
  }

  double ancho;
  List<Mensaje> revisarChat;

  @override
  Widget build(BuildContext context) {
    sesion = Provider.of<Sesion>(context);
    ancho = MediaQuery.of(context).size.width;
    revisarChat = sesion.partidaActual.chat;
    for (Mensaje mensaje in revisarChat) {
      if (mensaje.contenido.trim().toLowerCase() == sesion.partidaActual.palabra.trim().toLowerCase() &&
          mensaje.usuario.email == sesion.usuario.email) {
        palabraAcertada = true;
        //print('${mensaje.contenido.trim().toLowerCase()} - ${sesion.partidaActual.palabra.trim().toLowerCase()} - ${mensaje.usuario.email} - ${sesion.usuario.email}');
        break;
      }
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
              Text("PARTIDA"),
              GestureDetector(
                onTap: () {
                  Firestore.instance.collection('partidas').document(sesion.partidaActual.id).updateData({"anchoLienzo": ancho});
                },
                child: Text(
                  'Restante: $contador',
                  style: TextStyle(
                    fontSize: 15,
                  ),
                ),
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
                      if (sesion.partidaActual.puntos.length > newPoints.length) newPoints.clear();
                      bool soyMasPequeno = ancho < sesion.anchoLienzo;
                      return ConstrainedBox(
                        constraints: BoxConstraints(
                          minHeight: soyMasPequeno ? ancho : sesion.anchoLienzo,
                        ),
                        child: Stack(
                          fit: StackFit.loose,
                          children: <Widget>[
                            Transform.scale(
                              scale: soyMasPequeno ? 1 : ancho / sesion.anchoLienzo,
                              alignment: Alignment.topLeft,
                              child: Container(
                                width: soyMasPequeno ? ancho : sesion.anchoLienzo,
                                height: soyMasPequeno ? ancho : sesion.anchoLienzo,
                                decoration: BoxDecoration(border: Border.all(color: Colors.black), shape: BoxShape.rectangle),
                                child: GestureDetector(
                                  onPanUpdate: (DragUpdateDetails details) {
                                    if (sesion.partidaActual.jugadores.isNotEmpty &&
                                        sesion.partidaActual.jugadores[sesion.partidaActual.turno].usuario.email == sesion.usuario.email) {
                                      setState(() {
                                        RenderBox renderBox = context.findRenderObject();
                                        Offset _localPosition = renderBox.globalToLocal(details.globalPosition);
                                        newPoints.add(Trazo(_localPosition, colorTrazo));
                                      });
                                    }
                                  },
                                  onPanEnd: (DragEndDetails details) {
                                    if (sesion.partidaActual.jugadores.isNotEmpty &&
                                        sesion.partidaActual.jugadores[sesion.partidaActual.turno].usuario.email == sesion.usuario.email) {
                                      newPoints.add(null);
                                      List<Map<String, dynamic>> aux = List();
                                      for (Trazo trazo in newPoints) {
                                        if (trazo == null) {
                                          aux.add({"x": -sesion.separadores, "y": -sesion.separadores, "color": null});
                                        } else {
                                          aux.add({"x": trazo.offset.dx, "y": trazo.offset.dy, "color": trazo.color.toString().substring(6, 16)});
                                        }
                                      }
                                      print('levanto de pintar');
                                      Firestore.instance.collection('partidas').document(sesion.partidaActual.id).updateData({
                                        "puntos": FieldValue.arrayUnion(aux),
                                      });
                                      sesion.updateSeperador();
                                    }
                                  },
                                  child: Stack(children: [
                                    ClipRect(
                                      child: CustomPaint(
                                        painter: new Pantalla(trazos: sesion.partidaActual.puntos, refresh: false),
                                        size: Size(ancho, ancho),
                                      ),
                                    ),
                                    ClipRect(
                                      child: CustomPaint(
                                          // Esto aun no se por que no va
                                          painter: new Pantalla(trazos: newPoints, refresh: true),
                                          size: Size(ancho, ancho)),
                                    ),
                                  ]),
                                ),
                              ),
                            ),
                            Positioned(
                              left: 0,
                              top: 0,
                              child: Padding(
                                padding: EdgeInsets.all(10),
                                child: Row(
                                  children: <Widget>[
                                    FloatingActionButton(
                                      heroTag: 'buttonBorrar',
                                      onPressed: () {
                                        sesion.separadores = 1;
                                        Firestore.instance.collection('partidas').document(sesion.partidaActual.id).updateData({"puntos": []});
                                        setState(() {
                                          newPoints = [];
                                        });
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
                                        _showDialog();
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
                            )
                          ],
                        ),
                      );
                    },
                  ),
                  Consumer<Sesion>(
                    builder: (context, sesion, child) {
                      List<Mensaje> newChat = sesion.partidaActual.chat.sublist(_mensajes.length);
                      for (Mensaje mensaje in newChat) {
                        _mensajes.insert(
                            0,
                            Msg(
                              palabra: sesion.partidaActual.palabra,
                              mensaje: mensaje,
                              animationController: new AnimationController(vsync: this, duration: new Duration(milliseconds: 300)),
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
              bottom: tecladoUp ? MediaQuery.of(context).viewInsets.bottom + 10 : 10,
              left: 0,
              right: 0,
              child: _buildComposer(sesion.usuario),
            )
          ],
        ),
      ),
    );
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
  bool shouldRepaint(Pantalla oldDelegate) => refresh || oldDelegate.trazos != trazos;
}

class Msg extends StatelessWidget {
  Msg({this.palabra, this.mensaje, this.animationController});

  final String palabra;
  final Mensaje mensaje;
  final AnimationController animationController;

  @override
  Widget build(BuildContext ctx) {
    bool acierto = mensaje.contenido.trim().toLowerCase() == palabra.trim().toLowerCase();
    return SizeTransition(
      sizeFactor: new CurvedAnimation(parent: animationController, curve: Curves.easeOut),
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
                ? Text('${mensaje.usuario.apodo} ha acertado!!', style: acierto ? TextStyle(fontSize: 20) : Theme.of(ctx).textTheme.subhead)
                : Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        Text(mensaje.usuario.apodo, style: Theme.of(ctx).textTheme.subhead),
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