
import 'package:flutter_driver/flutter_driver.dart';
import 'package:test/test.dart';


void main() {
  group("App de Dibujillo test", () {
    final emailField = find.byValueKey("Correo electrónico");
    final passwordField = find.byValueKey("Contraseña");
    final signInButton = find.text("GO");
   // final userInfoPage = find.byType("UserInfoPage");
    final snackbar = find.byType("AlertDialog");

    FlutterDriver driver;
    setUpAll(()async{
      driver = await FlutterDriver.connect();
    });

    tearDownAll(()async{
      if(driver != null) {
        driver.close();
      }
    });
/*
    test("Falla identificacion y muestra mensaje",() async{
      await driver.tap(emailField);
      await driver.enterText("a tu si ramon");
      await driver.tap(passwordField);
      await driver.enterText("sabes mucho tu");
      await driver.tap(signInButton);
      await driver.waitFor(snackbar);
      assert(snackbar != null);
      await driver.waitUntilNoTransientCallbacks();
     // assert(userInfoPage == null);
    });
    */

/*
    test("logs in with correct email and password",() async {
      await driver.tap(emailField);
      await driver.enterText("test@testmail.com");
      await driver.tap(passwordField);
      await driver.enterText("testtest1");
      await driver.tap(signInButton);
      await driver.waitFor(userInfoPage);
      assert(userInfoPage != null);
      await driver.waitUntilNoTransientCallbacks();

    });
*/

  });
}