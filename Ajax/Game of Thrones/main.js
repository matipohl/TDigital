function clearData() {
    $(".results").html('');
}

$(document).ready(function() {
    $("img").click(function() {
        let id = $(this).attr("id");
        let url = "https://www.anapioficeandfire.com/api/houses/" + id;
        clearData();
        $.get(url, function(res) {
            $(".results").append("<h1>Name: " + res.name + "</h1>");
            $(".results").append("<h2>Words: " + res.words + "</h2>");
            $(".results").append("<ul>");
            for (var i = 0; i < res.titles.length; i++) {
                $(".results").append("<li>Titles: " + res.titles[i] + "</li>");
            }
            $(".results").append("</ul>");
        }, "json");
    })
});