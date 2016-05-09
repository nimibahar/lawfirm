var a = $(".navbar-wagon-fixed").offset().top;
var b = $(".navbar-wagon-link").offset().top;
var c = $(".navbar-wagon-item").offset().top;




$(document).scroll(function(){
    if($(this).scrollTop() > a)
    {
       $('.navbar-wagon-fixed').css({"background":"white"});
    } else {
       $('.navbar-wagon-fixed').css({"background":"transparent"});
    }
    if($(this).scrollTop() > b)
    {
       $('.navbar-wagon-link').css({"color":"#494949"});
    } else {
       $('.navbar-wagon-link').css({"color":"white"});
    }
    if($(this).scrollTop() > b)
    {
       $('.navbar-wagon-item').css({"color":"#494949"});
    } else {
       $('.navbar-wagon-item').css({"color":"white"});
    }
});
