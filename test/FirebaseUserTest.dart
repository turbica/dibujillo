import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:dibujillo/Controladores/Sesion.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:mockito/mockito.dart';

void FirebaseUserTest() {
  print('Iniciando Test para comprobar usuarios en Firestore');
//  testWidgets('Counter increments smoke test', (WidgetTester tester) async {
//    // Build our app and trigger a frame.
//    await tester.pumpWidget(NavigationBar());
//
//    // Verify that our counter starts at 0.
//
//    expect(find.text('Negro'), findsNothing);
//
//    // Tap the '+' icon and trigger a frame.
//    await tester.tap(find.byIcon(Icons.shopping_basket));
//    await tester.pump();
//
//    // Verify that our counter has incremented.
//    expect(find.text('Negro'), findsOneWidget);
//  });

  Sesion sesion = Sesion();

  final String _email = '';
  final String _password = '';
  final String _nickname = '';

  test('Test: Registro de usuario', () async {
    MethodChannel channel = MethodChannel(
      'plugins.flutter.io/firebase_auth',
    );
    channel.setMockMethodCallHandler((MethodCall call) async {
      if (call.method == 'currentUser') {
        return ;
      }
      throw MissingPluginException();
    });

    await FirebaseAuth.instance.createUserWithEmailAndPassword(email: _email, password: _password).then((value) async {
      sesion.user = value.user;
      await Firestore.instance.collection('usuarios').document(_email).setData({
        "email": _email,
        "apodo": _nickname,
        "total_puntos": 0,
        "photoUrl":
        'https://img.vixdata.io/pd/jpg-large/es/sites/default/files/btg/bodyart.batanga.com/files/7-simpaticos-tatuajes-de-llamas-y-alpacas.jpg',
        "monedas": 0,
        "colores": ["0xFF000000"],
        "iconos": [],
        "amigos": [],
        "solicitudes": [],
      });
      sesion.escucharUsuario(_email);
      print('Registrado');
    }).catchError((error) {
      print('Error al registrar usuario: $error');
    });
  });

  test('Test: Eliminar usuario', () async {
    MethodChannel channel = MethodChannel(
      'plugins.flutter.io/firebase_auth',
    );
    channel.setMockMethodCallHandler((MethodCall call) async {
      print(call);
      if (call.method == 'currentUser') {
        return ;
      }
      throw MissingPluginException();
    });

    await Firestore.instance.collection('usuarios').document(sesion.user.email).delete().then((value) {
      print('Usuario borrado de Firestore');
    }).catchError((error) {
      print('Error al borrar usuario de Firestore');
    });

    await sesion.user.delete().then((value) {
      print('Usuario eliminado con exito');
    }).catchError((error) {
      print('Error al borrar usuario: $error');
    });
  });
}
