class Vote {
    name;
    option;

    constructor(name, option) {
        this.name = name;
        this.option = option;
    }
}

var voters = [];

var id;

function addVote() {
    let name = $("input#name").val();
    let option = $("input[type='radio']:checked").val();
    let vote = new Vote(name, option);
    voters.push(vote);
    return voters;
}

function getIndex(id) {
    return parseInt(id.charAt(0));
}

function deleteVote(index) {
    voters.splice(index, 1);
    loadTable(voters);
}

function showVote(index) {
    $('form').find("input[type=text]").attr("placeholder", voters[index].name);
    $('input:radio[name="modalGridRadios"][value="' + voters[index].option + '"]').attr('checked', true);
    id = index;
}

function updateVote() {
    let name = $("input#edit-name").val();
    let option = $("input[name='modalGridRadios']:checked").val();
    voters[id].name = name;
    voters[id].option = option;
    console.log(voters[id]);
    $('.modal').modal('toggle');
    loadTable(voters);
}


function loadTable(voters) {
    let output = "";

    for (var i = 0; i < voters.length; i++) {
        output += "<tr>"
        output += "<td>" + voters[i].name + "</td>";
        output += "<td>" + voters[i].option + "</td>";
        output += "<td><button type='button' data-toggle='modal' data-target='#edit-vote' class='btn btn-warning' id='" + i + "-edit'>Editar </button> <button type='button' id='" + i + "-delete' class='btn btn-danger'>Eliminar </button></td>"
        output += "/<tr>"
    }
    $("tbody").html(output);
}

$(document).ready(function() {
    $("#vote").click(function() {
        addVote();
        loadTable(voters);
    });

    $(document).on("click", ".btn-danger", function() {
        let index = getIndex($(this).attr("id"));
        deleteVote(index);
    });

    $(document).on("click", ".btn-warning", function() {
        let index = getIndex($(this).attr("id"));
        showVote(index);
    });

    $(document).on("click", ".save", function() {
        updateVote();
    });
});