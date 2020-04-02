import 'package:dibujillo/Controladores/Sesion.dart';
import 'package:flutter/material.dart';
import 'package:dibujillo/Vistas/Juego.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:provider/provider.dart';

class Tienda extends StatefulWidget {
  @override
  TiendaState createState() => TiendaState();
}

class TiendaState extends State<Tienda> {
  Sesion sesion;
  List <String> colors = ["Azul","Verde","Amarillo"];

  Widget buildBody(BuildContext ctxt, int index) {
    return new ListTile(
      title: new Text(colors[index]),
    );
  }

  @override
  Widget build(BuildContext context) {
    sesion = Provider.of<Sesion>(context);
    return Scaffold(
      appBar: AppBar(
        title: Text("TIENDA"),
        backgroundColor: Color(0xff61ffa6),
        leading: Padding(
          padding: EdgeInsets.only(left: 12),
          child: Image.asset(
            'images/logoChiqui.png',
            fit: BoxFit.cover,
          ),
        ),
      ),
      backgroundColor: Color(0xffbdfccf),
      body: new ListView.builder(
        padding: const EdgeInsets.all(10.0),
        itemCount: colors.length,
        itemBuilder: (BuildContext ctxt, int index) => buildBody(ctxt,index),
      ),
    );
  }
}
