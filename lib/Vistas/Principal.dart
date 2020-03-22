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
              padding: EdgeInsets.only(left:12),
              child: Image.asset(
                'images/logoChiqui.png',
                fit: BoxFit.cover,
              )
          )
      ),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisSize: MainAxisSize.min,
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: <Widget>[
            new RaisedButton(
              onPressed: (){
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => Partida()),
                );
              },
              textColor: Colors.white,
              child: Container(
                color: Color(0xff61ffa6),
                alignment: Alignment.center,
                padding: const EdgeInsets.only(bottom: 15,top: 15),
                child: const Text(
                    'PARTIDA',
                    style: TextStyle(fontSize: 20)
                ),
              ),
            ),
            new RaisedButton(
              onPressed: (){
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => PrincipalAmigos()),
                );
              },
              textColor: Colors.white,
              child: Container(
                alignment: Alignment.center,
                color: Color(0xff61ffa6),
                padding: const EdgeInsets.all(15.0),
                child: const Text(
                    'JUEGA CON AMIGOS',
                    style: TextStyle(fontSize: 20)
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

