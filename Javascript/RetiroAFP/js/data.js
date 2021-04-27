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
            return null;
        }
    } else {
        //FALTARÍA CANCELAR EL SUBMIT
        retromsg.innerHTML = "Ingrese un el RUT de manera correcta";
        retromsg.style.color = "Red";
        inputrut.style = "border-color: Red;";
        return null;
    }
}

function calcDv(rut) {
    let suma = 0;
    let reverseRut = rut.split("", rut.length - 1).reverse();
    let dv = 0;
    for (let i = 0, j = 2; i < reverseRut.length; i++, j < 7 ? j++ : j = 2) {
        suma += reverseRut[i] * j;
    }
    dv = 11 - (suma % 11);
    if (dv == 11) dv = 0;
    if (dv == 10) dv = "k";
    if (rut[rut.length - 1] == dv) return true;
    else return false;

}

function serialNumberValidator() {
    let serialNumber = document.getElementById("serial-number").value;
    let patt = /^([0-9]{9})$/i;
    let retromsg = document.getElementById("validation-serial-number");
    let inputsn = document.getElementById("serial-number");

    if (patt.test(serialNumber) == true) {
        retromsg.innerHTML = "Número de serie ingresado correctamente";
        retromsg.style.color = "Green";
        inputsn.style = "border-color: Green;";
        return serialNumber;
    } else {
        retromsg.innerHTML = "Número de serie inválido";
        retromsg.style.color = "Red";
        inputsn.style = "border-color : Red"
        return null;
    }
}

function detectEqualSerialNumber() {
    let serialNumber = document.getElementById("serial-number").value;
    let cserialNumber = document.getElementById("confirm-serial-number").value;
    let retromsg = document.getElementById("validation-confirm-serial-number");
    let inputcsn = document.getElementById("confirm-serial-number");

    if (serialNumber === cserialNumber) {
        retromsg.innerHTML = "Número de serie Ingresado correctamente";
        retromsg.style.color = "Green";
        inputcsn.style = "border-color: Green";
        return true;
    } else {
        retromsg.innerHTML = "Número de serie Ingresado correctamente";
        retromsg.style.color = "Red";
        inputcsn.style = "border-color: Red";
        return false;
    }
}



//guardar los datos de la cuenta del cliente.// Example starter JavaScript for disabling form submissions if there are invalid fields