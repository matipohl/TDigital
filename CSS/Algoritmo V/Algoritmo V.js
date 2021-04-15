function resetNegativos(x) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] < 0) {
            x[i] = 0;
        }
    }
    console.log(x);
}

function moverAdelante(x) {
    for (var i = 0; i < x.length; i++) {
        if (i != x.length - 1) {
            x[i] = x[i + 1];
        } else {
            x[i] = 0;
        }
    }
    console.log(x);
}

function returnReverso(x) {
    var y = [];
    for (var i = x.length - 1; i >= 0; i--) {
        y.push(x[i]);
    }
    console.log(y);
}

function repetirValores(x) {
    var y = [];
    for (var i = 0; i < x.length; i++) {
        y.push(x[i]);
        y.push(x[i]);
    }
    console.log(y);
}