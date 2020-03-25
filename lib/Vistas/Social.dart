import 'package:dibujillo/Controladores/Sesion.dart';
import 'package:flutter/material.dart';
import 'package:dibujillo/Vistas/Juego.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:provider/provider.dart';

class Social extends StatefulWidget {
  @override
  SocialState createState() => SocialState();
}

class SocialState extends State<Social> {
  Sesion sesion;

  @override
  Widget build(BuildContext context) {
    sesion = Provider.of<Sesion>(context);
    return Scaffold(
      appBar: AppBar(
        title: Text("SOCIAL"),
        backgroundColor: Color(0xff61ffa6),
        leading: Padding(
          padding: EdgeInsets.only(left: 12),
          child: Image.asset(
            'images/logoChiqui.png',
            fit: BoxFit.cover,
          ),
        ),
      ),
      endDrawer: Drawer(
        child: ListView(
          // Important: Remove any padding from the ListView.
          padding: EdgeInsets.zero,
          children: <Widget>[
            UserAccountsDrawerHeader(
              accountName: Text(sesion.user.displayName),
              accountEmail: Text(sesion.user.email),
              currentAccountPicture: new GestureDetector(
                child: CircleAvatar(
                  backgroundImage: NetworkImage(sesion.user.photoUrl),
                ),
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
