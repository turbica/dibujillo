import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:dibujillo/Controladores/Dibujo.dart';
import 'package:dibujillo/Modelos/Trazo.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_material_color_picker/flutter_material_color_picker.dart';
import 'package:provider/provider.dart';

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

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
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
      home: MyHomePage(title: 'Flutter Demo Home Page'),
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
          content: MaterialColorPicker(

            allowShades: true, // default true
            onMainColorChange: (ColorSwatch color) {
              colorTrazo = Color.fromRGBO(color.red, color.green, color.blue, color.opacity);
              Navigator.pop(context);
            },
            selectedColor: colorTrazo,
          ),
        );
      }
      );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Consumer<Dibujo>(
          builder: (context, dibujo, child) {
            return Padding(
              padding: const EdgeInsets.all(0.0),
              child: Container(
                decoration:
                    BoxDecoration(border: Border.all(color: Colors.black)),
                // Center is a layout widget. It takes a single child and positions it
                // in the middle of the parent.
                child: GestureDetector(
                  onPanUpdate: (DragUpdateDetails details) {
                    setState(() {
                      RenderBox renderBox = context.findRenderObject();
                      Offset _localPosition =
                          renderBox.globalToLocal(details.globalPosition);
                      newPoints.add(Trazo(_localPosition, colorTrazo));
                    });

                    //print("dibujo actualizado");
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
                    newPoints.clear();
                    dibujo.updateSeperador();
                  },
                  child: Stack(children: [
                    CustomPaint(
                        painter:
                            new Pantalla(trazos: dibujo.points, refresh: false),
                        size: Size.infinite),
                    CustomPaint(
                        // Esto aun no se por que no va
                        painter: new Pantalla(trazos: newPoints, refresh: true),
                        size: Size.infinite),
                  ]),
                ),
              ),
            );
          },
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          showCupertinoModalPopup(
            context: context,
            builder: (BuildContext context) => CupertinoActionSheet(
                title: const Text('Choose Options'),
                message: const Text('Your options are '),
                actions: <Widget>[
                  CupertinoActionSheetAction(
                    child: const Text('Color'),
                    onPressed: () {
                      Navigator.pop(context, 'Color');
                      _showDialog();

                    },
                  ),
                  CupertinoActionSheetAction(
                    child: const Text('Borrar'),
                    onPressed: () {
                      Firestore.instance
                          .collection('dibujo')
                          .document('uno')
                          .setData({"points": []});
                      Navigator.pop(context, 'Borrar');
                    },
                  )
                ],
                cancelButton: CupertinoActionSheetAction(
                  child: const Text('Cancel'),
                  isDefaultAction: true,
                  onPressed: () {
                    Navigator.pop(context, 'Cancel');
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
