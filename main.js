

// adjusts the height of elements with classes "slide" and "carousel-item" based on
// the window size
$(window).on("resize", function() {
    const windowH = $(window).height();
    const upperBarH = $(".upper-bar").innerHeight();
    const navbarH = $(".navbar").innerHeight();
    $(".slide, .carousel-item").height(windowH - (upperBarH + navbarH));

    if ($(window).width() <= 768) {
        $(".slide, .carousel-item").height(windowH - navbarH);
    }
}).trigger("resize");


// This is for the nav links like home, about, work ... etc.
$(document).ready(function () {
    $(".nav-item").on("mouseover", function () {
        $(this).addClass("active");
    });
    $(".nav-link").on("mouseover", function () {
        $(this).addClass("redLink");
        $(".actualRed").removeClass("redLink");
    });
    $(".actualRed").on("mouseover", function () {
        $(this).addClass("redLink");
    });

    $(".nav-item").on("mouseleave", function () {
        $(this).removeClass("active");
    });
    $(".nav-link").on("mouseleave", function () {
        $(this).removeClass("redLink");
        $(".actualRed").addClass("redLink");
    })
});


// This is for shuffle images in the featured work when select specific category
$(document).ready(function () {
    $(".list-unstyled li .border").on("click", function () {
        $(this).addClass("active").parent().siblings().find(".border").removeClass("active");
        if ( $(this).data("class") === "all") {
            $(".shuffle-imgs .col-6").css("filter", "blur(0px)");
        }
        else {
            $(".shuffle-imgs .col-6").css("filter", "blur(5px)");
            $( $(this).data("class") ).parent().css("filter", "blur(0px)");
        }
    });
});


// This is for statistics section to start increment the numbers when reach it
$(document).ready(function() {
    let statsSpan = $(".increment");
    let started = false;

    $(window).on("scroll", function() {
        if ($(window).scrollTop() >= $(".stats").offset().top - 500) {
            if (!started) {
                statsSpan.each(function(index, span) {
                    startCount($(span));
                });
            }
            started = true;
        }
    });

    function startCount(element) {
        let goal = element.data("progress");

        let counter = setInterval(function() {
            let currentValue = parseInt(element.text());
            element.text(currentValue += 1);
            if (currentValue === goal) {
                clearInterval(counter);
                }    
            }, 1000 / goal);
    }
});


// This is for the arrow aimed to Scroll Back To Top
$(document).ready(function() {
    let arrowToTop = $(".arrow-top");

    $(window).scroll(function() {
        if ( $(this).scrollTop() >= 350) {
            arrowToTop.addClass("show");
        } 
        else {
            arrowToTop.removeClass("show");
        }
    });
    
    arrowToTop.on("click", function() {
        $("html, body").scrollTop(0);
    });
});
