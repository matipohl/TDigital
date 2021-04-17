//Big
function big(x) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] > 0) {
            x[i] = "Big";
        }
    }
    return x;
}

//printReturn
function printReturn(x) {
    console.log(Math.min(...x));
    return Math.max(...x);
}

//printReturn2
function printReturn2(x) {
    console.log(x[x.length - 2]);
    for (var i = 0; i < x.length; i++) {
        if (x[i] % 2 != 0) {
            return x[i];
        }
    }
}

//Doble
function doble(x) {
    for (var i = 0; i < x.length; i++) {
        x[i] += x[i];
    }
    return x;
}

//contarpositivos
function contarPositivos(x) {
    var count = 0;
    for (var i = 0; i < x.length; i++) {
        if (x[i] > 0) {
            count++;
        }
    }
    x[x.length - 1] = count;
    return x;
}

//paresImpares

function paresImpares(x) {
    var count1 = 0;
    var count2 = 0;
    for (var i = 0; i < x.length; i++) {
        if (x[i] % 2 != 0) {
            count1++;
            if (count1 == 3) {
                console.log("¡Que imparcial!");
                count1 = 0;
                count2 = 0;
            }
        } else {
            count2++;
            if (count2 == 3) {
                console.log("¡Es para bien!");
                count2 = 0;
                count1 = 0;
            }
        }
    }
}

//incrementa los segundos
function plusOneOdd(x) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] % 2 != 0) {
            x[i] += 1;
        }
        console.log(x[i]);
    }
    return x;
}

//longitudes previas
function longString(x) {
    for (var i = x.length - 1; i > 0; i--) {
        x[i] = x[i - 1].length;
    }
    return x;
}

//agrega 7
function agregaSiete(x) {
    var y = [];
    for (var i = 0; i < x.length; i++) {
        y.push(x[i] + 7);
    }
    return y;
}

//array inverso
function reverseArray(x) {
    return x.reverse();
}

//Negativos

function allNegatives(x) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] > 0) {
            x[i] *= -1;
        }
    }
    return x;
}

//Siempre hambriento
function hungry(x) {
    var count = 0;
    for (var i = 0; i < x.length; i++) {
        if (x[i] == "comida") {
            console.log("yummy");
            count++;
        }
    }
    if (count == 0) {
        console.log("tengo hambre");
    }
}

//cambiar hacia el centro
function cambiarHaciaCentro(x) {
    var temp;
    for (var i = 0; i <= 3; i += 2) {
        temp = x[i];
        x[i] = x[x.length - 1 - i];
        x[x.length - 1 - i] = temp;
    }
    console.log(x);
}

//escala array
function escalar(x, y) {
    for (var i = 0; i < x.length; i++) {
        x[i] *= y;
    }
    return x;
}