import 'dart:ffi';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:dibujillo/Vistas/Partida.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class PrincipalAmigos extends StatefulWidget {
  @override

  PrincipalAmigosState createState() => PrincipalAmigosState();
}

class PrincipalAmigosState extends State<PrincipalAmigos> {
  String _codigo;
  String _nPartida;
  int _value=2;
  @override
  Widget build(BuildContext context) {

      return Scaffold(
        appBar: AppBar(
            title: Text("PRINCIPAL CON AMIGOS"),
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
              new Card(
                child: Container(
                  color: Color(0xff61ffa6),
                  alignment: Alignment.center,
                  padding: const EdgeInsets.only(bottom: 15,top: 15),
                  child: const Text(
                      'Nueva Partida',
                      style: TextStyle(fontSize: 20)
                  ),
                ),
              ),
              Slider( value: _value.toDouble(),
                  min: 2.0,
                  max: 8.0,
                  divisions: 7,
                  activeColor: Color(0xff61ffa6),
                  inactiveColor: Colors.black,
                  label: _value.toString(),
                  onChanged: (double newValue) {
                    setState(() {
                      _value = newValue.round() ;
                    });
                  },
                  semanticFormatterCallback: (double newValue) {
                    return '${newValue.round()} dollars';
                  }
              ),
              new Card(
                child: Container(
                  alignment: Alignment.center,
                  color: Color(0xff61ffa6),
                  padding: const EdgeInsets.all(15.0),
                  child: const Text(
                      'Código',
                      style: TextStyle(fontSize: 20)
                  ),
                ),
              ),
              new TextFormField(
                  decoration: InputDecoration(
                      filled: true,
                      fillColor: Colors.white,
                      labelText: 'Codigo',
                      labelStyle: TextStyle(
                          fontFamily: 'Montserrat',
                          fontWeight: FontWeight.bold,
                          color: Colors.grey),
                      // hintText: 'EMAIL',
                      // hintStyle: ,
                      focusedBorder: UnderlineInputBorder(
                          borderSide: BorderSide(color: Color(0xff61ffa6)))),
                  validator: (value) => value.isEmpty ? 'codigo esta vacio': null,
                  onSaved: (value) => _codigo = value
              ),
              Center(
                  child: Material(
                      borderRadius: BorderRadius.circular(80.0),
                      shadowColor: Colors.black,
                      color: Color(0xff61ffa6),
                      elevation: 7.0,
                      child: FloatingActionButton(
                          onPressed: (){
                            Navigator.push(
                              context,
                              MaterialPageRoute(builder: (context) => Partida()),
                            );
                          },
                          heroTag: "first",
                          backgroundColor: Color(0xff61ffa6),
                          elevation: 0,
                          child: GestureDetector(
                            onTap: () {
                              Navigator.of(context).pushNamed('/partida');
                            },
                            child: Text(
                              'GO',
                              style: TextStyle(
                                  color: Colors.white,
                                  fontWeight: FontWeight.bold,
                                  fontFamily: 'Montserrat'),
                            ),
                          )
                      )
                  )
              ),
              new Card(
                child: Container(
                  color: Color(0xff61ffa6),
                  alignment: Alignment.center,
                  padding: const EdgeInsets.only(bottom: 15,top: 15),
                  child: const Text(
                      'Partida Existente',
                      style: TextStyle(fontSize: 20)

                  ),
                ),
              ),
              new TextFormField(
                  decoration: InputDecoration(
                      filled: true,
                      fillColor: Colors.white,
                      labelText: 'Numero de partida',
                      labelStyle: TextStyle(
                          fontFamily: 'Montserrat',
                          fontWeight: FontWeight.bold,
                          color: Colors.grey),
                      // hintText: 'EMAIL',
                      // hintStyle: ,
                      focusedBorder: UnderlineInputBorder(
                          borderSide: BorderSide(color: Colors.green))),
                  validator: (value) => value.isEmpty ? 'Numero de partida esta vacio': null,
                  onSaved: (value) => _nPartida = value
              ),
              new TextFormField(
                  decoration: InputDecoration(
                      filled: true,
                      fillColor: Colors.white,
                      labelText: 'Codigo',
                      labelStyle: TextStyle(
                          fontFamily: 'Montserrat',
                          fontWeight: FontWeight.bold,
                          color: Colors.grey),
                      // hintText: 'EMAIL',
                      // hintStyle: ,
                      focusedBorder: UnderlineInputBorder(
                          borderSide: BorderSide(color: Colors.green))),
                  validator: (value) => value.isEmpty ? 'codigo esta vacio': null,
                  onSaved: (value) => _codigo = value
              ),
              Center(

                  child: Material(
                      borderRadius: BorderRadius.circular(80.0),
                      shadowColor: Colors.black,
                      color: Color(0xff61ffa6),
                      elevation: 7.0,
                      child: FloatingActionButton(
                          onPressed: (){
                            Navigator.push(
                              context,
                              MaterialPageRoute(builder: (context) => Partida()),
                            );
                          },
                        heroTag: "second",
                          backgroundColor: Color(0xff61ffa6),
                          elevation: 0,
                          child: GestureDetector(
                            onTap: () {
                              Navigator.of(context).pushNamed('/partida');
                            },
                            child: Text(
                              'GO',
                              style: TextStyle(
                                  color: Colors.white,
                                  fontWeight: FontWeight.bold,
                                  fontFamily: 'Montserrat'),
                            ),
                          )
                      )
                  )
              ),
            ],
          ),
        ),
        backgroundColor: Color(0xffbdfccf),
      );
  }
}
