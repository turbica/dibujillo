import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:dibujillo/Modelos/Trazo.dart';
import 'package:flutter/cupertino.dart';

class Dibujo extends ChangeNotifier {

  List<Trazo> points = <Trazo>[];

  double separadores = 1;

  Dibujo() {
    escucharDibujo();
  }

  escucharDibujo() {
    Firestore.instance.collection('dibujo').document('uno').snapshots().listen((dibujo) {
      //print("datos ${dibujo.data["points"]}");
      points.clear();
      List a = dibujo.data["points"];
      List<Trazo> aux = List();
      for(var b in a){
        if (b["x"] < 0) {
          aux.add(null);
        }
        else {
          Trazo newOffset = Trazo(Offset(b["x"], b["y"]), Color(int.parse(b["color"])));
          aux.add(newOffset);
        }
      }
      points = new List.from(aux);
      notifyListeners();
    });
  }

  updateSeperador() {
    separadores++;
  }

}