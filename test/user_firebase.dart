import 'package:dibujillo/NavigationBar.dart';
import 'package:dibujillo/Vistas/Social.dart';
import 'package:dibujillo/main.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:mockito/mockito.dart';
import 'package:rxdart/rxdart.dart';

void firevase3() {
  testWidgets('Counter increments smoke test',(WidgetTester tester) async {
    // Build our app and trigger a frame.
    await tester.pumpWidget(NavigationBar());

    // Verify that our counter starts at 0.

    expect(find.text('Negro'),findsNothing);

    // Tap the '+' icon and trigger a frame.
    await tester.tap(find.byIcon(Icons.shopping_basket));
    await tester.pump();

    // Verify that our counter has incremented.
    expect(find.text('Negro'),findsOneWidget);
  });
}