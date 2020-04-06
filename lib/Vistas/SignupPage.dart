import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:dibujillo/Controladores/Sesion.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class SignupPage extends StatefulWidget {
  @override
  _SignupPageState createState() => _SignupPageState();
}

class _SignupPageState extends State<SignupPage> {
  final formKey = new GlobalKey<FormState>();
  String _email;
  String _password;
  String _nickname;

  bool cargando = false;

  Sesion sesion;

  bool validateAndSave() {
    if (formKey.currentState.validate()) {
      formKey.currentState.save();
      print('Campos del formulario correctos');
      return true;
    } else {
      print('Error en los campos del formulario');
      return false;
    }
  }

  Future<int> validateAndSubmit() async {
    if (validateAndSave()) {
      setState(() {
        cargando = true;
      });
      int resultado = 0;
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
        print('Error al registrarse: $error');
        resultado = 2;
      });
      return resultado;
    } else {
      return 1;
    }
  }

  @override
  Widget build(BuildContext context) {
    sesion = Provider.of<Sesion>(context);
    return new Scaffold(
      backgroundColor: Colors.white,
      resizeToAvoidBottomPadding: false,
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Container(
            child: Stack(
              children: <Widget>[
                Container(
                  padding: EdgeInsets.fromLTRB(15.0, 110.0, 0.0, 0.0),
                  child: Text(
                    'Registro',
                    style: TextStyle(fontSize: 80.0, color: Color(0xff61ffa6), fontWeight: FontWeight.bold),
                  ),
                ),
                Container(
                  padding: EdgeInsets.fromLTRB(310.0, 115.0, 0.0, 0.0),
                  child: Text(
                    '',
                    style: TextStyle(fontSize: 80.0, fontWeight: FontWeight.bold, color: Color(0xff61ffa6)),
                  ),
                ),
              ],
            ),
          ),
          Container(
            padding: EdgeInsets.only(top: 35.0, left: 20.0, right: 20.0),
            child: new Form(
              key: formKey,
              child: Column(
                children: <Widget>[
                  new TextFormField(
                      decoration: InputDecoration(
                        filled: true,
                        fillColor: Colors.white,
                        labelText: 'Correo electrónico',
                        labelStyle: TextStyle(fontFamily: 'Montserrat', fontWeight: FontWeight.bold, color: Colors.grey),
                        // hintText: 'EMAIL',
                        // hintStyle: ,
                        focusedBorder: UnderlineInputBorder(
                          borderSide: BorderSide(color: Color(0xff61ffa6)),
                        ),
                      ),
                      validator: (value) => value.isEmpty ? 'Debe introducir un eamail' : null,
                      onSaved: (value) => _email = value),
                  SizedBox(height: 10.0),
                  new TextFormField(
                    decoration: InputDecoration(
                      filled: true,
                      fillColor: Colors.white,
                      labelText: 'Contraseña',
                      labelStyle: TextStyle(fontFamily: 'Montserrat', fontWeight: FontWeight.bold, color: Colors.grey),
                      focusedBorder: UnderlineInputBorder(
                        borderSide: BorderSide(color: Color(0xff61ffa6)),
                      ),
                    ),
                    validator: (value) => value.isEmpty ? 'Debe introducir una constraseña (min 6 caract.)' : null,
                    onSaved: (value) => _password = value,
                    obscureText: true,
                  ),
                  SizedBox(height: 10.0),
                  new TextFormField(
                      decoration: InputDecoration(
                        filled: true,
                        fillColor: Colors.white,
                        labelText: 'Apodo',
                        labelStyle: TextStyle(fontFamily: 'Montserrat', fontWeight: FontWeight.bold, color: Colors.grey),
                        focusedBorder: UnderlineInputBorder(
                          borderSide: BorderSide(color: Color(0xff61ffa6)),
                        ),
                      ),
                      validator: (value) => value.isEmpty ? 'Debe introducir un apodo' : null,
                      onSaved: (value) => _nickname = value),
                  SizedBox(height: 50.0),
                  InkWell(
                    onTap: () async {
                      int resultado = await validateAndSubmit();
                      setState(() {
                        cargando = false;
                      });
                      if (resultado == 0) {
                        Navigator.of(context).pushReplacementNamed('/principal');
                      } else if (resultado == 2) {
                        //Error durante el inicio
                        showDialog(
                          context: context,
                          builder: (BuildContext context) {
                            return mensajeError(context);
                          },
                        );
                      }
                    },
                    child: Container(
                      height: 40.0,
                      child: Material(
                        borderRadius: BorderRadius.circular(20.0),
                        shadowColor: Color(0xff61ffa6),
                        color: Color(0xff61ffa6),
                        elevation: 7.0,
                        child: Center(
                          child: Text(
                            'REGISTRARSE',
                            style: TextStyle(
                              color: Colors.white,
                              fontWeight: FontWeight.bold,
                              fontFamily: 'Montserrat',
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                  SizedBox(height: 20.0),
                  Container(
                    height: 40.0,
                    color: Colors.transparent,
                    child: Container(
                      decoration: BoxDecoration(
                        border: Border.all(color: Color(0xff61ffa6), style: BorderStyle.solid, width: 1.0),
                        color: Colors.transparent,
                        borderRadius: BorderRadius.circular(20.0),
                      ),
                      child: InkWell(
                        onTap: () {
                          Navigator.of(context).pop();
                        },
                        child: Center(
                          child: Text(
                            'Volver',
                            style: TextStyle(color: Color(0xff61ffa6), fontWeight: FontWeight.bold, fontFamily: 'Montserrat'),
                          ),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget mensajeError(BuildContext context) {
    return AlertDialog(
      title: Text("Error en el registro"),
      content: Text(
        "Se ha producido un error durante el registro, revisa tu coenxión a internet e intentalo más tarde",
      ),
      actions: <Widget>[
        FlatButton(
          onPressed: () {
            Navigator.pop(context);
          },
          child: Text("Entendido"),
        ),
      ],
    );
  }
}
