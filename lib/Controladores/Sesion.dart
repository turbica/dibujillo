import 'package:cloud_firestore/cloud_firestore.dart';
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
  double anchoLienzo = 10000;
  double separadores = 1;

  escucharUsuario(String email) {
    Firestore.instance.collection('usuarios').document(email).snapshots().listen((doc) {
      usuario = Usuario.decodeUsuario(doc.data);
      print('Usuario actualizado');
    });
  }

  escucharPartida(String id) {
    Firestore.instance.collection('partidas').document(id).snapshots().listen((partida) {
      partidaActual = Partida.decodePartida(partida.data);
      print('Partida actualizada con ${partidaActual.chat.length} mensajes');
      notifyListeners();
    });
  }

  updateSeperador() {
    separadores++;
  }
}