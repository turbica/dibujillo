import 'package:flutter/material.dart';
import '../Vistas/Principal.dart';
import '../Vistas/Social.dart';
import '../Vistas/Tienda.dart';

class NavigationBar extends StatefulWidget {
  @override
  _NavigationBarState createState() => _NavigationBarState();
}


class _NavigationBarState extends State<NavigationBar> {

  var selectedPageIndex = 0;

  var pages = [
  Principal(),
  Social(),
  Tienda(),
  ];

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
        body: pages[selectedPageIndex],
        backgroundColor: Color(0xffbdfccf),
        bottomNavigationBar: new Theme(
            data: Theme.of(context).copyWith(
              // sets the background color of the `BottomNavigationBar`
                canvasColor: Color(0xffbdfccf),
                textTheme: Theme
                    .of(context)
                    .textTheme
                    .copyWith(caption: new TextStyle(color: Colors.yellow))),
            child: new BottomNavigationBar(
              iconSize: 40,
              items: [
                BottomNavigationBarItem(
                  title: Text(""),
                  icon: Icon(Icons.videogame_asset, color: selectedPageIndex == 0? Colors.black : Colors.white,),
                ),
                BottomNavigationBarItem(
                  title: Text(""),
                  icon: Icon(Icons.people, color: selectedPageIndex == 1? Colors.black : Colors.white,),
                ),
                BottomNavigationBarItem(
                    title: Text(""),
                    icon: Icon(Icons.shopping_basket, color: selectedPageIndex == 2? Colors.black : Colors.white,)
                ),],
              onTap: (index) {
                setState(() {
                  selectedPageIndex = index;
                });
              },
              currentIndex: selectedPageIndex,
            )
        )


    );
  }
}
