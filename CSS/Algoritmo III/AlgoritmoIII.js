//Ejercicio 1
function printAverage(x) {
    var sum = 0;

    for (var i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum / x.length;
}
y = printAverage([1, 2, 3]);
console.log(y); // should log 2

y = printAverage([2, 5, 8]);
console.log(y); // should log 5

//Ejercicio 2
function returnOddArray() {
    var x = [];
    for (var i = 0; i <= 255; i++) {
        if (i % 2 != 0) {
            x.push(i);
        }
    }
    return x;
}
y = returnOddArray();
console.log(y); // should log [1,3,5,...,253,255]

//Ejercicio 3
function squareValue(x) {
    for (var i = 0; i < x.length; i++) {
        x[i] = Math.pow(x[i], 2);
    }
    return x;
}
y = squareValue([1, 2, 3]);
console.log(y); // should log [1,4,9]

y = squareValue([2, 5, 8]);
console.log(y); // should log [4,25,64]