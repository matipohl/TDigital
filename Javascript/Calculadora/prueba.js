var str = "";

function crearString(clickedId) {
    var patt = /[+*\/-]{1}/gm;
    var newElement = document.getElementById(clickedId).id;
    //Validador
    if (patt.test(str) == true && patt.test(newElement) == true) {
        str = str.substring(0, str.length - 1);
        str += newElement;
    } else {
        str += newElement;
    }
    document.getElementById("txtNumeros").value = str;
}

function validator(str) {
    var patt = /[+*\/-]{2}/gm;
    if (patt.test(str) == true) {
        console.log("encontró 2 ++");
        str = str.substring(0, str.length - 1);
        return str;
    } else {
        return str;
    }
}


function solucion() {
    var resultado = eval(str);

    str = resultado;
    document.getElementById("txtNumeros").value = resultado;
}