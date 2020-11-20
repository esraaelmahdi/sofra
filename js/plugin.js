// global alert , console , $ , prompt;

$(document).ready(function() {
    "use strict";

    $(document).on("click", ".aa", function() {
        $(this).parent().removeClass("fixed");
    });

    $(".nav-icon").click(function() {
        $(".sidebar-nav").addClass("fixed");
    });

    $(".icon-x").click(function() {
        $(this).parent().fadeOut();
    });

    //

    $(".top-bottom").click(function() {
        $("html , body").animate({
                scrollTop: 0,
            },
            1000
        );
    });
    //
    $(window).scroll(function() {
        var scrolTop = $(window).scrollTop();

        if (scrolTop > 500) {
            $(".top-bottom").fadeIn(600);
        } else {
            $(".top-bottom").fadeOut(600);
        }

        /**********************************************/
    });

    // $("#datepicker").datepicker();

    // $("#datepicker2").datepicker();
});

$(window).on("load", function() {
    $(".loader").fadeOut(6000);
});