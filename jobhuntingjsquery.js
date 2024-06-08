// This is the jQuery code on the button to show additional images
$(function() {
    $("button#showrooms").click(function() {
        $("img.forumrooms").show(3000);
        $("button#showrooms").hide();
    });
});
/* It seems like hover() method is deprecated and in order to only have an effect when the user's mouse
is hovering over an element, you would need to use mouseenter and mouseleave separately */
$(function() {
    $(".名刺").on("mouseenter", function() {
        $(".名刺").css({
            "font-family": "'Times New Roman', Times, serif",
            "font-size": "28px",
            "color": "dark red"
        });
    });
});

$(function() {
    $(".名刺").on("mouseleave", function() {
        $(".名刺").css({
            "font-style": "unset",
            "font-size": "20px",
            "color": "rgb(51, 204, 102)"
        })
    });
});

$(function() {
    $(".posture").on("mouseenter", function() {
        $(this).css({
            "font-size": "2em",
            "color": "dark red"
        });
    });
});
/*
$(function() {
    $(".posture").on("mouseleave", function() {
        $(this).css({
            "font-size": "20px",
            "font-style": "italic",
            "color": "tomato"
        });
    });
});
*/
$(function() {
    $("img.suitimage, img#履歴書見本").on("mouseenter", function() {
        $(this).addClass("enlargeSize");
    });
});

$(function() {
    $("img.suitimage, img#履歴書見本").on("mouseleave", function() {
        $(this).removeClass("enlargeSize");
    });
});

$(function() {
    $("img.multiOption").on("mouseenter", function() {
        $(this).addClass("slightlyEnlarge");
    });
});

$(function() {
    $("img.multiOption").on("mouseleave", function() {
        $(this).removeClass("slightlyEnlarge");
    });
});

$(function() {
    $("img.MaleFemaleTogether").on("mouseenter", function() {
        $(this).addClass("slightlyWide");
    });
});

$(function() {
    $("img.MaleFemaleTogether").on("mouseleave", function() {
        $(this).removeClass("slightlyWide");
    });
});

$(function() {
    $("img#tokyocf2016, img#hotelfront").on("mouseenter", function() {
        $(this).css("width", "500px");
        $(this).css("height", "300px");
    });
});

$(function() {
    $("img#tokyocf2016, img#hotelfront").on("mouseleave", function() {
        $(this).css("width", "400px");
        $(this).css("height", "250px");
    });
});