import 'package:dibujillo/Controladores/Dibujo.dart';
import 'package:dibujillo/Vistas/Registrase.dart';
import 'package:dibujillo/Controladores/NavigationBar.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';
import 'package:dibujillo/Vistas/InicioSesion.dart';

void main() {
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider<Dibujo>(create: (context) => Dibujo()),
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
    return MaterialApp(
      title: 'Dibujillo',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primaryColor: Color(0xffbdfccf),
        accentColor: Color(0xff61ffa6),
      ),
      routes: <String, WidgetBuilder>{
        '/signin': (BuildContext context) => new SigninPage(),
        '/signup': (BuildContext context) => new SignupPage(),
        '/principal': (BuildContext context) => new NavigationBar(),
      },
      home: SigninPage(),
    );
  }
}