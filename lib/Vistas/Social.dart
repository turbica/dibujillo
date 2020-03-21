import 'package:flutter/material.dart';
import 'package:dibujillo/Vistas/Partida.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class Social extends StatefulWidget {
  @override
  SocialState createState() => SocialState();
}

class SocialState extends State<Social> {
    @override
    Widget build(BuildContext context) {
      return Scaffold(
        appBar: AppBar(
          title: Text("SOCIAL"),
          backgroundColor: Color(0xff61ffa6),
          leading: Padding(
            padding: EdgeInsets.only(left:12),
            child: Image.asset(
              'images/logoChiqui.png',
              fit: BoxFit.cover,
            )
          )
        ),
        endDrawer: Drawer(
          child: ListView(
            // Important: Remove any padding from the ListView.
            padding: EdgeInsets.zero,
            children: <Widget>[
              UserAccountsDrawerHeader(
                accountName: new Text('Lucía'),
                currentAccountPicture: new GestureDetector(
                  child: new CircleAvatar(
                    backgroundImage: new NetworkImage(""),
                  )
                ),
              ),
              ListTile(
                title: Text('Editar perfil'),
                trailing: new Icon(Icons.edit),
                onTap: () {
                  // Update the state of the app.
                  // ...
                },
              ),
              ListTile(
                title: Text('Cerrar sesión'),
                trailing: new Icon(Icons.exit_to_app),
                onTap: () {
                  // Update the state of the app.
                  // ...
                },
              ),
            ],
          ),
        ),
        backgroundColor: Color(0xffbdfccf),
      );
    }
}
