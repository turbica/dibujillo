import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/cupertino.dart';

class Dibujo extends ChangeNotifier {

  List<Offset> points = <Offset>[];

  double separadores = 1;

  Dibujo() {
    escucharDibujo();
  }

  escucharDibujo() {
    Firestore.instance.collection('dibujo').document('uno').snapshots().listen((dibujo) {
      //print("datos ${dibujo.data["points"]}");
      points.clear();
      List a = dibujo.data["points"];
      List<Offset> aux = List();
      for(var b in a){
        if (b["x"] < 0) {
          aux.add(null);
        }
        else {
          Offset newOffset = Offset(b["x"], b["y"]);
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