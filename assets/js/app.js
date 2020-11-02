$(function () {

    // Gallery
    
    $(".apartments__gallery-list").magnificPopup({
        delegate: "a",
        type: "image",
        gallery: {
          enabled: true
        }
    });

    // Scroll to section
    
    let header = $('#header');
    let headerH = header.innerHeight();
    let scrollTop = $(window).scrollTop();
    
    let navToggle = $('#navToggle');   
    let nav = $('#nav');
    
    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();
    
        let scrollEl = $(this).data('scroll');
        let scrollElPos = $(scrollEl).offset().top;
    
        navToggle.removeClass('active');
        nav.removeClass('active');
        $('body').removeClass('lock');
    
        $('html, body').animate({
            scrollTop: scrollElPos - headerH
        }, 500);
    });

    // Fixed menu scroll
    
    $(window).on('scroll', function() {
        if ($(window).scrollTop()) {
            $('.header').addClass('dark');
        } else {
            $('.header').removeClass('dark');
        }
    });

    // Burger
    
    $('.burger').click(function(event) {
        $('.burger, .nav').toggleClass('active');
        $('body').toggleClass('lock');
        
    });

});