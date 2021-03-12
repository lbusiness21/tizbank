(function($){
    "use strict";
    var $window=$(window);
    $('#preloader').fadeOut('normall',function(){
        $(this).remove();
    });
    $window.on("load",function(){
        $('.single-img').magnificPopup({
            delegate:'.popimg',
            type:'image'
        });
        $('.gallery').magnificPopup({
            delegate:'.popimg',
            type:'image',
            gallery:{
                enabled:true
            }
        });
        var $gallery=$('.gallery').isotope({});
        $('.filtering').on('click','span',function(){
            var filterValue=$(this).attr('data-filter');
            $gallery.isotope({filter:filterValue});
        });
        $('.filtering').on('click','span',function(){
            $(this).addClass('active').siblings().removeClass('active');
        });
        $window.stellar();
    });
    $window.on('scroll',function(){
        var scroll=$window.scrollTop();
        var logoinner=$(".navbar-brand img");
        var logodefault=$(".navbar-brand.logodefault img");
        var logowhite=$(".navbar-brand.logowhite img");
        var logowhitedark=$(".navbar-brand.logowhite-dark img");
        var logo2=$(".navbar-brand.logo2 img");
        var logo4=$(".navbar-brand.logo4 img");
        var logo5=$(".navbar-brand.logo5 img");
        var logo6=$(".navbar-brand.logo6 img");
        var logo7=$(".navbar-brand.logo7 img");
        var logo8=$(".navbar-brand.logo8 img");
        if(scroll<=50){
            $("header").removeClass("scrollHeader").addClass("fixedHeader");
            logoinner.attr('src','img/logos/name.png');
            logodefault.attr('src','img/logos/name.png');
            logowhite.attr('src','img/logos/name.png');
            logowhitedark.attr('src','img/logos/name.png');
            logo2.attr('src','img/logos/name.png');
            logo4.attr('src','img/logos/name.png');
            logo5.attr('src','img/logos/name.png');
            logo6.attr('src','img/logos/name.png');
            logo7.attr('src','img/logos/name.png');
            logo8.attr('src','img/logos/name.png');
        } 
        else{
            $("header").removeClass("fixedHeader").addClass("scrollHeader");
            logoinner.attr('src','img/logos/logo.png');
            logodefault.attr('src','img/logos/name.png');
            logowhite.attr('src','img/logos/name.png');
            logowhitedark.attr('src','img/logos/name.png');
            logo2.attr('src','img/logos/name.png');
            logo4.attr('src','img/logos/name.png');
            logo5.attr('src','img/logos/name.png');
            logo6.attr('src','img/logos/name.png');
            logo7.attr('src','img/logos/name.png');
            logo8.attr('src','img/logos/name.png');
        }
    });
    $window.on('scroll',function(){
        if($(this).scrollTop()>500){
            $(".scroll-to-top").fadeIn(400);
        }
        else{
            $(".scroll-to-top").fadeOut(400);
        }
    });
    $(".scroll-to-top").on('click',function(event){
        event.preventDefault();
        $("html, body").animate({
            scrollTop:0
        },600);
    });
    var pageSection=$(".parallax,.bg-img");
    pageSection.each(function(indx){
        if($(this).attr("data-background")){
            $(this).css("background-image","url("+$(this).data("background")+")");
        }
    });

    $window.resize(function(event){
        setTimeout(function(){
            SetResizeContent();
        },500);
        event.preventDefault();
    });
    function fullScreenHeight(){
        var element=$(".full-screen");
        var $minheight=$window.height();
        element.css('min-height',$minheight);
    } 
    function ScreenFixedHeight(){
        var $headerHeight=$("header").height();
        var element=$(".screen-height");
        var $screenheight=$window.height()-$headerHeight;
        element.css('height',$screenheight);
    } 
    function SetResizeContent(){
        fullScreenHeight();
        ScreenFixedHeight();
    } 
    SetResizeContent();
    $(document).ready(function(){


$('.carousel-style4 .owl-carousel').owlCarousel({
    loop:true,
    dots:true,
    nav:true,
    navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
    autoplay:true,
    autoplayTimeout:5000,
    responsiveClass:true,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:2,
            margin:10,
        },
        481:{
            items:2,
            margin:5,
        },
        500:{
            items:3,
            margin:20,
        },
        992:{
            items:4,
            margin:30,
        },
        1200:{
            items:6,
            margin:15,
        }
    }
}); 



$(".home-business-slider").owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    smartSpeed:800,
    nav:true,
    dots:true,
    navText:['<span class="fas fa-chevron-left"></span>','<span class="fas fa-chevron-right"></span>'],
    responsive:{
        0:{
            nav:false
        },
        768:{
            nav:true
        }
    }
});
$('#clients').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:1000,
    responsiveClass:true,
    autoplayHoverPause:false,
    responsive:{
        0:{items:4,margin:0},
        768:{items:6,margin:10,},
        992:{items:8,margin:20,},
        1200:{items:10,margin:50,}
    }
}); 





$('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    dots:true,
    margin:0,
    autoplay:true,
    smartSpeed:500
});



$('.countup').counterUp({
    delay:25,
    time:2000
});

if($(".countdown").length!==0){
    var tpj=jQuery;
    var countdown;
    tpj(document).ready(function(){
        if(tpj(".countdown").countdown==undefined){
            revslider_showDoubleJqueryError(".countdown");
        }
        else{
            countdown=tpj(".countdown").show().countdown({
                date:"01 Apr 2021 00:00:00",
                format:"on"
            });
        }
    });
} 
});
})
(jQuery);