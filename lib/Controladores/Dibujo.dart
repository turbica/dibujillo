import 'dart:io';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:dibujillo/Modelos/Trazo.dart';
import 'package:flutter/cupertino.dart';

class Dibujo extends ChangeNotifier {

  List<Trazo> points = <Trazo>[];

  double anchoLienzo = 10000;

  double separadores = 1;

  Dibujo() {
    escucharDibujo();
  }

  escucharDibujo() {
    Firestore.instance.collection('dibujo').document('uno').snapshots().listen((dibujo) {
      dibujo.data["anchoLienzo"] != null ? anchoLienzo = dibujo.data["anchoLienzo"] : 10000;
      List a = dibujo.data["points"];
      List<Trazo> aux = List();
      for(var b in a){
        Trazo newOffset;
        if (b["x"] < 0) {
          aux.add(null);
        }
        else {
          newOffset = Trazo(Offset(b["x"], b["y"]), Color(int.parse(b["color"])));
          aux.add(newOffset);
        }
      }
      points.clear();
      points = new List.from(aux);
      notifyListeners();
    });
  }

  updateSeperador() {
    separadores++;
  }

}