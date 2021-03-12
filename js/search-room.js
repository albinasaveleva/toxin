$(document).ready(function() {
    const swiper = new Swiper('.room__swiper-container', {
        loop: true,
        pagination: {
            el: '.room__swiper-pagination',
          },
          navigation: {
            nextEl: '.room__swiper-button-next',
            prevEl: '.room__swiper-button-prev',
          },
    });
    $( function() {
        $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 20000,
        values: [ 0, 20000 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( ui.values[ 0 ] + "₽" + " - " + ui.values[ 1 ] + "₽" );
        },
        });
        $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) + "₽" +
        " - " + $( "#slider-range" ).slider( "values", 1 ) + "₽" );
    });
});