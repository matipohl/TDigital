var pokemon = {
    nombre: "",
    img: "",
    tipos: [],
    altura: 0,
    peso: 0,
};

function showPokemons() {
    for (var i = 1; i < 152; i++) {
        $("div.col-8").append("<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + i + ".png' id='" +
            i + "'>");
    }
}

function clearData() {
    $("div.border-danger").html("");
}

function showPokemonData(id) {
    let border = "div.border-danger";
    clearData();
    $("div.border-danger").show(500);
    $.get("https://pokeapi.co/api/v2/pokemon/" + id + "/", function(res) {
        $(border).append("<h1>" + res.name + "</h1>");
        $(border).append("<img src='" + res.sprites.front_default + "'>");
        $(border).append("<h4>Types</h4>\n");
        $(border).append("<ul>");
        for (var i = 0; i < res.types[i].type.name; i++) {
            $(border).append("<li>" + res.types[i].type.name + "</li>");
        }
        $(border).append("</ul>");
        $(border).append("<h4> Height </h4>");
        $(border).append("<p>" + res.weight + "</p>");
        $(border).append("<h4>Weight</h4>")
        $(border).append("<p>" + res.height + "</p>");
    }, "json");
}

$(document).ready(function() {

    showPokemons();
    $("div.border-danger").hide();
    $("div.col-8 img").click(function() {
        showPokemonData($(this).attr("id"));
    })
});