import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:dibujillo/Modelos/Jugador.dart';
import 'package:dibujillo/Modelos/Partida.dart';
import 'package:flutter/material.dart';

class FinPartida extends StatefulWidget {
  final Partida partida;
  final Jugador jugador;

  FinPartida(this.partida, this.jugador);

  @override
  _FinPartidaState createState() => _FinPartidaState();
}

class _FinPartidaState extends State<FinPartida> {
  canjearPuntos() {
    Firestore.instance.collection('usuarios').document(widget.jugador.email).updateData({
      'total_puntos': FieldValue.increment(widget.jugador.score),
      //habra que añadirle monedas
    });
  }

  abandonarPartida() async {
    await Firestore.instance.collection('partidas').document(widget.partida.id).updateData({
      "jugadores": FieldValue.arrayRemove([
        {
          "email": widget.jugador.email,
          "apodo": widget.jugador.apodo,
          "photoUrl": widget.jugador.photoUrl,
          "score": widget.jugador.score,
          "pause": widget.jugador.pause,
        }
      ]),
      "activos": FieldValue.increment(-1),
      "hay_hueco": false,
    });
    Navigator.pop(context, true);
    if (widget.partida.activos == 0) {
      Firestore.instance.collection('partidas').document(widget.partida.id).delete();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("FIN PARTIDA"),
        backgroundColor: Color(0xff61ffa6),
        leading: Padding(
          padding: EdgeInsets.only(left: 12),
          child: Image.asset(
            'images/logoChiqui.png',
            fit: BoxFit.cover,
          ),
        ),
      ),
      body: Container(
        child: Column(
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.all(20.0),
              child: Text(
                'PUNTUACIONES',
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.w900),
              ),
            ),
            Column(
              children: List.generate(widget.partida.jugadores.length, (index) {
                return ListTile(
                  leading: CircleAvatar(
                    backgroundImage: NetworkImage(widget.partida.jugadores[index].photoUrl),
                  ),
                  title: Text(widget.partida.jugadores[index].apodo),
                  trailing: Text(widget.partida.jugadores[index].score.toString() + '  puntos'),
                );
              }),
            ),
            SizedBox(
              height: 30,
            ),
            FlatButton(
              onPressed: () {
                canjearPuntos();
                abandonarPartida();
              },
              child: Container(
                color: Color(0xff61ffa6),
                padding: EdgeInsets.all(15),
                child: Text('Canjear puntos y volver'),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
