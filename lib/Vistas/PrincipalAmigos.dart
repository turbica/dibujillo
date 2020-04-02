import 'dart:ffi';

import 'package:dibujillo/Controladores/Sesion.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:dibujillo/Vistas/Juego.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';
import 'package:uuid/uuid.dart';

class PrincipalAmigos extends StatefulWidget {
  @override
  PrincipalAmigosState createState() => PrincipalAmigosState();
}

class PrincipalAmigosState extends State<PrincipalAmigos> {
  Sesion sesion;

  bool cargando = false;

  String _nuevoCodigo = "";
  String _nPartida = "";
  String _codigo = "";
  int _value = 2;

  Future<String> crearPartida() async {
    String id = Uuid().v1().substring(0, 7);
    await Firestore.instance.collection('partidas').document(id).setData({
      "id": id,
      "clave": _nuevoCodigo.trim(),
      "num_jugadores": _value,
      "activos": 0,
      "hay_hueco": true,
      "jugadores": [],
      "turno": 0,
      "chat": [],
      "palabra": 'dibujillo',
      "puntos": [],
      "anchoLienzo": 0.0,
    });
    return Future.value(id);
  }

  void _showDialog() async {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        // return object of type Dialog
        return AlertDialog(
          title: Text("Error al cargar partida"),
          content: Container(
            child: Text('No ha sido posible entrar a la partida solicitada, por favor intentelo de nuevo mas tarde'),
          ),
          actions: <Widget>[
            FlatButton(
              onPressed: () {
                Navigator.pop(context);
              },
              child: Text('De acuerdo'),
            )
          ],
        );
      },
    );
  }

  Future<void> _showPartidaDialog(String id) async {
    await showDialog(
      context: context,
      builder: (BuildContext context) {
        bool copiado = false;
        return StatefulBuilder(
          builder: (context, setState) {
            return AlertDialog(
              title: Text("Codigo de la partida"),
              content: Container(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  mainAxisSize: MainAxisSize.min,
                  children: <Widget>[
                    Text(id),
                    SizedBox(
                      width: 20,
                    ),
                    GestureDetector(
                      onTap: () {
                        Clipboard.setData(ClipboardData(text: id));
                        setState(() {
                          copiado = true;
                        });
                      },
                      child: Icon(copiado ? Icons.check : Icons.content_copy),
                    ),
                  ],
                ),
              ),
              actions: <Widget>[
                FlatButton(
                  onPressed: () {
                    Navigator.pop(context);
                  },
                  child: Text('Comenzar'),
                )
              ],
            );
          },
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    sesion = Provider.of<Sesion>(context);
    return Scaffold(
      appBar: AppBar(
        title: Text("PRINCIPAL CON AMIGOS"),
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
            height: double.infinity,
            child: Center(
              child: SingleChildScrollView(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  mainAxisSize: MainAxisSize.min,
                  children: <Widget>[
                    Flexible(
                      flex: 1,
                      child: Column(
                        children: <Widget>[
                          Card(
                            borderOnForeground: true,
                            margin: EdgeInsets.all(20),
                            child: Container(
                              color: Color(0xff61ffa6),
                              alignment: Alignment.center,
                              padding: const EdgeInsets.only(bottom: 15, top: 15),
                              child: const Text(
                                'Nueva Partida',
                                style: TextStyle(fontSize: 20),
                              ),
                            ),
                          ),
                          SizedBox(
                            height: 30,
                            child: Center(
                              child: Text(
                                'Número de jugadores: $_value',
                                style: TextStyle(fontSize: 18),
                              ),
                            ),
                          ),
                          Slider(
                            value: _value.toDouble(),
                            min: 2.0,
                            max: 8.0,
                            divisions: 7,
                            activeColor: Color(0xff61ffa6),
                            inactiveColor: Colors.black,
                            label: _value.toString(),
                            onChanged: (double newValue) {
                              setState(() {
                                _value = newValue.round();
                              });
                            },
                            semanticFormatterCallback: (double newValue) {
                              return 'Partida para ${newValue.round()} jugadores';
                            },
                          ),
                          Card(
                            borderOnForeground: true,
                            margin: EdgeInsets.only(left: 40, right: 40),
                            child: TextFormField(
                              decoration: InputDecoration(
                                filled: true,
                                fillColor: Colors.white,
                                labelText: 'Codigo',
                                labelStyle: TextStyle(fontFamily: 'Montserrat', fontWeight: FontWeight.bold, color: Colors.grey),
                                focusedBorder: UnderlineInputBorder(
                                  borderSide: BorderSide(
                                    color: Color(0xff61ffa6),
                                  ),
                                ),
                              ),
                              onChanged: (value) {
                                _nuevoCodigo = value;
                              },
                              initialValue: _nuevoCodigo,
                            ),
                          ),
                          Center(
                            heightFactor: 1.5,
                            child: Material(
                              borderRadius: BorderRadius.circular(80.0),
                              shadowColor: Colors.black,
                              color: Color(0xff61ffa6),
                              elevation: 7.0,
                              child: FloatingActionButton(
                                onPressed: () async {
                                  setState(() {
                                    cargando = true;
                                  });
                                  String id = await crearPartida();
                                  print(id);
                                  await sesion.escucharPartida(id, _nuevoCodigo);
                                  setState(() {
                                    cargando = false;
                                  });
                                  await _showPartidaDialog(id);
                                  Navigator.push(
                                    context,
                                    MaterialPageRoute(builder: (context) => Juego()),
                                  );
                                },
                                heroTag: "first",
                                backgroundColor: Color(0xff61ffa6),
                                elevation: 0,
                                child: Text(
                                  'GO',
                                  style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontFamily: 'Montserrat'),
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                    Flexible(
                      flex: 1,
                      child: Column(
                        children: <Widget>[
                          Card(
                            borderOnForeground: true,
                            margin: EdgeInsets.all(20),
                            child: Container(
                              color: Color(0xff61ffa6),
                              alignment: Alignment.center,
                              padding: const EdgeInsets.all(15),
                              child: const Text(
                                'Partida Existente',
                                style: TextStyle(fontSize: 20),
                              ),
                            ),
                          ),
                          Column(
                            children: <Widget>[
                              Card(
                                borderOnForeground: true,
                                margin: EdgeInsets.only(left: 40, right: 40),
                                child: TextFormField(
                                  decoration: InputDecoration(
                                    filled: true,
                                    fillColor: Colors.white,
                                    labelText: 'Numero de partida',
                                    labelStyle: TextStyle(fontFamily: 'Montserrat', fontWeight: FontWeight.bold, color: Colors.grey),
                                    // hintText: 'EMAIL',
                                    // hintStyle: ,
                                    focusedBorder: UnderlineInputBorder(
                                      borderSide: BorderSide(color: Colors.green),
                                    ),
                                  ),
                                  onChanged: (value) {
                                    _nPartida = value;
                                  },
                                  initialValue: _nPartida,
                                ),
                              ),
                              Card(
                                borderOnForeground: true,
                                margin: EdgeInsets.only(top: 5, left: 40, right: 40),
                                child: TextFormField(
                                  decoration: InputDecoration(
                                    filled: true,
                                    fillColor: Colors.white,
                                    labelText: 'Codigo',
                                    labelStyle: TextStyle(fontFamily: 'Montserrat', fontWeight: FontWeight.bold, color: Colors.grey),
                                    // hintText: 'EMAIL',
                                    // hintStyle: ,
                                    focusedBorder: UnderlineInputBorder(
                                      borderSide: BorderSide(color: Colors.green),
                                    ),
                                  ),
                                  onChanged: (value) {
                                    _codigo = value;
                                  },
                                ),
                              ),
                            ],
                          ),
                          Center(
                            heightFactor: 1.5,
                            child: Material(
                              borderRadius: BorderRadius.circular(80.0),
                              shadowColor: Colors.black,
                              color: Color(0xff61ffa6),
                              elevation: 7.0,
                              child: FloatingActionButton(
                                onPressed: () async {
                                  setState(() {
                                    cargando = true;
                                  });
                                  if (_nPartida != null && _nPartida.trim() != "") {
                                    bool exito = await sesion.escucharPartida(_nPartida.trim(), _codigo);
                                    cargando = false;
                                    print('Entrar a partida: $exito');
                                    if (exito) {
                                      Navigator.push(
                                        context,
                                        MaterialPageRoute(builder: (context) => Juego()),
                                      );
                                    } else {
                                      setState(() {
                                        _showDialog();
                                      });
                                    }
                                  } else {
                                    setState(() {
                                      cargando = false;
                                      _showDialog();
                                    });
                                  }
                                },
                                heroTag: "second",
                                backgroundColor: Color(0xff61ffa6),
                                elevation: 0,
                                child: Text(
                                  'GO',
                                  style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontFamily: 'Montserrat'),
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
          Visibility(
            visible: cargando,
            child: Center(
              child: Container(
                decoration: BoxDecoration(
                  color: Colors.grey[300],
                  borderRadius: BorderRadius.circular(10.0),
                ),
                width: 70.0,
                height: 70.0,
                child: new Padding(
                  padding: const EdgeInsets.all(5.0),
                  child: new Center(
                    child: new CircularProgressIndicator(),
                  ),
                ),
              ),
            ),
          )
        ],
      ),
      backgroundColor: Color(0xffbdfccf),
    );
  }
}
