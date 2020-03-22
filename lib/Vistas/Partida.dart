import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:dibujillo/Chat/Chat.dart';
import 'package:dibujillo/Controladores/Dibujo.dart';
import 'package:dibujillo/Modelos/Trazo.dart';
import 'package:dibujillo/Vistas/Principal.dart';
import 'package:dibujillo/Vistas/Registrase.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';
import 'package:flutter/services.dart';
import 'package:flutter_material_color_picker/flutter_material_color_picker.dart';
import 'package:provider/provider.dart';
import 'package:dibujillo/Vistas/InicioSesion.dart';

void main() {
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider<Dibujo>(create: (context) => Dibujo()),
      ],
      child: MyApp(),
    ),
  );
}

class Partida extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp]);
    return MaterialApp(
      title: 'Dibujillo',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.blue,
      ),
      routes: <String, WidgetBuilder>{
        '/signin': (BuildContext context) => new SigninPage(),
        '/signup': (BuildContext context) => new SignupPage(),
      },
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  List<Trazo> newPoints = [];
  Color colorTrazo = Colors.black;

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
                  colorTrazo = Color.fromRGBO(
                      color.red, color.green, color.blue, color.opacity);
                  Navigator.pop(context);
                },
                selectedColor: colorTrazo,
              ),
            ),
          );
        });
  }

  @override
  Widget build(BuildContext context) {
    Dibujo dibu = Provider.of<Dibujo>(context);
    double ancho = MediaQuery.of(context).size.width;
    return Scaffold(
      body: SafeArea(
        child: Column(
          //mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            Consumer<Dibujo>(
              builder: (context, dibujo, child) {
                if (dibujo.points.length > newPoints.length) newPoints.clear();
                bool soyMasPequeno = ancho < dibujo.anchoLienzo;
                return Transform.scale(
                  scale: soyMasPequeno ? 1 : ancho / dibujo.anchoLienzo,
                  alignment: Alignment.topLeft,
                  child: Container(
                    width: soyMasPequeno ? ancho : dibujo.anchoLienzo,
                    height: soyMasPequeno ? ancho : dibujo.anchoLienzo,
                    decoration: BoxDecoration(
                        border: Border.all(color: Colors.black),
                        shape: BoxShape.rectangle
                    ),
                    child: GestureDetector(
                      onPanUpdate: (DragUpdateDetails details) {
                        setState(() {
                          RenderBox renderBox = context.findRenderObject();
                          Offset _localPosition =
                          renderBox.globalToLocal(details.globalPosition);
                          newPoints.add(Trazo(_localPosition, colorTrazo));
                        });
                      },
                      onPanEnd: (DragEndDetails details) {
                        newPoints.add(null);
                        List<Map<String, dynamic>> aux = List();
                        for (Trazo trazo in newPoints) {
                          if (trazo == null) {
                            aux.add({
                              "x": -dibujo.separadores,
                              "y": -dibujo.separadores,
                              "color": null
                            });
                          } else {
                            aux.add({
                              "x": trazo.offset.dx,
                              "y": trazo.offset.dy,
                              "color": trazo.color.toString().substring(6, 16)
                            });
                          }
                        }
                        Firestore.instance
                            .collection('dibujo')
                            .document('uno')
                            .updateData({
                          "points": FieldValue.arrayUnion(aux),
                        });
                        dibujo.updateSeperador();
                      },
                      child: Stack(children: [
                        ClipRect(
                          child: CustomPaint(
                            painter:
                            new Pantalla(trazos: dibujo.points, refresh: false),
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
                );
              },
            ),
            Expanded(
              child: Container(
                  child: Chat2()),
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          showCupertinoModalPopup(
            context: context,
            builder: (BuildContext context) => CupertinoActionSheet(
                title: const Text('Opciones'),
                actions: <Widget>[
                  CupertinoActionSheetAction(
                    child: const Text('Color'),
                    onPressed: () {
                      Navigator.pop(context, 'Color');
                      _showDialog();
                    },
                  ),
                  CupertinoActionSheetAction(
                    child: const Text('Lienzo'),
                    onPressed: () {
                      Firestore.instance
                          .collection('dibujo')
                          .document('uno')
                          .updateData({"anchoLienzo": ancho});
                      Navigator.pop(context, 'Lienzo');
                    },
                  ),
                  CupertinoActionSheetAction(
                    child: const Text('Borrar'),
                    onPressed: () {
                      Firestore.instance
                          .collection('dibujo')
                          .document('uno')
                          .updateData({"points": []});
                      Navigator.pop(context, 'Borrar');
                      dibu.separadores = 1;
                    },
                  ),
                ],
                cancelButton: CupertinoActionSheetAction(
                  child: const Text('Cancelar'),
                  isDefaultAction: true,
                  onPressed: () {
                    Navigator.pop(context, 'Cancelar');
                  },
                )),
          );
        },
        tooltip: 'Borrar',
        child: Icon(Icons.menu),
      ),
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

class Chat2 extends StatefulWidget {
  @override
  State createState() => new ChatWindow2();
}

class ChatWindow2 extends State<Chat2> with TickerProviderStateMixin {
  final List<Msg> _messages = <Msg>[];
  final TextEditingController _textController = new TextEditingController();
  bool _isWriting = false;

  @override
  Widget build(BuildContext ctx) {
    return new Column(
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[
          new Flexible(
              flex: 1,
              child: new ListView.builder(
                itemBuilder: (_, int index) => _messages[index],
                itemCount: _messages.length,
                reverse: true,
                padding: new EdgeInsets.all(6.0),
              )),
          new Divider(height: 1.0),
          new Container(
            child: _buildComposer(),
            decoration: new BoxDecoration(color: Theme.of(ctx).cardColor),
          ),
        ]
    );
  }


  Widget _buildComposer() {
    return new IconTheme(
      data: new IconThemeData(color: Theme.of(context).accentColor),
      child: new Container(
          margin: const EdgeInsets.symmetric(horizontal: 9.0),
          child: new Row(
            children: <Widget>[
              new Flexible(
                child: new TextField(
                  controller: _textController,
                  onChanged: (String txt) {
                    setState(() {
                      _isWriting = txt.length > 0;
                    });
                  },
                  onSubmitted: _submitMsg,
                  decoration:
                  new InputDecoration.collapsed(hintText: "Enter some text to send a message"),
                ),
              ),
              new Container(
                  margin: new EdgeInsets.symmetric(horizontal: 3.0),
                  child: Theme.of(context).platform == TargetPlatform.iOS
                      ? new CupertinoButton(
                      child: new Text("Submit"),
                      onPressed: _isWriting ? () => _submitMsg(_textController.text)
                          : null
                  )
                      : new IconButton(
                    icon: new Icon(Icons.message),
                    onPressed: _isWriting
                        ? () => _submitMsg(_textController.text)
                        : null,
                  )
              ),
            ],
          ),
          decoration: Theme.of(context).platform == TargetPlatform.iOS
              ? new BoxDecoration(
              border:
              new Border(top: new BorderSide(color: Colors.brown))) :
          null
      ),
    );
  }

  void _submitMsg(String txt) {
    _textController.clear();
    setState(() {
      _isWriting = false;
    });
    Msg msg = new Msg(
      txt: txt,
      animationController: new AnimationController(
          vsync: this,
          duration: new Duration(milliseconds: 800)
      ),
    );
    setState(() {
      _messages.insert(0, msg);
    });
    msg.animationController.forward();
  }

  @override
  void dispose() {
    for (Msg msg in _messages) {
      msg.animationController.dispose();
    }
    super.dispose();
  }

}