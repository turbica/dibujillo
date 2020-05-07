import 'package:dibujillo/Controladores/Sesion.dart';
import 'package:dibujillo/NavigationBar.dart';
import 'package:dibujillo/Vistas/SigninPage.dart';
import 'package:dibujillo/Vistas/SignupPage.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider<Sesion>(create: (context) => Sesion()),
      ],
      child: MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp]);
    Sesion sesion = Provider.of<Sesion>(context, listen: false);
    return MaterialApp(
      title: 'Dibujillo',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primaryColor: Color(0xffbdfccf),
        accentColor: Color(0xff61ffa6),
      ),
      routes: <String, WidgetBuilder>{
        '/signin': (BuildContext context) => new SigninPage(),
        '/signup': (BuildContext context) => new SignupPage(),
        '/principal': (BuildContext context) => new NavigationBar(),
      },
      home: StreamBuilder<FirebaseUser>(
        stream: FirebaseAuth.instance.onAuthStateChanged,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.active) {
            FirebaseUser user = snapshot.data;
            if (user == null) {
              return SigninPage();
            }
            if (sesion.user == null) sesion.user = user;
            if (sesion.usuario == null) sesion.escucharUsuario(user.email);
            return NavigationBar();
          } else {
            return Scaffold(
              body: Center(
                child: CircularProgressIndicator(),
              ),
            );
          }
        },
      ),
    );
  }
}
