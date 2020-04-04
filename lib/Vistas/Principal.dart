import 'package:dibujillo/Controladores/Sesion.dart';
import 'package:dibujillo/Vistas/PrincipalAmigos.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class Principal extends StatefulWidget {
  @override
  PrincipalState createState() => PrincipalState();
}

class PrincipalState extends State<Principal> {
  Sesion sesion;

  bool buscandoPartida = false;

  void _showDialog() async {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        // return object of type Dialog
        return AlertDialog(
          title: Text("Error al cargar partida"),
          content: Container(
            child: Text('No ha sido posible entrar a la partida, por favor intentelo de nuevo mas tarde, mas o menos cuando Jorge lo termine ;)'),
          ),
          actions: <Widget>[
            FlatButton(
              onPressed: () {
                Navigator.pop(context);
              },
              child: Text('De acuerdo'),
            )
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    sesion = Provider.of<Sesion>(context);
    return Scaffold(
      appBar: AppBar(
        title: Text("PRINCIPAL"),
        backgroundColor: Color(0xff61ffa6),
        leading: Padding(
          padding: EdgeInsets.only(left: 12),
          child: Image.asset(
            'images/logoChiqui.png',
            fit: BoxFit.cover,
          ),
        ),
      ),
      body: SingleChildScrollView(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: <Widget>[
            new Card(
              borderOnForeground: true,
              margin: EdgeInsets.only(top: 200, left: 15, right: 15),
              child: RaisedButton(
                onPressed: () async {
                  _showDialog();
                },
                color: Color(0xff61ffa6),
                textColor: Colors.black,
                child: Container(
                  alignment: Alignment.center,
                  padding: const EdgeInsets.all(15),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    mainAxisSize: MainAxisSize.min,
                    children: <Widget>[
                      const Text('PARTIDA', style: TextStyle(fontSize: 20)),
                      Visibility(
                        visible: buscandoPartida,
                        child: Padding(
                          padding: const EdgeInsets.only(left: 20),
                          child: SizedBox(
                            height: 20.0,
                            width: 20.0,
                            child: CircularProgressIndicator(
                              valueColor: new AlwaysStoppedAnimation<Color>(Colors.black),
                              strokeWidth: 2.0,
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
            new Card(
              borderOnForeground: true,
              margin: EdgeInsets.all(15),
              child: RaisedButton(
                color: Color(0xff61ffa6),
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => PrincipalAmigos()),
                  );
                },
                textColor: Colors.black,
                child: Container(
                  alignment: Alignment.center,
                  padding: const EdgeInsets.all(15.0),
                  child: const Text('JUEGA CON AMIGOS', style: TextStyle(fontSize: 20)),
                ),
              ),
            ),
          ],
        ),
      ),
      backgroundColor: Color(0xffbdfccf),
    );
  }
}
