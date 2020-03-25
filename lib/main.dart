import 'package:dibujillo/Controladores/Sesion.dart';
import 'package:dibujillo/Vistas/SignupPage.dart';
import 'package:dibujillo/NavigationBar.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';
import 'package:dibujillo/Vistas/SigninPage.dart';

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
      home: SigninPage(),
    );
  }
}