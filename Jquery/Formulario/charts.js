// Load the Visualization API and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

var dict = {};
var array = [];

function drawChart() {

    countData();

    var data = google.visualization.arrayToDataTable([
        ["Option", "Votos"],
        ["Pan con Palta", array[0]],
        ["Pan con Queso", array[1]],
        ["Pan con Huevo", array[2]]
    ]);

    var options = {
        title: "Encuesta de Pan",
        "width": 400,
        "height": 300
    };

    var chart = new google.visualization.PieChart(document.getElementById("piechart"));

    chart.draw(data, options);
}

function countData() {
    var a = 0;
    var b = 0;
    var c = 0;

    for (var i = 0; i < voters.length; i++) {
        if (voters[i].option == "Pan con Palta") {
            dict["Pan con Palta"] = ++a;
        } else if (voters[i].option == "Pan con Queso") {
            dict["Pan con Queso"] = ++b;
        } else if (voters[i].option == "Pan con Huevo") {
            dict["Pan con Huevo"] = ++c;
        }
    }
    array = [a, b, c];
}