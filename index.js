$(document).ready(function() {
    $(".hamburger").on( "click", function() {
        $(".hamburger").toggleClass("hamburger--collapse");
        $(".hamburger").toggleClass("is-active");
    });
    $('.communities').owlCarousel({
        items: 3,
        loop: true,
        navText : ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
        responsive: {
            0:{
                items: 1.2,
                margin: 10,
                dots: true,
                nav: false,
            },
            600:{
                items: 2.1,
                margin: 10,
            },
            1000:{
                items: 1,
                margin: 20,
                dots: false,
                nav: true,
            }
        }
    });
    $('.testimonials').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: true,
        navText : ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
        responsive: {
            0:{
                nav: false,
            },
            600:{
                nav: true,
            }
        }
    });
});