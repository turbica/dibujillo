import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:dibujillo/Modelos/Usuario.dart';

class Mensaje {
  Usuario usuario;
  String contenido;
  DateTime timestamp;

  Mensaje(this.usuario, this.contenido, this.timestamp);

  static Mensaje decodeMensaje(Map<String, dynamic> mensaje) {
    Timestamp timestamp = mensaje['timestamp'];
    return Mensaje(
      Usuario.decodeUsuario(mensaje['usuario']),
      mensaje['contenido'],
      DateTime.parse(timestamp.toDate().toString()),
    );
  }
}