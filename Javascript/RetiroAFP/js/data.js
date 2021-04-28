/****************************
RUT
*****************************/

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
            retromsg.innerHTML = "Rut inválido";
            retromsg.style.color = "Red";
            inputrut.style = "border-color: Red;";
            return null;
        }
    } else {
        retromsg.innerHTML = "Ingrese un Rut válido";
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

/****************************
SERIAL NUMBER
*****************************/

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
        retromsg.innerHTML = "Confirmación completada";
        retromsg.style.color = "Green";
        inputcsn.style = "border-color: Green";
        return cserialNumber;
    } else {
        retromsg.innerHTML = "Número de serie inválido";
        retromsg.style.color = "Red";
        inputcsn.style = "border-color: Red";
        return null;
    }
}

/****************************
EMAIL
*****************************/

function emailValidator() {
    let email = document.getElementById("email").value;
    let patt = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let retromsg = document.getElementById("validation-email");
    let inpute = document.getElementById("email");

    if (patt.test(email) == true) {
        retromsg.innerHTML = "Email ingresado correctamente";
        retromsg.style.color = "Green";
        inpute.style = "border-color: Green";
        return email;
    } else {
        retromsg.innerHTML = "Email inválido";
        retromsg.style.color = "Red";
        inpute.style = "border-color: Red";
        return null;
    }
}

function detectEqualEmail() {
    let email = document.getElementById("email").value;
    let cemail = document.getElementById("confirm-email").value;
    let retromsg = document.getElementById("validation-confirm-email");
    let inputce = document.getElementById("confirm-email");

    if (email == cemail) {
        retromsg.innerHTML = "Confirmación completada";
        retromsg.style.color = "Green";
        inputce.style = "border-color: Green";
        return cemail;
    } else {
        retromsg.innerHTML = "Email inválido";
        retromsg.style.color = "Red";
        inputce.style = "border-color: Red";
        return null;
    }
}

/****************************
PHONE NUMBER
*****************************/

function phoneValidator() {
    let phone = document.getElementById("phone").value;
    let patt = /^[9876543]\d{7}$/i;
    let retromsg = document.getElementById("validation-phone");
    let inputp = document.getElementById("phone");

    if (patt.test(phone) == true) {
        retromsg.innerHTML = "Teléfono ingresado correctamente";
        retromsg.style.color = "Green";
        inputp.style = "border-color: Green";
        return "+569" + phone;
    } else {
        retromsg.innerHTML = "Teléfono inválido";
        retromsg.style.color = "Red";
        inputp.style = "border-color: Red";
        return null;
    }
}

function detectEqualPhone() {
    let phone = document.getElementById("phone").value;
    let cphone = document.getElementById("confirm-phone").value;
    let retromsg = document.getElementById("validation-confirm-phone");
    let inputcp = document.getElementById("confirm-phone");

    if (phone == cphone) {
        retromsg.innerHTML = "Confirmación completada";
        retromsg.style.color = "Green";
        inputcp.style = "border-color: Green";
        return cphone;
    } else {
        retromsg.innerHTML = "Email inválido";
        retromsg.style.color = "Red";
        inputcp.style = "border-color: Red";
        return null;
    }
}

/****************************
NUMBER ACCOUNT 
*****************************/

function numberAccountValidator() {
    let account = document.getElementById("account").value;
    let typeAccount = document.getElementById("type-account").selectedIndex;
    let rut = document.getElementById("rut").value;
    let retromsg = document.getElementById("validation-account");
    let inputa = document.getElementById("account");

    if (typeAccount == 0 || typeAccount == 1 || typeAccount == 3) {
        let patt = /^([0-9]{11})$/i;
        if (patt.test(account) == true) {
            retromsg.innerHTML = "Cuenta ingresada correctamente";
            retromsg.style.color = "Green";
            inputa.style = "border-color: Green";
            return account;
        } else {
            retromsg.innerHTML = "Cuenta inválida";
            retromsg.style.color = "Red";
            inputa.style = "border-color: Red";
            return null;
        }
    } else {
        if (account == rut.slice(0, -1)) {
            retromsg.innerHTML = "Cuenta ingresada correctamente";
            retromsg.style.color = "Green";
            inputa.style = "border-color: Green";
            return account;
        } else {
            retromsg.innerHTML = "Cuenta inválida";
            retromsg.style.color = "Red";
            inputa.style = "border-color: Red";
            return null;
        }
    }
}

/****************************
AMOUNT 
*****************************/

function amountValidator() {
    let amount = parseInt(document.getElementById("amount").value);
    let retromsg = document.getElementById("validation-amount");
    let inputa = document.getElementById("amount");
    let patt = /^[0-9]{1,}$/;
    let maxAmount = 4500000;

    if (patt.test(amount) == true) {
        if (amount > 0 && amount <= maxAmount) {
            retromsg.innerHTML = "Monto ingresado correctamente";
            retromsg.style.color = "Green";
            inputa.style = "border-color: Green";
            return amount;
        } else {
            retromsg.innerHTML = "Ingrese un monto positivo que no exceda los 4500000";
            retromsg.style.color = "Red";
            inputa.style = "border-color: Red";
            return null;
        }
    } else {
        retromsg.innerHTML = "Monto inválido";
        retromsg.style.color = "Red";
        inputa.style = "border-color: Red";
        return null;
    }
}

/****************************
SAVING DATA
*****************************/
function saveDataClient() {
    let client = {};

    if (rutValidator() != null && serialNumberValidator() != null && detectEqualSerialNumber() != null && emailValidator() != null && detectEqualEmail() != null && phoneValidator() != null && detectEqualPhone() != null) {
        client.rut = rutValidator();
        client.serialNumber = serialNumberValidator();
        client.email = emailValidator();
        client.phone = phoneValidator();
        showSectionTwo();
        return client;
    } else {
        return null;
    }
}

function saveDataTransaction() {
    let bankTransaction = {};
    let accountType = document.getElementById("type-account").value;
    if (numberAccountValidator() != null && amountValidator != null) {
        bankTransaction.accountType = accountType;
        bankTransaction.numberAccount = numberAccountValidator();
        bankTransaction.amount = amountValidator();
        showData(saveDataClient(), bankTransaction);
        showSectionThree();
    } else {
        return null;
    }
}

/****************************
SHOW PARTS
*****************************/
function showSectionTwo() {
    let partTwo = document.getElementById("part-two");
    partTwo.style = "display: block";
}

function showSectionThree() {
    let partThree = document.getElementById("part-three");
    partThree.style = "display: block";
}
/****************************
SHOW DATA
*****************************/

function showData(client, bankTransaction) {
    let rut = document.getElementById("display-rut");
    let email = document.getElementById("display-email");
    let phone = document.getElementById("display-phone");

    let accountType = document.getElementById("display-type-account");
    let account = document.getElementById("display-accout");
    let amount = document.getElementById("display-amount");

    rut.innerHTML = client.rut;
    email.innerHTML = client.email;
    phone.innerHTML = client.phone;
    accountType.innerHTML = bankTransaction.accountType;
    account.innerHTML = bankTransaction.numberAccount;
    amount.innerHTML = bankTransaction.amount;
}