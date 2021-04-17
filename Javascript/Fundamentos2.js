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