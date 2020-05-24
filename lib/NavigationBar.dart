import 'package:flutter/material.dart';

import 'Vistas/Principal.dart';
import 'Vistas/Social.dart';
import 'Vistas/Tienda.dart';

class NavigationBar extends StatefulWidget {
    @override
  _NavigationBarState createState() => _NavigationBarState();
}

class _NavigationBarState extends State<NavigationBar> {
  var selectedPageIndex = 1;
  get selectedPageIndep => selectedPageIndex;
  PageController pageController;

  var pages = [
    Tienda(),
    Principal(),
    Social(),
  ];

  @override
  void initState() {
    pageController = PageController(initialPage: selectedPageIndex);
    super.initState();
  }

  @override
  void dispose() {
    pageController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return WillPopScope(
      onWillPop: () {
        print('No te dejo salir');
        return new Future(() => false);
      },
      child: Scaffold(
        body: PageView(
          controller: pageController,
          children: pages,
          onPageChanged: (index) {
            setState(() {
              selectedPageIndex = index;
            });
          },
        ),
        backgroundColor: Color(0xff61ffa6),
        bottomNavigationBar: new Theme(
          data: Theme.of(context).copyWith(
            // sets the background color of the `BottomNavigationBar`
            canvasColor: Color(0xff61ffa6),
            textTheme: Theme.of(context).textTheme.copyWith(
                  caption: new TextStyle(color: Colors.yellow),
                ),
          ),
          child: new BottomNavigationBar(
            iconSize: 40,
            items: [
              BottomNavigationBarItem(
                title: Text(""),
                icon: Icon(
                  Icons.shopping_basket,
                  color: selectedPageIndex == 0 ? Colors.black : Colors.white,
                ),
              ),
              BottomNavigationBarItem(
                title: Text(""),
                icon: Icon(
                  Icons.videogame_asset,
                  color: selectedPageIndex == 1 ? Colors.black : Colors.white,
                ),
              ),
              BottomNavigationBarItem(
                title: Text(""),
                icon: Icon(
                  Icons.people,
                  color: selectedPageIndex == 2 ? Colors.black : Colors.white,
                ),
              ),
            ],
            onTap: (index) {
              setState(() {
                selectedPageIndex = index;
                pageController.animateToPage(index, duration: Duration(milliseconds: 1), curve: Curves.linear);
              });
            },
            currentIndex: selectedPageIndex,
          ),
        ),
      ),
    );
  }
}
