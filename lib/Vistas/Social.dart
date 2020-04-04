import 'package:dibujillo/Controladores/Sesion.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:dibujillo/Vistas/EditarPerfil.dart';

class Social extends StatefulWidget {
  @override
  SocialState createState() => SocialState();
}

class SocialState extends State<Social> {
  Sesion sesion;


  @override
  Widget build(BuildContext context) {
    sesion = Provider.of<Sesion>(context);
    return DefaultTabController(
      length: choices.length,
      initialIndex: 0,
      child: Scaffold(
        appBar: AppBar(
          title: Text("SOCIAL"),
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
              
              color:Colors.amber,
            ),
            indicatorColor: Colors.transparent,
            indicatorWeight: 3.0,
            tabs: choices.map((Choice choice) {
              return Tab(
                text: choice.title,
              );
            }).toList(),
          ),
        ),
        body: Container(
          child: Center(
            child: FloatingActionButton(
        onPressed: () {},
        backgroundColor: Colors.amber,
        shape: RoundedRectangleBorder(side: BorderSide(color: Colors.black, width: 4.0),borderRadius: new BorderRadius.circular(8.0)),
        child: Icon(Icons.add),
          ),

          ),
        ),

        endDrawer: Drawer(
          child: ListView(
            // Important: Remove any padding from the ListView.
            padding: EdgeInsets.zero,
            children: <Widget>[
              UserAccountsDrawerHeader(
                accountName: Text(sesion.usuario.apodo),
                accountEmail: Text(sesion.user.email),
                currentAccountPicture: new GestureDetector(
                  child: CircleAvatar(
                    backgroundImage: NetworkImage(sesion.usuario.photoUrl),
                  ),
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
                  // Update the state of the app.
                  // ...
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
            Text(choice.title, style: TextStyle(fontSize: 50) ),
          ],
        ),
      ),
    );
  }
}
