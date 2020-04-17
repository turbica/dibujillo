import 'package:flutter/material.dart';

class FinPartida extends StatefulWidget {
  @override
  _FinPartidaState createState() => _FinPartidaState();
}

class _FinPartidaState extends State<FinPartida> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("FIN PARTIDA"),
        backgroundColor: Color(0xff61ffa6),
        leading: Padding(
          padding: EdgeInsets.only(left: 12),
          child: Image.asset(
            'images/logoChiqui.png',
            fit: BoxFit.cover,
          ),
        ),
      ),
      body: Container(
        child: Text('holaaaaa'),
      ),
    );
  }
}
