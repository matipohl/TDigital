const key = "98e1366eea5aaa9132df6d505cbb3e1e";

function clearData() {
    $("div.results").html("")
}

function showData(res) {
    $("div.results").append("<h1>" + res.name + ": " + res.weather[0].description + "</h1>");
    $("div.results").append("<h2> Temperatura: " + KtoCel(res.main.temp) + " °C</h2>");
    $("div.results").append("<h2> Coord: " + res.coord.lon + ", " + res.coord.lat + "</h2>");
}

function KtoCel(tempF) {
    let C = tempF - 273.15;
    return C;
}



$(document).ready(function() {
    $('form').submit(function() {
        // your code here (build up your url)
        let city = $("input.form-control").val();
        let url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&&appid=" + key;
        $.get(url, function(res) {
            clearData();
            showData(res);
        }, 'json');
        // don't forget to return false so the page doesn't refresh
        return false;
    });
});