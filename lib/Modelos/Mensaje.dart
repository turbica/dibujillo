import 'package:dibujillo/Modelos/Usuario.dart';

class Mensaje {
  Usuario usuario;
  String contenido;
  DateTime timestamp;

  Mensaje(this.usuario, this.contenido, this.timestamp);
}