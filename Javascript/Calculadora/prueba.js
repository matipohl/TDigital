var str = "";

function crearString(clickedId) {
    var newElement = document.getElementById(clickedId).id;
    var operator = false;

    str += newElement;
    document.getElementById("txtNumeros").value = str;
}


function solucion() {
    var resultado = eval(str);

    str = resultado;
    document.getElementById("txtNumeros").value = resultado;
}