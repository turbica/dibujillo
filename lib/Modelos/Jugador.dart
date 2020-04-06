import 'package:dibujillo/Modelos/Usuario.dart';

class Jugador {
  Usuario usuario;
  int score;

  Jugador(this.usuario, this.score);

  static Jugador decodeJugador(Map<String, dynamic> jugador) {
    return Jugador(
      Usuario.decodeUsuario(jugador['usuario']),
      jugador['score'],
    );
  }
}
