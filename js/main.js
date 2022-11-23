// Banner Slider

$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
});

// Portfolio Click Slider

$(document).ready(function(){

    $("#content-one").show();
    $("#content-two").hide();
    $("#content-three").hide();
    $("#content-four").hide();

    $("#click-one").click(function(){

        $("#click-one").addClass("active");
        $("#click-two").removeClass("active");
        $("#click-three").removeClass("active");
        $("#click-four").removeClass("active");

        $("#content-one").show();
        $("#content-two").hide();
        $("#content-three").hide();
        $("#content-four").hide();

    });

    $("#click-two").click(function(){

        $("#click-one").removeClass("active");
        $("#click-two").addClass("active");
        $("#click-three").removeClass("active");
        $("#click-four").removeClass("active");

        $("#content-one").hide();
        $("#content-two").show();
        $("#content-three").hide();
        $("#content-four").hide();

    });

    $("#click-three").click(function(){

        $("#click-one").removeClass("active");
        $("#click-two").removeClass("active");
        $("#click-three").addClass("active");
        $("#click-four").removeClass("active");

        $("#content-one").hide();
        $("#content-two").hide();
        $("#content-three").show();
        $("#content-four").hide();

    });

    $("#click-four").click(function(){

        $("#click-one").removeClass("active");
        $("#click-two").removeClass("active");
        $("#click-three").removeClass("active");
        $("#click-four").addClass("active");

        $("#content-one").hide();
        $("#content-two").hide();
        $("#content-three").hide();
        $("#content-four").show();

    });

});

jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 10,
                time: 2000
            });
        });