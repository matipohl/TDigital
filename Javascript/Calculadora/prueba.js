var cadena = "";

function crearString(clickedId) {
    var simbolo = false;
    var newElement = document.getElementById(clickedId).id;

    if (newElement == "+" || newElement == "-" || newElement == "*" || newElement == "/") {
        console.log("hay un símbolo");
    }

    cadena += newElement;
    document.getElementById("txtNumeros").value = cadena;
}


function solucion() {
    var resultado = eval(cadena);
    document.getElementById("txtNumeros").value = resultado;
}