import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:dibujillo/Modelos/Dibujo.dart';
import 'package:flutter/material.dart';
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
  List<Offset> newPoints = [];

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
      body: Consumer<Dibujo>(
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
                    newPoints.add(_localPosition);
                  });

                  //print("dibujo actualizado");
                },
                onPanEnd: (DragEndDetails details) {
                  newPoints.add(null);
                  List<Map<String, double>> aux = List();
                  for (Offset offset in newPoints) {
                    if (offset == null) {
                      aux.add(
                          {"x": -dibujo.separadores, "y": -dibujo.separadores});
                    } else {
                      aux.add({"x": offset.dx, "y": offset.dy});
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
                      painter: new Pantalla(points: dibujo.points),
                      size: Size.infinite),
                  CustomPaint( // Esto aun no se por que no va
                      painter: new Pantalla(points: newPoints),
                      size: Size.infinite),
                ]),
              ),
            ),
          );
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Firestore.instance
              .collection('dibujo')
              .document('uno')
              .setData({"points": []});
        },
        tooltip: 'Borrar',
        child: Icon(Icons.clear),
      ),
    );
  }
}

class Pantalla extends CustomPainter {
  List<Offset> points;

  Pantalla({this.points});

  @override
  void paint(Canvas canvas, Size size) {
    Paint paint = new Paint()
      ..color = Colors.black
      ..strokeCap = StrokeCap.round
      ..strokeWidth = 3.0;

    for (int i = 0; i < points.length - 1; i++) {
      if (points[i] != null && points[i + 1] != null) {
        canvas.drawLine(points[i], points[i + 1], paint);
      }
    }
  }

  @override
  bool shouldRepaint(Pantalla oldDelegate) => oldDelegate.points != points;
}
