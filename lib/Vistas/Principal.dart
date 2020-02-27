import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class PrincipalPage extends StatefulWidget {
  @override
  PrincipalPageState createState() => PrincipalPageState();
}

class PrincipalPageState extends State<PrincipalPage> {
  void muestra_error() {
    bool _visible = true;

    @override
    Widget build(BuildContext context) {
      return Scaffold(
        body: Center(
          child: AnimatedOpacity(
            // Si el Widget debe ser visible, anime a 1.0 (completamente visible). Si
            // el Widget debe estar oculto, anime a 0.0 (invisible).
            opacity: _visible ? 1.0 : 0.0,
            duration: Duration(milliseconds: 500),
            // El cuadro verde debe ser el hijo de AnimatedOpacity
            child: Container(
              width: 200.0,
              height: 200.0,
              color: Colors.green,
            ),
          ),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () {
            // Asegúrate de llamar a setState. Esto le dice a Flutter que reconstruya el
            // UI con los cambios!
            setState(() {
              _visible = !_visible;
            });
          },
          tooltip: 'Toggle Opacity',
          child: Icon(Icons.flip),
        ), // Esta coma final hace que el auto-formateo sea más agradable para los métodos de construcción.
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      backgroundColor: Colors.white,
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.only(top: 50.0),
              child: Column(
                children: <Widget>[
                  Container(
                    //padding: EdgeInsets.fromLTRB(50.0, 140.0, 0.0, 0.0),
                    child: Center(
                      child: Image.asset('images/dibujillo.jpeg'),
                    ),
                  ),
                ],
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              ),
            ),
            Container(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  mainAxisAlignment: MainAxisAlignment.center,
                  mainAxisSize: MainAxisSize.min,
                  children: <Widget>[
                    new RaisedButton(
                      onPressed: (){},
                      textColor: Colors.white,
                      child: Container(
                        alignment: Alignment.center,
                        decoration: const BoxDecoration(
                          gradient: LinearGradient(
                            colors: [
                              Colors.green[900],
                              Colors.green[700],
                              Colors.green[300]
                            ],
                          ),
                        ),
                        padding: const EdgeInsets.all(10.0),
                        child: const Text(
                          'JUGAR',
                          style: TextStyle(fontSize: 20)
                        ),
                      ),
                    ),
                  ],
                )
            )
          ],
        ),
      ),);
  }
}