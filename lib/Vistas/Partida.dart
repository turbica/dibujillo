import 'dart:async';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:dibujillo/Chat/Chat.dart';
import 'package:dibujillo/Controladores/Dibujo.dart';
import 'package:dibujillo/Modelos/Trazo.dart';
import 'package:dibujillo/Vistas/Principal.dart';
import 'package:dibujillo/Vistas/Registrase.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';
import 'package:flutter/services.dart';
import 'package:flutter_material_color_picker/flutter_material_color_picker.dart';
import 'package:provider/provider.dart';
import 'package:dibujillo/Vistas/InicioSesion.dart';

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> with TickerProviderStateMixin {
  List<Trazo> newPoints = [];
  Color colorTrazo = Colors.black;

  int contador = 60;
  Timer timer;

  final List<Msg> _messages = <Msg>[];
  final TextEditingController _textController = new TextEditingController();
  bool _isWriting = false;
  bool tecladoUp = false;

  @override
  void initState() {
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
    super.initState();
  }

  @override
  void dispose() {
    timer.cancel();
    for (Msg msg in _messages) {
      msg.animationController.dispose();
    }
    super.dispose();
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
              onPressed: () {},
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

  Widget _buildComposer() {
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
                  onSubmitted: _isWriting && _textController.text.trim().isNotEmpty ? _submitAndClose : null,
                  decoration: InputDecoration.collapsed(hintText: "Enter some text to send a message"),
                ),
              ),
            ),
            Container(
              margin: EdgeInsets.symmetric(horizontal: 3.0),
              child: IconButton(
                icon: Icon(Icons.send),
                onPressed: _isWriting && _textController.text.trim().isNotEmpty ? () => _submitMsg(_textController.text) : null,
              ),
            ),
          ],
        ),
      ),
    );
  }

  void _submitAndClose(String txt) {
    _submitMsg(txt);
    if(txt.isEmpty) tecladoUp = false;
  }

  void _submitMsg(String txt) {
    _textController.clear();
    setState(() {
      _isWriting = false;
    });
    Msg msg = new Msg(
      txt: txt,
      animationController: new AnimationController(vsync: this, duration: new Duration(milliseconds: 800)),
    );
    setState(() {
      _messages.insert(0, msg);
    });
    msg.animationController.forward();
    if(txt.isEmpty) tecladoUp = false;
  }

  @override
  Widget build(BuildContext context) {
    Dibujo dibu = Provider.of<Dibujo>(context);
    double ancho = MediaQuery.of(context).size.width;
    Firestore.instance.collection('a').document().get();
    return Scaffold(
      resizeToAvoidBottomInset: false,
      appBar: AppBar(
        title: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: <Widget>[
            Text("PARTIDA"),
            FlatButton(
              child: const Text('Lienzo'),
              onPressed: () {
                Firestore.instance
                    .collection('dibujo')
                    .document('uno')
                    .updateData({"anchoLienzo": ancho});
              },
            ),
            Text('Restante: $contador'),
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
                Consumer<Dibujo>(
                  builder: (context, dibujo, child) {
                    if (dibujo.points.length > newPoints.length) newPoints.clear();
                    bool soyMasPequeno = ancho < dibujo.anchoLienzo;
                    return ConstrainedBox(
                      constraints: BoxConstraints(minHeight: soyMasPequeno ? ancho : dibujo.anchoLienzo,),
                      child: Stack(
                        fit: StackFit.loose,
                        children: <Widget>[
                          Transform.scale(
                            scale: soyMasPequeno ? 1 : ancho / dibujo.anchoLienzo,
                            alignment: Alignment.topLeft,
                            child: Container(
                              width: soyMasPequeno ? ancho : dibujo.anchoLienzo,
                              height: soyMasPequeno ? ancho : dibujo.anchoLienzo,
                              decoration: BoxDecoration(border: Border.all(color: Colors.black), shape: BoxShape.rectangle),
                              child: GestureDetector(
                                onPanUpdate: (DragUpdateDetails details) {
                                  setState(() {
                                    RenderBox renderBox = context.findRenderObject();
                                    Offset _localPosition = renderBox.globalToLocal(details.globalPosition);
                                    newPoints.add(Trazo(_localPosition, colorTrazo));
                                  });
                                },
                                onPanEnd: (DragEndDetails details) {
                                  newPoints.add(null);
                                  List<Map<String, dynamic>> aux = List();
                                  for (Trazo trazo in newPoints) {
                                    if (trazo == null) {
                                      aux.add({"x": -dibujo.separadores, "y": -dibujo.separadores, "color": null});
                                    } else {
                                      aux.add({"x": trazo.offset.dx, "y": trazo.offset.dy, "color": trazo.color.toString().substring(6, 16)});
                                    }
                                  }
                                  Firestore.instance.collection('dibujo').document('uno').updateData({
                                    "points": FieldValue.arrayUnion(aux),
                                  });
                                  dibujo.updateSeperador();
                                },
                                child: Stack(children: [
                                  ClipRect(
                                    child: CustomPaint(
                                      painter: new Pantalla(trazos: dibujo.points, refresh: false),
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
                                      dibu.separadores = 1;
                                      Firestore.instance.collection('dibujo').document('uno').updateData({"points": []});
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
                Flexible(
                  child: chat(context),
                ),
              ],
            ),
          ),
          AnimatedPositioned(
            duration: Duration(milliseconds: 10),
            bottom: tecladoUp ? MediaQuery.of(context).viewInsets.bottom + 10 : 10,
            left: 0,
            right: 0,
            child: _buildComposer(),
          )
        ],
      ),
    );
  }

  Widget chat(BuildContext context) {
    return ListView.builder(
      itemBuilder: (_, int index) => _messages[index],
      itemCount: _messages.length,
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