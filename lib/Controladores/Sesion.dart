import 'package:dibujillo/Modelos/Partida.dart';
import 'package:dibujillo/Modelos/Usuario.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class Sesion extends ChangeNotifier {

  // Usuario de Firebase Authentication
  FirebaseUser user;

  // Usuario de Dibujillo
  Usuario usuario;

  // Partida actual en ejecución
  Partida partidaActual;
}