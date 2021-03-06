import 'dart:async';

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

  StreamSubscription<DocumentSnapshot> puntoEscucha;

  escucharUsuario(String email) {
    Firestore.instance.collection('usuarios').document(email).snapshots().listen((doc) {
      usuario = Usuario.decodeUsuario(doc.data);
      print('Usuario actualizado');
      notifyListeners();
    });
    FirebaseAuth.instance.currentUser().then((firebaseUser) {
      user = firebaseUser;
    });
  }

  escucharPartida(String id, String codigo) async {
    bool exito = false;
    DocumentReference documentReference = Firestore.instance.collection('partidas').document(id);
    await Firestore.instance.runTransaction((Transaction transaction) async {
      DocumentSnapshot partida = await transaction.get(documentReference);
      if (partida.exists) {
        print('La partida existe');
        if (partida.data['hay_hueco'] == true) {
          print('Hay hueco en la partida');
          await transaction.update(documentReference, <String, dynamic>{
            "jugadores": FieldValue.arrayUnion([
              {
                "email": usuario.email,
                "apodo": usuario.apodo,
                "photoUrl": usuario.photoUrl,
                "score": 0,
                "pause": false,
              }
            ]),
            "activos": FieldValue.increment(1),
            "hay_hueco": partida.data['activos'] + 1 < partida.data['num_jugadores'],
          });
          exito = true;
        } else {
          await transaction.set(documentReference, <String, dynamic>{"notocar": 'notocar'});
          await transaction.delete(documentReference);
        }
      } else {
        await transaction.set(documentReference, <String, dynamic>{"notocar": 'notocar'});
        await transaction.delete(documentReference);
      }
    });
    print('Exito al entrar en partida: $exito');
    if (exito) {
      await Firestore.instance.collection('partidas').document(id).get().then((partida) {
        partidaActual = Partida.decodePartida(partida.data);
        print('Partida cargada');
      });
      puntoEscucha = Firestore.instance.collection('partidas').document(id).snapshots().listen((partida) {
        partidaActual = Partida.decodePartida(partida.data);
        print('Partida actualizada con ${partidaActual.chat.length} mensajes');
        notifyListeners();
      });
    }
    return exito;
  }

  dejarDeEscuchar() {
    puntoEscucha.cancel();
  }

  updateSeperador() {
    separadores++;
  }
}
