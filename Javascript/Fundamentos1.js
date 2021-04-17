//Obtén del 1 a 255
function print255() {
    var z = [];
    for (var i = 0; i <= 255; i++) {
        z.push(i);
    }
    return z;
}

//Consigue pares hasta 1000
function pares1000() {
    var sum = 0;
    for (var i = 0; i <= 1000; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    console.log(sum);
}

//impares hasta 5000
function impares5000() {
    var sum = 0;
    for (var i = 0; i <= 5000; i++) {
        if (i % 2 != 0) {
            sum += i;
        }
    }
    return sum;
}

//Itera un array
function sumArray(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum;
}

//Encuentra el max
function max(x) {
    return Math.max(...x);
}

//Avg
function avg(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum / x.length;
}

//Array de impares
function arrayImpares() {
    var a = [];
    for (var i = 0; i <= 50; i++) {
        if (i % 2 != 0) {
            a.push(i);
        }
    }
    return a;
}

//mayor que Y
function mayorQue(x, y) {
    var mayor = [];
    for (var i = 0; i < x.length; i++) {
        if (x[i] > y) {
            mayor.push(x[i]);
        }
    }
    return mayor;
}

//cuadrados

function cuadrados(x) {
    for (var i = 0; i < x.length; i++) {
        x[i] = x[i] * x[i];
    }
    return x;
}

//No negativos
function noNegativos(x) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] < 0) {
            x[i] = 0;
        }
    }
    return x;
}

//Min max avg
function maxMinAvg(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum += x[i];
    }

    console.log("Promedio: " + sum / x.length)
    console.log("Máximo: " + Math.max(...x));
    console.log("Mínimo: " + Math.min(...x));
}

//Swap values
function swapValues(x) {
    var temp = 0;
    if (x.length < 2) {
        return console.log("No cumple extensión mínima requerida");
    }
    temp = x[0];
    x[0] = x[x.length - 1];
    x[x.length - 1] = temp;

    return x;
}

//Int to string
function intToDojo(x) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] < 0) {
            x[i] = "Dojo";
        }
    }
    return x;
}