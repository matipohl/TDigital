class Vote {
    name;
    option;

    constructor(name, option) {
        this.name = name;
        this.option = option;
    }
}

var voters = [];

//VOTACIÓN
//Crear una nueva votación
//agregarlos a la lista voters


//TABLA
//Revisar la lista voters
//agregar cada elemento a la tabla

//Eliminar Votación
//Seleccionarlo por el índice
//Eliminarlo de la lista
//Actualizar tabla

//Editar Votación
//Seleccionarlo por el índice
//Crear un modal 
//Llamar los datos y actualizar las variables

function addVote() {
    let name = $("input#name").val();
    let option = $("input[type='radio']:checked").val();
    let vote = new Vote(name, option);
    voters.push(vote);
    return voters;
}

function loadTable(voters) {
    let output = "";

    for (var i = 0; i < voters.length; i++) {
        output += "<tr>"
        output += "<td>" + voters[i].name + "</td>";
        output += "<td>" + voters[i].option + "</td>";
        output += "<td><button type='button' class='btn btn-warning'>Editar </button> <button type='button' class='btn btn-danger'>Eliminar </button></td>"
        output += "/<tr>"
    }
    $("tbody").html(output);
}

$(document).ready(function() {

    $("#vote").click(function() {
        addVote();
        loadTable(voters);
    });

    //Eliminar Votación
    //Seleccionarlo por el índice
    //Eliminarlo de la lista
    //Actualizar tabla

    $("button.btn-danger").click(function() {
        console.log($(this).siblings().val());
    });

    //Editar Votación
    //Seleccionarlo por el índice
    //Crear un modal 
    //Llamar los datos y actualizar las variables
});