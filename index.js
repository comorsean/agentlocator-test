$(document).ready(function() {
    $('.communities').owlCarousel({
        items: 3,
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        navText : ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
        responsive: {
            0:{
                items: 1.5
            },
            600:{
                items: 2.5
            },
            1000:{
                items: 1
            }
        }
    })
})