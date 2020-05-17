import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:dibujillo/Controladores/Sesion.dart';
import 'package:dibujillo/Modelos/Usuario.dart';
import 'package:dibujillo/Vistas/EditarPerfil.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class Social extends StatefulWidget {
  @override
  SocialState createState() => SocialState();
}

class SocialState extends State<Social> {
  Sesion sesion;
  bool envi;

  int tabSelected = 0;

  TextEditingController textController;

  Future<Usuario> obtenerUsuario(String email) async {
    Usuario aux;
    await Firestore.instance
        .collection('usuarios')
        .document(email)
        .get()
        .then((usuario) {
      aux = Usuario.decodeUsuario(usuario.data);
    });
    return Future.value(aux);
  }

  @override
  void initState() {
    envi = false;
    textController = TextEditingController();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    sesion = Provider.of<Sesion>(context);
    return DefaultTabController(
      length: choices.length,
      initialIndex: 0,
      child: Scaffold(
        appBar: AppBar(
          title: Text(
            "SOCIAL",
            style:
                TextStyle(fontStyle:  FontStyle.normal,color: Colors.black, fontSize: 26, shadows: <Shadow>[
              Shadow(
                offset: Offset(1.0, 0.0),
                blurRadius: 2.0,
                color: Colors.green,
              )
            ]),
          ),
          backgroundColor: Color(0xff61ffa6),
          leading: Padding(
            padding: EdgeInsets.only(left: 12),
            child: Image.asset(
              'images/logoChiqui.png',
              fit: BoxFit.cover,
            ),
          ),
          bottom: TabBar(
            indicator: BoxDecoration(
              color: Colors.amber,
            ),
            onTap: (value) {
              setState(() {
                tabSelected = value;
              });
            },
            indicatorColor: Colors.transparent,
            indicatorWeight: 3.0,
            tabs: choices.map((Choice choice) {
              return Tab(
                text: choice.title,
              );
            }).toList(),
          ),
        ),
        body: Consumer<Sesion>(
          builder: (context, sesionActual, child) {
            this.sesion = sesionActual;
            return Container(
              child: tabSelected == 0
                  ? ListView.builder(
                      itemCount: sesion.usuario.amigos.length,
                      itemBuilder: (context, index) {
                        return FutureBuilder<Usuario>(
                          future: obtenerUsuario(sesion.usuario.amigos[index]),
                          builder: (context, snapshot) {
                            if (snapshot.hasData) {
                              Usuario amigo = snapshot.data;
                              return ListTile(
                                leading: CircleAvatar(
                                  backgroundImage: NetworkImage(amigo.photoUrl),
                                ),
                                title: Text(
                                    '${amigo.apodo}  -  ${amigo.total_puntos} puntos'),
                                trailing: Text('${amigo.monedas} monedas'),
                              );
                            } else {
                              return ListTile(
                                leading: CircleAvatar(
                                  backgroundImage: NetworkImage(''),
                                ),
                                title: Text('Cargando...'),
                              );
                            }
                          },
                        );
                      },
                    )
                  : ListView.builder(
                      itemCount: sesion.usuario.solicitudes.length,
                      itemBuilder: (context, index) {
                        return FutureBuilder(
                          future:
                              obtenerUsuario(sesion.usuario.solicitudes[index]),
                          builder: (context, data) {
                            if (data.hasData) {
                              Usuario amigo = data.data;
                              return ListTile(
                                leading: CircleAvatar(
                                  backgroundImage: NetworkImage(amigo.photoUrl),
                                ),
                                title: Text(
                                    '${amigo.apodo}  -  ${amigo.total_puntos} puntos'),
                                trailing: Row(
                                  mainAxisSize: MainAxisSize.min,
                                  children: <Widget>[
                                    GestureDetector(
                                      onTap: () async {
                                        await Firestore.instance.runTransaction(
                                            (Transaction transaction) async {
                                          await transaction.update(
                                              Firestore.instance
                                                  .collection('usuarios')
                                                  .document(
                                                      sesion.usuario.email),
                                              <String, dynamic>{
                                                "amigos": FieldValue.arrayUnion(
                                                    [amigo.email]),
                                                "solicitudes":
                                                    FieldValue.arrayRemove(
                                                        [amigo.email]),
                                              });
                                          await transaction.update(
                                              Firestore.instance
                                                  .collection('usuarios')
                                                  .document(amigo.email),
                                              <String, dynamic>{
                                                "amigos": FieldValue.arrayUnion(
                                                    [sesion.usuario.email]),
                                              });
                                        });
                                        setState(() {});
                                      },
                                      child: Padding(
                                        padding: const EdgeInsets.all(8.0),
                                        child: Icon(Icons.check),
                                      ),
                                    ),
                                    GestureDetector(
                                      onTap: () async {
                                        await Firestore.instance
                                            .collection('usuarios')
                                            .document(sesion.usuario.email)
                                            .updateData({
                                          "solicitudes": FieldValue.arrayRemove(
                                              [amigo.email]),
                                        });
                                        setState(() {});
                                      },
                                      child: Padding(
                                        padding: const EdgeInsets.all(8.0),
                                        child: Icon(Icons.cancel),
                                      ),
                                    ),
                                  ],
                                ),
                              );
                            } else {
                              return ListTile(
                                leading: CircleAvatar(
                                  backgroundImage: NetworkImage(''),
                                ),
                                title: Text('Cargando...'),
                              );
                            }
                          },
                        );
                      },
                    ),
            );
          },
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () async {
            String email = await showDialog(
              context: context,
              builder: (BuildContext context) {
                return AlertDialog(
                  titleTextStyle: TextStyle(fontSize: 25, color: Colors.black),
                  backgroundColor: Colors.amber,
                  shape: RoundedRectangleBorder(
                      side: BorderSide(color: Colors.black, width: 4.0),
                      borderRadius: new BorderRadius.circular(15)),
                  title: Padding(
                    padding: const EdgeInsets.all(10.0),
                    child: Text('Introduce el email de tu amigo:'),
                  ),
                  content: TextField(
                    controller: textController,
                    decoration: InputDecoration(
                      fillColor: Colors.limeAccent,
                      labelText: 'Email de tu amigo',
                      labelStyle: TextStyle(
                        color: Colors.black26,
                      ),
                      focusedBorder: UnderlineInputBorder(
                        borderSide: BorderSide(color: Colors.grey),
                      ),
                    ),
                  ),
                  actions: <Widget>[
                    //FlatButton(
                    //onPressed: () {
                    // Navigator.pop(context, "");
                    //},
                    // child: Text('Cancelar' , style: TextStyle(color: Colors.black)),
                    //),
                    Center(
                      child: RaisedButton(
                        color: Colors.white,
                        shape: RoundedRectangleBorder(
                            borderRadius: new BorderRadius.circular(15)),
                        onPressed: () {
                          Navigator.pop(context, textController.value.text);
                          envi = true;
                        },
                        child: Text('Enviar solicitud',
                            style: TextStyle(color: Colors.black)),
                      ),
                    ),
                  ],
                );
              },
            );
            Usuario usuario = await Firestore.instance
                .collection('usuarios')
                .document(email)
                .get()
                .then((usuario) => Usuario.decodeUsuario(usuario.data))
                .catchError((error) {
              return null;
            });
            if (usuario != null) {
              if (sesion.usuario.email == email) {
                if (envi) {
                  Scaffold.of(context).showSnackBar(SnackBar(
                    duration: Duration(seconds: 2),
                    backgroundColor: Colors.amber,
                    content: Text('No puedes introducir tu usuario'),
                  ));
                  envi = false;
                }
              } else {
                await Firestore.instance
                    .collection('usuarios')
                    .document(email)
                    .updateData({
                  "solicitudes": FieldValue.arrayUnion([sesion.usuario.email]),
                }).then((value) async {
                  Scaffold.of(context).showSnackBar(SnackBar(
                    content: Text('Solicitud enviada!'),
                    backgroundColor: Colors.amber,
                    duration: Duration(seconds: 2),
                  ));
                });
              }
            } else {
              if (envi) {
                Scaffold.of(context).showSnackBar(SnackBar(
                  duration: Duration(seconds: 2),
                  backgroundColor: Colors.amber,
                  content: Text('No existe el usuario :('),
                ));
                envi = false;
              }
            }
          },
          backgroundColor: Colors.amber,
          shape: RoundedRectangleBorder(
            side: BorderSide(color: Colors.black, width: 4.0),
            borderRadius: new BorderRadius.circular(8.0),
          ),
          child: Icon(Icons.add),
        ),
        endDrawer: Drawer(
          child: ListView(
            // Important: Remove any padding from the ListView.
            padding: EdgeInsets.zero,
            children: <Widget>[
              UserAccountsDrawerHeader(
                accountName: Text(sesion.usuario.apodo),
                accountEmail: Text(sesion.user.email),
                currentAccountPicture: CircleAvatar(
                  backgroundImage: NetworkImage(sesion.usuario.photoUrl),
                ),
              ),
              ListTile(
                title: Text('Editar perfil'),
                trailing: new Icon(Icons.edit),
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                        builder: (context) => EditarPerfil(sesion.usuario)),
                  );
                },
              ),
              ListTile(
                title: Text('Cerrar sesión'),
                trailing: new Icon(Icons.exit_to_app),
                onTap: () {
                  FirebaseAuth.instance.signOut();
                },
              ),
            ],
          ),
        ),
        backgroundColor: Color(0xffbdfccf),
      ),
    );
  }
}

class Choice {
  const Choice({this.title, this.icon});

  final String title;
  final IconData icon;
}

const List<Choice> choices = const <Choice>[
  const Choice(title: 'AMIGOS'),
  const Choice(title: 'SOLICITUDES'),
];

class ChoiceCard extends StatelessWidget {
  const ChoiceCard({Key key, this.choice}) : super(key: key);

  final Choice choice;

  @override
  Widget build(BuildContext context) {
    final TextStyle textStyle = Theme.of(context).textTheme.display1;
    return Card(
      color: Colors.amber,
      child: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Text(choice.title, style: TextStyle(fontSize: 50)),
          ],
        ),
      ),
    );
  }
}
