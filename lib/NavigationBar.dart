import 'package:flutter/material.dart';
import 'Vistas/Principal.dart';
import 'Vistas/Social.dart';
import 'Vistas/Tienda.dart';

class NavigationBar extends StatefulWidget {
  @override
  _NavigationBarState createState() => _NavigationBarState();
}

class _NavigationBarState extends State<NavigationBar> {
  var selectedPageIndex = 0;
  PageController pageController;

  var pages = [
    Principal(),
    Social(),
    Tienda(),
  ];

  @override
  void initState() {
    pageController = PageController();
    super.initState();
  }

  @override
  void dispose() {
    pageController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
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
                Icons.videogame_asset,
                color: selectedPageIndex == 0 ? Colors.black : Colors.white,
              ),
            ),
            BottomNavigationBarItem(
              title: Text(""),
              icon: Icon(
                Icons.people,
                color: selectedPageIndex == 1 ? Colors.black : Colors.white,
              ),
            ),
            BottomNavigationBarItem(
              title: Text(""),
              icon: Icon(
                Icons.shopping_basket,
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
    );
  }
}
