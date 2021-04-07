//Imprime los números del 1 al X (positivos)

function printUpTo(x) {
    var result = true;
    if (x < 0) {
        console.log("Número negativo");
        return false;
    } else {
        for (var i = 0; i <= x; i++) {
            console.log(i);
        }
    }
}
printUpTo(1); // debería imprimir todos los enteros de 1 to 1000
y = printUpTo(-10); // debería imprimir false
console.log(y); //

//Suma de los números del 1 al X

function printSum(x) {
    var sum = 0;
    for (var i = 0; i <= x; i++) {
        sum += i;
    }
    return sum;
}
y = printSum(255); // debería imprimir todos los enteros de 0 a 255 y que cada entero imprima la suma parcial.
console.log(y);

//Suma de los elementos de un array

function printSumArray(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum;
}
console.log(printSumArray([1, 2, 3])); // debería imprimir 6

//Elemento más grande

function largestElement(x) {
    var max = 0;
    for (var i = 0; i < x.length; i++) {
        if (x[i] > max) {
            max = x[i];
        }
    }
    return max;
}
console.log(largestElement([1, 30, 5, 7]));

function largestElementImproved(x) {
    return Math.max(...x);
}

console.log(largestElementImproved([1, 30, 5, 7, 1, 512]));