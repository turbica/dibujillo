import 'dart:ui';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:dibujillo/Controladores/Sesion.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_material_color_picker/flutter_material_color_picker.dart';
import 'package:provider/provider.dart';

class Tienda extends StatefulWidget {
  @override
  TiendaState createState() => TiendaState();
}

class TiendaState extends State<Tienda> {
  bool error = false;

  updateUserColors(Color color) {
    String email = sesion.usuario.email;
    int monedas = sesion.usuario.monedas - 50;
    print(color.toString());
    Firestore.instance.collection('usuarios').document(email).updateData({
      "colores": FieldValue.arrayUnion(
          [color.toString().substring(6, 16).toUpperCase()]),
      "monedas": monedas,
    });
  }

  Future<void> noMonedasDialog() async {
    return showDialog<void>(
      context: context,
      barrierDismissible: false, // user must tap button!
      builder: (BuildContext context) {
        return AlertDialog(
          shape: RoundedRectangleBorder(side: BorderSide(color: Colors.black, width: 1.0), borderRadius: new BorderRadius.circular(15)),
          title: Text('ERROR'),
          content: SingleChildScrollView(
            child: ListBody(
              children: <Widget>[
                Image.asset(
                  'images/monton.gif',
                  fit: BoxFit.cover,
                 // scale: 6,
                ),
                Text('No tienes monedas suficientes!!'),
              ],
            ),
          ),
          actions: <Widget>[
            FlatButton(
              child: Text('CANCELAR'),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      },
    );
  }

  Future<void> comprar(Color color, String nombreColor) async {
    return showDialog<void>(
      context: context,
      barrierDismissible: false, // user must tap button!
      builder: (BuildContext context) {
        return AlertDialog(
          shape: RoundedRectangleBorder(side: BorderSide(color: Colors.black, width: 1.0), borderRadius: new BorderRadius.circular(15)),
          title: Text('COMPRAR COLOR'),
          content: SingleChildScrollView(
            child: ListBody(
              children: <Widget>[
                Text('Seguro que quieres comprar el color ' +
                    nombreColor +
                    ' ?'),
              ],
            ),
          ),
          actions: <Widget>[
            FlatButton(
              child: Text('CANCELAR'),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
            FlatButton(
              child: Text('COMPRAR'),
              onPressed: () {
                if (sesion.usuario.monedas >= 50) {
                  updateUserColors(color);
                } else {
                  error = true;
                }
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      },
    );
  }

  Card buildColor(
      {String text,
      Color backgroundcolor,
      Color textColor,
      Color borderColor,
      Function function}) {
    return Card(
      color: backgroundcolor,
      child: FlatButton(
        onPressed: () async {
          if (!sesion.usuario.colores.contains(textColor)) {
            if (sesion.usuario.monedas >= 50) {
              function(textColor, text);
            } else {
              noMonedasDialog();
            }
          }
        },
        child: Container(
          decoration: BoxDecoration(color: backgroundcolor),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            mainAxisSize: MainAxisSize.max,
            children: <Widget>[
              CircleColor(
                color: textColor,
                circleSize: 30,
              ),
              Text(text,
                  style: TextStyle(
                      color: Colors.black,
                      fontWeight: FontWeight.bold,
                      fontSize: 25)),
              //MainAxisAlignment.spaceBetween,
              Row(
                mainAxisAlignment: MainAxisAlignment.end,
                children: <Widget>[
                  Text(
                    !sesion.usuario.colores.contains(textColor) ? "50" : "",
                    textAlign: TextAlign.end,
                    style: TextStyle(fontSize: 18),
                  ),
                  IconButton(
                    onPressed: () {},
                    icon: !sesion.usuario.colores.contains(textColor)
                        ? Image.asset("images/moneda.png")
                        : Icon(
                            Icons.check,
                            size: 30,
                          ),
                  ),
                ],
              )
            ],
          ),
        ),
      ),
      borderOnForeground: true,
    );
  }

  Sesion sesion;
  List<String> colors = ["Negro", "Azul", "Verde", "Amarillo", "Rojo", "Naranja",
    "Rosa", "Morado", "Marrón", "Mar", "Césped", "Algodón", "Lila", "Gris",
    "Dibujillo", "Cielo", "Mandarina", "Océano", "Bosque", "Salmón"];
  List<Color> colores = [
    Color(0xFF000000),
    Color(0xFF1E88E5),
    Color(0xFF4CAF50),
    Color(0xFFFFEB3B),
    Color(0xFFE53935),
    Color(0xFFEF6C00),
    Color(0xFFF50057),
    Color(0xFF8E24AA),
    Color(0xFF6D4C41),
    Color(0xFF00E5FF),
    Color(0xFF76FF03),
    Color(0xFFF8BBD0),
    Color(0xFFB39DDB),
    Color(0xFF757575),
    Color(0xFF00E676),
    Color(0xFF00B0FF),
    Color(0xFFFFAB40),
    Color(0xFF3F51B5),
    Color(0xFF009688),
    Color(0xFFFA8072),
  ];

  Widget buildBody(BuildContext ctxt, int index) {
    return buildColor(
        text: colors[index],
        textColor: colores[index],
        backgroundcolor: Color(0xff61ffa6),
        borderColor: Colors.blueGrey,
        function: comprar);
  }

  @override
  Widget build(BuildContext context) {
    sesion = Provider.of<Sesion>(context);
    return Scaffold(
      appBar: AppBar(
        title: Text(
          "TIENDA",
          style: TextStyle(
              fontStyle: FontStyle.normal,
              color: Colors.black,
              fontSize: 26,
              shadows: <Shadow>[
                Shadow(
                  offset: Offset(1.0, 0.0),
                  blurRadius: 2.0,
                  color: Colors.green,
                )
              ]),
        ),
        backgroundColor: Color(0xff61ffa6),
        leading: Padding(
          padding: EdgeInsets.only(left: 12),
          child: Image.asset(
            'images/logoChiqui.png',
            fit: BoxFit.cover,
          ),
        ),
        actions: <Widget>[
          Column(
            children: <Widget>[
              SizedBox(height: 6),
              Image.asset(
                'images/guarda.gif',
                fit: BoxFit.cover,
                scale: 6,
              ),
              Text("${sesion.usuario.monedas}", style: TextStyle(fontSize: 13),)
            ],
          ),
          SizedBox(width: 6),
        ],
      ),
      backgroundColor: Color(0xffbdfccf),
      body: new ListView.builder(
        padding: const EdgeInsets.all(10.0),
        itemCount: colors.length,
        itemBuilder: (BuildContext ctxt, int index) => buildBody(ctxt, index),
      ),
    );
  }
}
