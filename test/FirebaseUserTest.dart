import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:dibujillo/Controladores/Sesion.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:mockito/mockito.dart';
import 'package:rxdart/rxdart.dart';

class MockFirebaseAuth extends Mock implements FirebaseAuth {}

class MockFirebaseUser extends Mock implements FirebaseUser {}

class MockAuthResult extends Mock implements AuthResult {}

class MockFirestore extends Mock implements Firestore {}

void FirebaseUserTest() {
  print('Test para comprobar usuarios en Firestore');

  MockFirebaseAuth _auth = MockFirebaseAuth();
  MockFirestore _firestore = MockFirestore();
  BehaviorSubject<MockFirebaseUser> _user = BehaviorSubject<MockFirebaseUser>();
  when(_auth.onAuthStateChanged).thenAnswer((_) {
    return _user;
  });
  UserRepository _repo = UserRepository.instance(auth: _auth, firestore: _firestore);

  final String _email = 'pruebamovil@gmail.com';
  final String _password = '123456';
  final String _nickname = 'pruebamovil';

  group(' --- Iniciando ---', () {
    when(_auth.createUserWithEmailAndPassword(email: _email, password: _password)).thenAnswer((_) async {
      _user.add(MockFirebaseUser());
      return MockAuthResult();
    });
    when(_auth.createUserWithEmailAndPassword(email: _email + '.', password: _password + '7')).thenThrow(() {
      return null;
    });

    test('Test: Registro de usuario exitoso', () async {
      MethodChannel channel = MethodChannel(
        'plugins.flutter.io/cloud_firestore',
      );
      channel.setMockMethodCallHandler((MethodCall call) async {
        if (call.method == 'DocumentReference#setData') {
          return;
        }
        throw MissingPluginException();
      });
      bool signedIn = await _repo.signIn(_email, _password, _nickname);
      expect(signedIn, true);
    });

    test('Test: Registro de usuario fallido', () async {
      MethodChannel channel = MethodChannel(
        'plugins.flutter.io/cloud_firestore',
      );
      channel.setMockMethodCallHandler((MethodCall call) async {
        if (call.method == 'DocumentReference#setData') {
          return;
        }
        throw MissingPluginException();
      });
      bool signedIn = await _repo.signIn(_email + '.', _password + '7', _nickname);
      expect(signedIn, false);
    });

    test('Test: Eliminar usuario', () async {
      MethodChannel channel = MethodChannel(
        'plugins.flutter.io/cloud_firestore',
      );
      channel.setMockMethodCallHandler((MethodCall call) async {
        if (call.method == 'DocumentReference#delete') {
          return;
        }
        throw MissingPluginException();
      });
      bool userDeleted = await _repo.deleteUser(_email);
      expect(userDeleted, true);
    });
  });
}

class UserRepository {
  final Firestore firestore;
  final FirebaseAuth auth;
  FirebaseUser _user;

  Sesion sesion = Sesion();

  UserRepository.instance({this.auth, this.firestore}) {
    auth.onAuthStateChanged.listen(onAuthStateChanged);
  }

  FirebaseUser get user => _user;

  Future<bool> signIn(String email, String password, String nickname) async {
    try {
      await auth.createUserWithEmailAndPassword(email: email, password: password);
      print('Usuario creado con exito');
      await Firestore.instance.collection('usuarios').document(email).setData({
        "email": email,
        "apodo": nickname,
        "total_puntos": 0,
        "photoUrl":
            'https://img.vixdata.io/pd/jpg-large/es/sites/default/files/btg/bodyart.batanga.com/files/7-simpaticos-tatuajes-de-llamas-y-alpacas.jpg',
        "monedas": 0,
        "colores": ["0xFF000000"],
        "iconos": [],
        "amigos": [],
        "solicitudes": [],
      });
      print('Usuario añadido a Firestore');
      return true;
    } catch (e) {
      //print(e);
      print('No se ha podido crear el usuario');
      return false;
    }
  }

  Future<bool> deleteUser(String email) async {
    try {
      await Firestore.instance.collection('usuarios').document(email).delete();
      print('Usuario borrado de Firestore');
      await _user.delete();
      print('Usuario eliminado con exito');
      return true;
    } catch (e) {
      print(e);
      return false;
    }
  }

  Future signOut() async {
    auth.signOut();
    return Future.delayed(Duration.zero);
  }

  Future<void> onAuthStateChanged(FirebaseUser firebaseUser) async {
    if (firebaseUser == null) {
    } else {
      _user = firebaseUser;
    }
  }
}
