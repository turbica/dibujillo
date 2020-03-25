import 'package:flutter/material.dart';

class Usuario {

  String email;
  String apodo;
  int total_puntos;
  int monedas;
  List<Colors> colores;
  List<String> iconos;

  List<Usuario> amigos;
  List<Usuario> solicitudes;

  Usuario(this.email, this.apodo, this.total_puntos, this.monedas, this.colores, this.iconos, this.amigos, this.solicitudes);
}