import 'package:dibujillo/Controladores/Sesion.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:dibujillo/Vistas/EditarPerfil.dart';
import 'package:dibujillo/Modelos/Usuario.dart';

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
                Usuario user = sesion.user;
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => EditarPerfil(sesion.user)),
                );
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
