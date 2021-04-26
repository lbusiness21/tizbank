(function($){
    "use strict";
    var $window=$(window);
    $('#preloader').fadeOut('normall',function(){
        $(this).remove();
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
        1200:{items:10,margin:25,}
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
});
})
(jQuery);