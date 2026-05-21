// Programa radar aeronaves

let numero;
let d1, d2, d3, d4;

numero = prompt("Digite un número de 4 dígitos:");

// Validar que tenga exactamente 4 dígitos numéricos
if (numero.length != 4 || isNaN(numero)) {

    document.write("ERROR: Debe ingresar un número válido de 4 dígitos");

} else {

    // Separar dígitos
    d1 = parseInt(numero[0]);
    d2 = parseInt(numero[1]);
    d3 = parseInt(numero[2]);
    d4 = parseInt(numero[3]);

    // Primer dígito
    if (d1 % 2 == 0) {
        document.write("Hay una aeronave en el aire<br>");
    } else {
        document.write("No hay aeronave en el aire<br>");
    }

    // Segundo dígito -> tipo de aeronave
    switch (d2) {

        case 1:
            document.write("Tipo: Avión militar<br>");
            break;

        case 2:
            document.write("Tipo: Avión civil de carga<br>");
            break;

        case 3:
            document.write("Tipo: Avión civil de pasajeros<br>");
            break;

        case 4:
            document.write("Tipo: Aeronave sin permiso<br>");
            break;

        case 5:
            document.write("Tipo: Aeronave de supertransporte<br>");
            break;

        case 6:
            document.write("Tipo: Aeronave enemiga<br>");
            break;

        case 7:
            document.write("Tipo: Avión mixto<br>");
            break;

        case 8:
            document.write("Tipo: Helicóptero<br>");
            break;

        case 9:
            document.write("Tipo: Globo aerostático<br>");
            break;

        case 0:
            document.write("Tipo: Dirigible<br>");
            break;
    }

    // Tercer dígito -> distancia
    document.write("Distancia: " + d3 + " km<br>");

    // Cuarto dígito -> dirección
    if (d4 == 0 || d4 == 1) {
        document.write("Dirección: Norte");
    }
    else if (d4 == 2 || d4 == 3) {
        document.write("Dirección: Sur");
    }
    else if (d4 == 4 || d4 == 5) {
        document.write("Dirección: Oriente");
    }
    else if (d4 == 6 || d4 == 7) {
        document.write("Dirección: Occidente");
    }
    else {
        document.write("Dirección: Desconocida");
    }
}