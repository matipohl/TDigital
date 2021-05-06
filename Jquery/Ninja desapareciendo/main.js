$(document).ready(function() {
    //Addclass
    $(".ninja").click(function() {
        $(this).toggle(1000);
    })

    $(".btn").click(function() {
        $(".ninja").show(1000);
    })
});