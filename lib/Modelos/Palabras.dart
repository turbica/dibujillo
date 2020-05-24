import 'dart:math';

class Palabras {
  static List<String> palabras = ['manzana', 'plátano', 'pera', 'camiseta',
    'chaqueta', 'melocotón', 'aristogato', 'agua', 'leche', 'arbol', 'examen',
    'mesa', 'estudiar', 'cuaderno', 'zaragoza', 'logroño', 'huesca', 'teruel',
    'pelo', 'cabeza', 'fútbol', 'baloncesto', 'natación', 'bolsa', 'mochila',
    'ordenador', 'móvil', 'calendario', 'estuche', 'falda', 'teclado', 'sandia',
    'melon', 'Microsoft', 'Google', 'Unizar', 'universidad', 'sobresaliente'];

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
