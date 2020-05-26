import 'package:dibujillo/Modelos/Jugador.dart';
import 'package:dibujillo/Modelos/Mensaje.dart';
import 'package:dibujillo/Modelos/Palabras.dart';
import 'package:dibujillo/Modelos/Partida.dart';
import 'package:dibujillo/Modelos/Trazo.dart';
import 'package:dibujillo/Modelos/Usuario.dart';
import 'package:dibujillo/Vistas/SigninPage.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

void pruebas_vistas() {

  test('INICIO  SESION Campo vacío del email devuelve error' ,() {
    var result = EmailFiledValidator.validate('');
    expect(result, 'Debe proporcionar un email');
  });

  test('INICIO  SESION  Campo no vacío del email no devuelve nada' ,() {
    var result = EmailFiledValidator.validate('lo_que_sea');
    expect(result, null);
  });

  test('INICIO  SESION  Campo vacío de la contraseña devuelve error' ,() {
    var result = PasswordFiledValidator.validate('');
    expect(result, 'Debe introducir una constraseña');
  });

  test('INICIO  SESION  Campo no vacío de la contraseña no devuelve nada' ,() {
    var result = PasswordFiledValidator.validate('lo_que_sea');
    expect(result, null);
  });

}

void pruebas_modelos() {

  test('Test modelo Jugador' ,() {
    Jugador pedro = Jugador("apodo", "alberto@gmail.com", "url", 100, true);
    expect(pedro.apodo, 'apodo');
    expect(pedro.email, 'alberto@gmail.com');
    expect(pedro.photoUrl, 'url');
    expect(pedro.score, 100);
    expect(pedro.pause, true);
  });

  test('Test modelo Mensaje' ,() {
    DateTime tiempo = new DateTime.now();
    List<String> lista1 = ["si ", "df"];
    List<String> lista2 = ["si "];
    List<Color> colores = [Colors.orange];
    List<String> iconos = ["si "];
    Usuario usuario= Usuario("tusi", "ace", "d", 100, 3, colores, iconos, lista1, lista2);
    Mensaje  pedro = Mensaje(usuario, "contenido",tiempo);
    expect(pedro.usuario, usuario);
    expect(pedro.contenido, "contenido");
    expect(pedro.timestamp, tiempo);
  });


  test('Test modelo Palabras, palabras siempre diferentes' ,() {
    List<String> lista= Palabras.getSugerencias();
    expect(lista[0], isNot(lista[1]));
    expect(lista[1], isNot(lista[2]));
    expect(lista[0], isNot(lista[2]));

  });

  test('Test modelo Usuario' ,() {
    DateTime tiempo = new DateTime.now();
    List<String> lista1 = ["si ", "df"];
    List<String> lista2 = ["si "];
    List<Color> colores = [Colors.orange];
    List<String> iconos = ["si "];
    Usuario usuario= Usuario("tusi", "ace", "d", 100, 3, colores, iconos, lista1, lista2);
    expect(usuario.apodo, "ace");
    expect(usuario.email, "tusi");
    expect(usuario.photoUrl, "d");
    expect(usuario.total_puntos, 100);
    expect(usuario.monedas, 3);
    expect(usuario.colores, colores);
    expect(usuario.iconos, iconos);
    expect(usuario.amigos, lista1);
    expect(usuario.solicitudes, lista2);
  });


  test('Test modelo Trazo' ,() {
    Offset f = Offset(1.2,3.2);
    Trazo t = Trazo(f, Colors.orange);
    expect(t.color, Colors.orange);
    expect(t.offset, f);
  });

  test('Test modelo Partida' ,() {
    String id;
    String clave;
    int num_jugadores;
    int activos;
    bool hay_hueco;
    List<Jugador> jugadores;
    int turno;
    int ronda;
    List<Mensaje> chat;
    String palabra;
    List<Trazo> puntos;
    double ancho;
    int nAciertos;
    Partida c = Partida(id, clave, num_jugadores, activos, hay_hueco, jugadores, turno, ronda, chat, palabra, puntos,
        ancho, nAciertos);
    expect(c.id, id);
    expect(c.clave, clave);
    expect(c.num_jugadores, num_jugadores);
    expect(c.activos, activos);
    expect(c.hay_hueco, hay_hueco);
    expect(c.jugadores, jugadores);
    expect(c.turno, turno);
    expect(c.ronda, chat);
    expect(c.chat, chat);
    expect(c.palabra, palabra);
    expect(c.puntos, puntos);
    expect(c.ancho, ancho);
    expect(c.nAciertos, nAciertos);

  });

}
