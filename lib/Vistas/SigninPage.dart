import 'package:dibujillo/Controladores/Sesion.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class SigninPage extends StatefulWidget {
  @override
  _SigninPageState createState() => _SigninPageState();
}

class _SigninPageState extends State<SigninPage> {
  final formKey = new GlobalKey<FormState>();
  String _email;
  String _password;

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
      await FirebaseAuth.instance.signInWithEmailAndPassword(email: _email, password: _password).then((value) {
        sesion.user = value.user;
        sesion.escucharUsuario(_email);
      }).catchError((error) {
        print('Error al loguearse: $error');
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
      body: Stack(
        children: <Widget>[
          Container(
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
                          child: Image.asset('images/dibujs.gif'),
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
                                  focusedBorder: UnderlineInputBorder(borderSide: BorderSide(color: Color(0xff61ffa6)))),
                              validator: (value) => value.isEmpty ? 'Debe proporcionar un email' : null,
                              onSaved: (value) => _email = value,
                              keyboardType: TextInputType.emailAddress,
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
                                  borderSide: BorderSide(color: Color(0xff61ffa6)),
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
                                    color: Color(0xff61ffa6),
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
                                color: Color(0xff61ffa6),
                                elevation: 7.0,
                                child: FloatingActionButton(
                                  backgroundColor: Color(0xff61ffa6),
                                  elevation: 0,
                                  onPressed: () async {
                                    int resultado = await validateAndSubmit();
                                    setState(() {
                                      cargando = false;
                                    });
                                    if (resultado == 0) {
                                      Navigator.of(context).pushNamed('/principal');
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
                                        color: Color(0xff61ffa6),
                                        fontFamily: 'Montserrat',
                                        fontWeight: FontWeight.bold,
                                        decoration: TextDecoration.underline),
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
          Visibility(
            visible: cargando,
            child: Center(
              child: Container(
                decoration: BoxDecoration(
                  color: Colors.grey[300],
                  borderRadius: BorderRadius.circular(10.0),
                ),
                width: 70.0,
                height: 70.0,
                child: new Padding(
                  padding: const EdgeInsets.all(5.0),
                  child: new Center(
                    child: new CircularProgressIndicator(),
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget mensajeError(BuildContext context) {
    return AlertDialog(
      title: Text("Error inicio de sesión"),
      content: Text(
        "Se ha producido un error durante el inicio de sesión, revisa tu coenxión a internet e intentalo más tarde",
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
