// Programa de temperaturas con ciclo hasta ingresar 99 o -99

let temperatura;
let menores = 0;
let iguales = 0;
let mayores = 0;

while (true) {

    temperatura = parseInt(prompt("Digite una temperatura:"));

    // Finaliza el programa
    if (temperatura == 99 || temperatura == -99) {
        break;
    }

    // Contadores
    if (temperatura < 0) {
        menores++;
    }
    else if (temperatura == 0) {
        iguales++;
    }
    else {
        mayores++;
    }
}

// Mostrar resultados
document.write("Temperaturas menores a 0: " + menores + "<br>");
document.write("Temperaturas iguales a 0: " + iguales + "<br>");
document.write("Temperaturas mayores a 0: " + mayores);