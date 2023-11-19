$(document).ready(function(){

    // $(".scroll-top").click(function(){
    //     $("html, body").animate({scrollTop:0});
    // });

    

    $(".pop-up i").click(function(){
        $(".pop-up-bg").fadeOut();
    });

    $(window).load(function(){
        $(".preloader").delay(500).fadeOut(500);

        $(".pop-up-bg").delay(5000).fadeIn();
    });

    $(window).scroll(function(){
        let scrolling = $(this).scrollTop();
        console.log(scrolling);

        if(scrolling >= 130){
            $(".menu-bg").addClass("menu-fixed");
        }
        else{
            $(".menu-bg").removeClass("menu-fixed");
        }

        if(scrolling >= 450){
            $(".scroll-top").addClass("after-scroll");
        }
        else{
            $(".scroll-top").removeClass("after-scroll");
        }
    });

});