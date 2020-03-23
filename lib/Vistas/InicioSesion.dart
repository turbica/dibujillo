import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class SigninPage extends StatefulWidget {
  @override
  _SigninPageState createState() => _SigninPageState();
}

class _SigninPageState extends State<SigninPage> {
  final formKey = new GlobalKey<FormState>();
  String _email;
  String _password;
  String _nickname;

  bool validateAndSave() {
    final form = formKey.currentState;
    if (form.validate()) {
      form.save();
      print('form true');
      return true;
    } else {
      print('form false');
      return false;
    }
  }

  void validateAndSubmit() async {
    if (validateAndSave()) {
      print('validado');
      try {
        //FirebaseAuth.instance.signInWithEmailAndPassword(email: _email, password: _password);
        AuthResult user = await FirebaseAuth.instance.signInWithEmailAndPassword(email: _email, password: _password);
        print('entrado');
        //Navigator.of(context).pushNamed('/');
      } catch (e) {
        muestra_error();
        print('error $_email');
      }
    }
  }

  void muestra_error() {
    bool _visible = true;

    @override
    Widget build(BuildContext context) {
      return Scaffold(
        body: Center(
          child: AnimatedOpacity(
            // Si el Widget debe ser visible, anime a 1.0 (completamente visible). Si
            // el Widget debe estar oculto, anime a 0.0 (invisible).
            opacity: _visible ? 1.0 : 0.0,
            duration: Duration(milliseconds: 500),
            // El cuadro verde debe ser el hijo de AnimatedOpacity
            child: Container(
              width: 200.0,
              height: 200.0,
              color: Colors.green,
            ),
          ),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () {
            // Asegúrate de llamar a setState. Esto le dice a Flutter que reconstruya el
            // UI con los cambios!
            setState(() {
              _visible = !_visible;
            });
          },
          tooltip: 'Toggle Opacity',
          child: Icon(Icons.flip),
        ), // Esta coma final hace que el auto-formateo sea más agradable para los métodos de construcción.
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      backgroundColor: Colors.white,
      body: Container(
        height: double.infinity,
        child: Center(
          child: SingleChildScrollView(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: <Widget>[
                SafeArea(
                  child: Padding(
                    padding: const EdgeInsets.only(bottom: 20.0),
                    child: Center(
                      child: Image.asset('images/dibujillo.jpeg'),
                    ),
                  ),
                ),
                Form(
                  key: formKey,
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 20),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: <Widget>[
                        TextFormField(
                          decoration: InputDecoration(
                              filled: true,
                              fillColor: Colors.white,
                              labelText: 'Correo electrónico',
                              labelStyle: TextStyle(fontFamily: 'Montserrat', fontWeight: FontWeight.bold, color: Colors.grey),
                              focusedBorder: UnderlineInputBorder(borderSide: BorderSide(color: Colors.green))),
                          validator: (value) => value.isEmpty ? 'Debe proporcionar un email' : null,
                          onSaved: (value) => _email = value,
                        ),
                        TextFormField(
                          decoration: InputDecoration(
                            filled: true,
                            fillColor: Colors.white,
                            labelText: 'Contraseña',
                            labelStyle: TextStyle(
                              fontFamily: 'Montserrat',
                              fontWeight: FontWeight.bold,
                              color: Colors.grey,
                            ),
                            focusedBorder: UnderlineInputBorder(
                              borderSide: BorderSide(color: Colors.green),
                            ),
                          ),
                          obscureText: true,
                          validator: (value) => value.isEmpty ? 'Debe introducir una constraseña' : null,
                          onSaved: (value) => _password = value,
                        ),
                        SizedBox(height: 5.0),
                        Container(
                          alignment: Alignment(1.0, 0.0),
                          padding: EdgeInsets.only(top: 15.0, left: 20.0),
                          child: InkWell(
                            child: Text(
                              'Olvidaste la contraseña?',
                              style: TextStyle(
                                color: Colors.green,
                                fontWeight: FontWeight.bold,
                                fontFamily: 'Montserrat',
                                decoration: TextDecoration.underline,
                              ),
                            ),
                          ),
                        ),
                        SizedBox(height: 30.0),
                        Center(
                          child: Material(
                            borderRadius: BorderRadius.circular(80.0),
                            shadowColor: Colors.black,
                            color: Colors.green,
                            elevation: 7.0,
                            child: FloatingActionButton(
                              backgroundColor: Colors.green,
                              elevation: 0,
                              onPressed: () {
                                validateAndSubmit();
                                Navigator.of(context).pushNamed('/principal');
                              },
                              child: Text(
                                'GO',
                                style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontFamily: 'Montserrat'),
                              ),
                            ),
                          ),
                        ),
                        SizedBox(height: 30.0),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: <Widget>[
                            Text(
                              'Nuevo en Dibujillo ?',
                              style: TextStyle(fontFamily: 'Montserrat'),
                            ),
                            SizedBox(width: 5.0),
                            InkWell(
                              onTap: () {
                                //Navigator.pop(context);
                                Navigator.of(context).pushNamed('/signup');
                              },
                              child: Text(
                                'Registrarse',
                                style: TextStyle(
                                    color: Colors.green, fontFamily: 'Montserrat', fontWeight: FontWeight.bold, decoration: TextDecoration.underline),
                              ),
                            )
                          ],
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
