import 'package:dibujillo/Modelos/Jugador.dart';
import 'package:dibujillo/Modelos/Mensaje.dart';
import 'package:dibujillo/Modelos/Trazo.dart';

class Partida {

  String id;
  String clave;
  int num_jugadores;
  List<Jugador> jugadores;
  List<Mensaje> chat;
  String palabra;
  List<Trazo> puntos;
  double ancho;

  Partida(this.id, this.clave, this.num_jugadores, this.jugadores, this.chat, this.palabra, this.puntos, this.ancho);

}