function imprimehasta(x) {
    if (x > 0) {
        for (var i = 0; i <= x; i++) {
            console.log(i);
        }
    } else {
        console.log("false");
    }
}

function printSum(x) {
    var sum = 0
    for (var i = 0; i <= x; i++) {
        sum += i;
    }
    return sum;
}

function printSumArray(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum;
}

function mayorElem(x) {
    var mayorHastaAhora = x[0];
    for (var i = 0; i < x.length; i++) {
        if (mayorHastaAhora < x[i]) {
            mayorHastaAhora = x[i];
        }
    }
    return mayorHastaAhora;
}