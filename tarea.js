//// EJERCICIO1   
//let unidad, cantidad, mi, km, mt;
//unidad = parseInt(prompt('Digite 1 para Millas - 2 para Kilometros - 3 para Metros'));
//cantidad = prompt('Digite la distancia a convertir');
//switch (unidad) {
//    case 1: 
//        km = cantidad * 1.6093;
//        mt = cantidad * 1609.34;
//        document.write(cantidad + ' Millas equivalen a ' + km + ' Kilometros y a ' + mt + ' Metros');
//        break;
//    case 2:
//        mi = cantidad * 0.621371;
//        mt = cantidad * 1000;
//        document.write(cantidad + ' Kilometros equivalen a ' + mi + ' Millas y a ' + mt + ' Metros')
//        break;
//    case 3:
//        mi = cantidad * 0.000621371;
//        km = cantidad * 0.001;
//        document.write(cantidad + ' Metros equivalen a ' + mi + ' Millas y a ' + km + ' Kilometros')
//        break;
//    default:
//        document.write('Valor INCORRECTO');
//        break
//}

// EJERCICIO2
 let d1, d2, d3, d4, d5, d6, num, coc;
 num = prompt('Digite un numero del 1 al 6');
 d6 = num % 10;
 coc = Math.trunc(num / 10);
 d5 = coc % 10;
 coc = Math.trunc(coc/ 10);
 d4 = coc % 10;
 coc = Math.trunc(coc / 10);
 d3 = coc % 10;
 coc = Math.trunc(coc / 10);
 d2 = coc % 10;
 coc = Math.trunc(coc / 10);
 d1 = d5 = coc % 10;
 document.write(d6 +" " + d5 + " " + d4 + " " + d3 + " " + d2 + " " + d1);

//EJERCICIO 3
// let hh, mm, ss;

// hh = parseInt(prompt("Digite las horas"));
// mm = parseInt(prompt("Digite los minutos"));
// ss = parseInt(prompt("Digite los segundos"));

// ss = ss + 1;

// if (ss == 60) {
//     ss = 0;
//     mm = mm + 1;
// }

// if (mm == 60) {
//     mm = 0;
//     hh = hh + 1;
// }

// if (hh == 24) {
//     hh = 0;
// }

// document.write("La hora un segundo después es: " 
// + hh + ":" + mm + ":" + ss);

//EJERCICIO 4
// EJERCICIO 4
// let a, b, c, d, x1, x2;

// a = parseFloat(prompt("Digite el valor de a"));
// b = parseFloat(prompt("Digite el valor de b"));
// c = parseFloat(prompt("Digite el valor de c"));

// d = (b * b) - (4 * a * c);

// if (d > 0) {
//     x1 = (-b + Math.sqrt(d)) / (2 * a);
//     x2 = (-b - Math.sqrt(d)) / (2 * a);

//     document.write("Hay DOS soluciones reales <br>");
//     document.write("x1 = " + x1 + "<br>");
//     document.write("x2 = " + x2);
// }

// else if (d == 0) {
//     x1 = (-b) / (2 * a);

//     document.write("Hay UNA solucion real <br>");
//     document.write("x = " + x1);
// }

// else {
//     document.write("Hay DOS soluciones imaginarias");
// }