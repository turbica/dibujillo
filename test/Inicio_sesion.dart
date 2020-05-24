import 'package:dibujillo/NavigationBar.dart';
import 'package:dibujillo/Vistas/SigninPage.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {

  test('Campo vacío del email devuelve error' ,() {
    var result = EmailFiledValidator.validate('');
    expect(result, 'Debe proporcionar un email');
  });

  test('Campo no vacío del email no devuelve nada' ,() {
    var result = EmailFiledValidator.validate('lo_que_sea');
    expect(result, null);
  });

  test('Campo vacío de la contraseña devuelve error' ,() {
    var result =   .validate('');
    expect(result, 'Debe introducir una constraseña');
  });

  test('Campo no vacío de la contraseña no devuelve nada' ,() {
    var result = PasswordFiledValidator.validate('lo_que_sea');
    expect(result, null);
  });

}
