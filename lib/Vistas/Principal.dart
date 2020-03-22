import 'package:dibujillo/Vistas/PrincipalAmigos.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:dibujillo/Vistas/Partida.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class Principal extends StatefulWidget {
  @override
  PrincipalState createState() => PrincipalState();
}

class PrincipalState extends State<Principal> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          title: Text("PRINCIPAL"),
          backgroundColor: Color(0xff61ffa6),
          leading: Padding(
              padding: EdgeInsets.only(left: 12),
              child: Image.asset(
                'images/logoChiqui.png',
                fit: BoxFit.cover,
              ))),
      body: SingleChildScrollView(
        child: Column(
         mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: <Widget>[
            new Card(
              borderOnForeground: true,
              margin: EdgeInsets.only(top: 200, left: 15, right: 15),
              child: RaisedButton(
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => Partida()),
                  );
                },
                color: Color(0xff61ffa6),
                textColor: Colors.black,
                child: Container(
                  alignment: Alignment.center,
                  padding: const EdgeInsets.all(15),
                  child: const Text('PARTIDA', style: TextStyle(fontSize: 20)),
                ),
              ),
            ),
            new Card(
              borderOnForeground: true,
              margin: EdgeInsets.all(15),
              child: RaisedButton(
                color: Color(0xff61ffa6),
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => PrincipalAmigos()),
                  );
                },
                textColor: Colors.black,
                child: Container(
                  alignment: Alignment.center,
                  padding: const EdgeInsets.all(15.0),
                  child: const Text('JUEGA CON AMIGOS',
                      style: TextStyle(fontSize: 20)),
                ),
              ),
            ),
          ],
        ),
      ),
      backgroundColor: Color(0xffbdfccf),
    );
  }
}
