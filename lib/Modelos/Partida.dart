import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:dibujillo/Modelos/Jugador.dart';
import 'package:dibujillo/Modelos/Mensaje.dart';
import 'package:dibujillo/Modelos/Trazo.dart';
import 'package:flutter/material.dart';

class Partida {

  String id;
  String clave;
  int num_jugadores;
  int activos;
  bool hay_hueco;
  List<Jugador> jugadores;
  int turno;
  List<Mensaje> chat;
  String palabra;
  List<Trazo> puntos;
  double ancho;

  Partida(this.id, this.clave, this.num_jugadores, this.activos, this.hay_hueco, this.jugadores, this.turno, this.chat, this.palabra, this.puntos, this.ancho);

  static Partida decodePartida(Map<String, dynamic> partida) {
    double anchoLienzo = partida["anchoLienzo"] != null ? partida["anchoLienzo"].toDouble() : 10000.0;
    List a = partida["puntos"];
    List<Trazo> puntos = List();
    for (var b in a) {
      Trazo newOffset;
      if (b["x"] < 0) {
        puntos.add(null);
      }
      else {
        newOffset = Trazo(Offset(b["x"], b["y"]), Color(int.parse(b["color"])));
        puntos.add(newOffset);
      }
    }
    List jugadoresRaw = partida['jugadores'];
    List<Jugador> jugadores = List();
    for (var jugador in jugadoresRaw) {
      jugadores.add(Jugador.decodeJugador(jugador));
    }
    List mensajesRaw = partida['chat'];
    List<Mensaje> chat = List();
    for (var mensaje in mensajesRaw) {
      chat.add(Mensaje.decodeMensaje(mensaje));
    }
    return Partida(
      partida['id'],
      partida['clave'],
      partida['num_jugadores'],
      partida['activos'],
      partida['hay_hueco'],
      jugadores,
      partida['turno'],
      chat,
      partida['palabra'],
      puntos,
      anchoLienzo,
    );
  }
}