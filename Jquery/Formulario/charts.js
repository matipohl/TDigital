// Load the Visualization API and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

var dict = {};

function drawChart() {

}

function countData() {
    var a = 1;
    var b = 1;
    var c = 1;
    for (var i = 0; i < voters.length; i++) {
        if (voters[i].option == "Pan con Palta") {
            dict["Pan con Palta"] = a++;
        } else if (voters[i].option == "Pan con Queso") {
            dict["Pan con Queso"] = b++;
        } else if (voters[i].option == "Pan con Huevo") {
            dict["Pan con Huevo"] = c++;
        }
    }
}