import 'package:dibujillo/Modelos/Usuario.dart';

class Jugador {
  String apodo;
  String email;
  String photoUrl;
  int score;
  bool pause;

  Jugador(this.apodo, this.email, this.photoUrl, this.score, this.pause);

  static Jugador decodeJugador(Map<String, dynamic> jugador) {
    return Jugador(
      jugador['apodo'],
      jugador['email'],
      jugador['photoUrl'],
      jugador['score'],
      jugador['pause']
    );
  }
}
