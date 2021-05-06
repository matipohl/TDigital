$(document).ready(function() {
    //Addclass
    $('button.add-class').click(function() {
        $("p#red").css("color", "red");
    });

    //ToggleImage
    $('button.slide-toggle').click(function() {
        $('#rick').toggleClass("d-none");
    })

    //Append 
    $('button.append').click(function() {
        $("p#append").append(" Este es un nuevo párrafo. ");
    })
});