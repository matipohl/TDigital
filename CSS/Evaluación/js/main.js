$(document).ready(function() {
    //Addclass
    // $(".hover").hover(function() {
    //     var src = $(this).attr("src");
    //     var altSrc = $(this).attr("data-alt-src");

    //     $(this).attr("src", altSrc);
    //     $(this).attr("data-alt-src", src);
    // })

    $("div.box-menu ul li a").mouseover(function() {
        $(this).css("color", "#1B99E8");
    }).mouseout(function() {
        $(this).css("color", "white");
    })

    $("div.section-2 button.button").mouseover(function() {
        $(this).css("color", "#062134");
    }).mouseout(function() {
        $(this).css("color", "white");
    })

    $("div.footer div.footer-menu ul li a").mouseover(function() {
        $(this).css("color", "#062134");
    }).mouseout(function() {
        $(this).css("color", "#6896B8");
    })
});