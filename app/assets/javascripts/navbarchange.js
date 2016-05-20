var a = $(".navbar-wagon-fixed").offset().top;





$(document).scroll(function(){
    if($(this).scrollTop() > a)
    {
      $('.navbar-wagon-fixed').css({"background":"white"});
      $('.navbar-wagon-item').css({"color":"#494949"});
      $('.navbar-wagon-link').css({"color":"#494949"});
      $('.navbar-wagon-link').hover(function () {
        $(this).addClass('navbar-wagon-link-hover');
      },
      function () {
        $(this).removeClass('navbar-wagon-link-hover');
      });
    } else {
      $('.navbar-wagon-fixed').css({"background":"transparent"});
      $('.navbar-wagon-item').css({"color":"white"});
      $('.navbar-wagon-link').css({"color":"white"});
    }
});



