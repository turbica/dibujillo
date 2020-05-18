import 'dart:math';

class Palabras {
  static List<String> palabras = ['manzana', 'pera', 'melocoton', 'sandia', 'melon', 'Apple', 'Microsoft', 'Google', 'Unizar', 'dibujillo', 'pedro sanchez'];

  static List<String> getSugerencias() {
    String sugerencia1 = "";
    String sugerencia2 = "";
    String sugerencia3 = "";
    Random random = Random();
    while (sugerencia1 == sugerencia2 || sugerencia1 == sugerencia3 || sugerencia2 == sugerencia3) {
      sugerencia1 = palabras[random.nextInt(palabras.length)];
      sugerencia2 = palabras[random.nextInt(palabras.length)];
      sugerencia3 = palabras[random.nextInt(palabras.length)];
    }
    return [sugerencia1, sugerencia2, sugerencia3];
  }
}
