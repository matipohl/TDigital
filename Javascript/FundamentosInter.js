//Sigma
function sigma(n) {
    if (n == 0)
        return 0;
    else
        return n + sigma(n - 1);

}

//Factorial
function factorial(n) {
    if (n == 0)
        return 1;
    else
        return n * factorial(n - 1);
}

//fibonacci
function fib(n) {
    var f_0 = 0
    var f_1 = 1;
    var f_2;
    for (var i = 1; i <= n; i++) {
        f_2 = f_1 + f_0;
        f_0 = f_1;
        f_1 = f_2;
    }
    return f_2;
}
//fibonacci recursivo
function fibonacci(n) {
    if (n == 0)
        return 0;
    else if (n == 1)
        return 1;
    else
        return fibonacci(n - 2) + fibonacci(n - 1);
}

//array penúltimo
function pen(n) {
    if (n.length < 1) {
        return null;
    } else {
        return n[n.length - 2];
    }
}


//n ultimo
function nLast(n, y) {
    if (n.length < y) {
        return null;
    } else {
        return n[n.length - 1 - y];
    }
}

//secondBigger
function secondBigger(n) {
    if (n <= 1) {
        return null;
    } else {
        n.pop(Math.max(...n));
        return Math.max(...n);
    }
}

//doble par
function doble(n) {
    var y = [];
    for (var i = 0; i < n.length; i++) {
        y.push(n[i]);
        y.push(n[i]);
    }
    return y;
}