import 'package:flutter/material.dart';

class Usuario {

  String email;
  String apodo;
  int total_puntos;
  int monedas;
  List<Color> colores;
  List<String> iconos;

  List<String> amigos;
  List<String> solicitudes;

  Usuario(this.email, this.apodo, this.total_puntos, this.monedas, this.colores, this.iconos, this.amigos, this.solicitudes);

  static Usuario decodeUsuario(Map<String, dynamic> doc) {
    List amigosRaw = doc["amigos"];
    List<String> amigos = List();
    for (var amigo in amigosRaw) {
      amigos.add(amigo);
    }
    List solicitudesRaw = doc["solicitudes"];
    List<String> solicitudes = List();
    for (var solicitud in solicitudesRaw) {
      solicitudes.add(solicitud);
    }
    List coloresRaw = doc["colores"];
    List<Color> colores = List();
    for (var color in coloresRaw) {
      colores.add(Color(int.parse(color)));
    }
    List iconosRaw = doc["iconos"];
    List<String> iconos = List();
    for (var icono in iconosRaw) {
      iconos.add(icono);
    }
    return Usuario(
      doc['email'],
      doc['apodo'],
      doc['total_puntos'].toInt(),
      doc['monedas'],
      colores,
      iconos,
      amigos,
      solicitudes,
    );
  }
}