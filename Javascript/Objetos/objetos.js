var users = [{ name: "Michael", age: 37 }, { name: "John", age: 30 }, { name: "David", age: 27 }];

//¿Cómo harías print/log de la edad de John?
function getAgebyName(str) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].name == str) {
            console.log(users[i].age);
        }
    }
}
//¿Cómo harías print/log del nombre del primer objeto?
function getNameFirstObject() {
    console.log(users[0].name);
}

//¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop? Tu output debería verse algo como esto
function getAgebyName(users) {
    for (var i = 0; i < users.length; i++) {
        console.log(users[i].name + " - " + users[i].age);
    }
}


//¿Cómo harías para imprimir el nombre de los mayores de edad?

//Se agrega un menor de edad para la validación.
users.push({
    name: "R2D2",
    age: 15
});

function getNamebyAdult(users) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].age >= 18) {
            console.log(users[i].name);
        }
    }
}