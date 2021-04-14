// Esperamos que ahora te sientas cómodo con los desafíos de predicción. 
//Si no es así, vuelve a hacer los desafíos de predicción de algoritmos al menos 2 veces antes de que finalice este semana. 

// Dados un array y un valor Y, cuenta e imprime (print) el número de valores del array que sean mayores que Y. 
// Dado un array, imprime los valores máximos (max), mínimos (min) y promedio (average) para el array. 
// Dado un array de números, crea una función que dé como resultado un nuevo array donde los valores negativos se reemplacen por el texto (string) 
//‘Dojo’. Por ejemplo, reemplazarNegativos([1,2,-3,-5,5]) debiera devolver [1,2, “Dojo”, “Dojo”, 5].
// Dado un array y su respectivo índice, remueve los valores en el rango del índice dado( acortando el array). 
//Por ejemplo, removerRango([20,30,40,50,60,70],2,4)debiera devolver [20,30,70].
// Ahora, vuelve a algorithm app (algorithm.codingdojo.com) y haz los 13 desafíos en menos de 2 minutos cada uno. 
//Si no puedes, por favor dedica hasta dos hora rehaciendo los desafíos de algoritmos (tanto los desafíos de predicción como los 13 desafíos).


function valoresMayoresQue(x, y) {
    var count = 0;
    for (var i = 0; i < x.length; i++) {
        if (x[i] > y) {
            count++;
            console.log(x[i]);
        }
    }
    console.log("Cantidad de números mayores que " + y + ": " + count);
}


function maxMinAvg(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum += x[i];
    }

    console.log("Promedio: " + sum / x.length)
    console.log("Máximo: " + Math.max(...x));
    console.log("Mínimo: " + Math.min(...x));
}

function reemplazarNegativos(x) {
    var z = [];

    for (var i = 0; i < x.length; i++) {
        if (x[i] < 0) {
            z.push("Dojo");
        } else {
            z.push(x[i]);
        }
    }
    return z;
}

function removerRango(x, y, z) {
    x.splice(y - 1, z - y + 1);
    return x;
}