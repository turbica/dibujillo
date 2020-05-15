import 'package:dibujillo/Modelos/Usuario.dart';

class Jugador {
  String apodo;
  String email;
  String photoUrl;
  int score;

  Jugador(this.apodo, this.email, this.photoUrl, this.score);

  static Jugador decodeJugador(Map<String, dynamic> jugador) {
    return Jugador(
      jugador['apodo'],
      jugador['email'],
      jugador['photoUrl'],
      jugador['score'],
    );
  }
}
