class Jugador {
  String apodo;
  String email;
  String photoUrl;
  int score;
  bool pause;
  int puesto;

  Jugador(this.apodo, this.email, this.photoUrl, this.score, this.pause, this.puesto);

  static Jugador decodeJugador(Map<String, dynamic> jugador) {
    return Jugador(jugador['apodo'], jugador['email'], jugador['photoUrl'], jugador['score'], jugador['pause'], jugador['puesto']);
  }

  toMap() {
    return <String, dynamic> {
      'apodo': apodo,
      'email': email,
      'photoUrl': photoUrl,
      'score': score,
      'pause': pause,
      'puesto': puesto,
    };
  }
}
