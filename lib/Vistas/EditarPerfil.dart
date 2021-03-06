import 'dart:io';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:dibujillo/Controladores/Sesion.dart';
import 'package:dibujillo/Modelos/Usuario.dart';
import 'package:firebase_storage/firebase_storage.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:path/path.dart';
import 'package:provider/provider.dart';

class EditarPerfil extends StatefulWidget {
  final Usuario usuario;

  EditarPerfil(this.usuario);

  @override
  EditarPerfilState createState() => EditarPerfilState();
}

class EditarPerfilState extends State<EditarPerfil> {
  final db = Firestore.instance;
  Sesion sesion;
  String _apodo;
  File _image;
  bool local = false;
  String urlFoto;

  void cambiarApodo(String _apodo, Usuario usuarios) {
    Firestore.instance.collection('usuarios').document(usuarios.email).updateData({
      "apodo": _apodo,
    });
  }

  Future cambiarFoto() async {
    var image = await ImagePicker.pickImage(source: ImageSource.gallery);

    setState(() {
      _image = image;
      local = true;
      print('Image Path $_image');
    });
  }

  Future uploadPic(BuildContext context, Usuario usuario) async {
    String filName = 'perfil_images/' + basename(_image.path);
    StorageReference firebaseStorageRef = FirebaseStorage.instance.ref().child(filName);
    StorageUploadTask uploadTask = firebaseStorageRef.putFile(_image);
    String url = await (await uploadTask.onComplete).ref.getDownloadURL();

    Firestore.instance.collection('usuarios').document(usuario.email).updateData({
      "photoUrl": url,
    });
  }

  @override
  void initState() {
    Firestore.instance.collection('usuarios').document(widget.usuario.email).get().then((usuarios) {
      usuarios["phtoUrl"] == null
          ? urlFoto = usuarios["photoUrl"]
          : urlFoto =
              "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/855/public/media/image/2018/08/fotos-perfil-whatsapp_16.jpg?itok=iohCz0oN";
      setState(() {});
    });
    super.initState();
  }

  Widget build(BuildContext context) {
    sesion = Provider.of<Sesion>(context);
    return Scaffold(
      appBar: AppBar(
        title: Text("EDITAR PERFIL"),
        backgroundColor: Color(0xff61ffa6),
        leading: Padding(
          padding: EdgeInsets.only(left: 12),
          child: Image.asset(
            'images/logoChiqui.png',
            fit: BoxFit.cover,
          ),
        ),
      ),
      backgroundColor: Color(0xffbdfccf),
      body: SingleChildScrollView(
        child: Container(
          width: MediaQuery.of(context).size.width,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              SizedBox(height: 50),
              new Stack(
                //alignment:new Alignment(x, y)
                children: <Widget>[
                  Padding(
                    padding: const EdgeInsets.only(top: 16.0, bottom: 8.0),
                    child: Container(
                      color: Color(0xfffed40d),
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: SizedBox(
                          width: 180.0,
                          height: 180.0,
                          child: local
                              ? Image.file(_image, fit: BoxFit.fill)
                              : Image.network(
                                  urlFoto,
                                  fit: BoxFit.fill,
                                ),
                        ),
                      ),
                    ),
                  ),
                  Positioned(
                    top: 90,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    child: FlatButton(
                      onPressed: () {
                        cambiarFoto();
                      },
                      child: Icon(
                        Icons.camera_alt,
                        size: 30.0,
                      ),
                    ),
                  )
                ],
              ),
              SizedBox(width: 19, height: 40),
              Container(
                padding: EdgeInsets.only(top: 0, bottom: 0, left: 40),
                child: Row(
                  children: <Widget>[
                    new SizedBox(
                      width: 170.0,
                      height: 50.0,
                      child: TextFormField(
                        decoration: InputDecoration(
                          filled: true,
                          enabledBorder: const OutlineInputBorder(borderSide: const BorderSide(color: Colors.black)),
                          fillColor: Colors.white,
                          labelText: 'Apodo',
                          labelStyle: TextStyle(fontFamily: 'Montserrat', fontWeight: FontWeight.bold, color: Colors.grey),
                        ),
                        validator: (value) => value.isEmpty ? 'nickname esta vacio' : null,
                        onSaved: (value) => _apodo = value,
                        onChanged: (value) => _apodo = value,
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(left: 20.0),
                      child: SizedBox(
                        height: 50,
                        width: 80,
                        child: RaisedButton(
                          color: Color(0xfffed40d),
                          highlightColor: Color(0xfffed40d),
                          shape: RoundedRectangleBorder(side: BorderSide(color: Colors.black)),
                          elevation: 5.0,
                          onPressed: () async {
                            if (_apodo == null) {
                              print("No se cambia el nickname");
                            } else {
                              print("Se modifica el nickname");
                              print(_apodo);
                              cambiarApodo(_apodo, widget.usuario);
                            }
                            if (_image == null) {
                              print("No se cambia la foto");
                            } else {
                              print("Se modifica la foto");
                              await uploadPic(context, widget.usuario);
                            }
                            Navigator.pop(context);
                          },
                          child: Container(
                            alignment: Alignment.center,
                            child: const Text('OK', style: TextStyle(fontSize: 20)),
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              SizedBox(height: 20),
              Padding(
                padding: EdgeInsets.symmetric(horizontal: 50),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: <Widget>[],
                ),
              ),
              SizedBox(height: 70),
              RaisedButton(
                color: Color(0xff65faa6),
                highlightElevation: 50,
                shape: RoundedRectangleBorder(side: BorderSide(color: Colors.black)),
                onPressed: () {
                  Navigator.pop(context);
                },
                child: Text('Cancelar',
                    textAlign: TextAlign.center,
                    overflow: TextOverflow.ellipsis,
                    style: TextStyle(
                      fontWeight: FontWeight.bold,
                      fontSize: 30,
                      color: Colors.white,
                    )),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
