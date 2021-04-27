//guardar los datos del cliente.

function rutValidator() {
    let rut = document.getElementById("rut").value;
    let patt = /^(\d{1,3}(?:\d{1,3}){2}[\dkK])$/mi;
    let retromsg = document.getElementById("validation-rut");
    let inputrut = document.getElementById("rut");

    if (patt.test(rut) == true) {
        if (calcDv(rut)) {
            retromsg.innerHTML = "RUT ingresado correctamente";
            retromsg.style.color = "Green";
            inputrut.style = "border-color: Green;";
            return rut;
        } else {
            //FALTARÍA CANCELAR EL SUBMIT
            retromsg.innerHTML = "Rut inválido";
            retromsg.style.color = "Red";
            inputrut.style = "border-color: Red;";
        }
    } else {
        //FALTARÍA CANCELAR EL SUBMIT
        retromsg.innerHTML = "Ingrese un el RUT de manera correcta";
        retromsg.style.color = "Red";
        inputrut.style = "border-color: Red;";
    }
}


function calcDv(rut) {
    let suma = 0;

    let reverseRut = rut.split("", rut.length - 1).reverse();
    let dv = 0;

    console.log(reverseRut);
    for (let i = 0, j = 2; i < reverseRut.length; i++, j < 7 ? j++ : j = 2) {
        suma += reverseRut[i] * j;
    }

    dv = 11 - (suma % 11);
    if (dv == 11) {
        dv = 0;
    }
    if (dv == 10) {
        dv = "k";
    }

    if (rut[rut.length - 1] == dv) {
        return true;
    } else {
        return false;
    }
}



//guardar los datos de la cuenta del cliente.// Example starter JavaScript for disabling form submissions if there are invalid fields