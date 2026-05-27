let num1, num2;
 num1 = parseInt(prompt('numero 1'));
 num2 = parseInt(prompt('numero 2'));
suma();
resta(num1, num2);

function suma(){
    let num1, num2, suma;
    num1 = parseInt(prompt('numero 1'));
    num2 = parseInt(prompt('numero 2'));
    suma = num1 + num2;
    document.write('la suma es: ' + suma);
}

function resta(num1, num2){
    let resta;
    resta = num1 - num2;
    document.write('la resta es: ' + resta);
}

function mult(num1, num2){
    let result = num1 * num2;
    return result;

}
