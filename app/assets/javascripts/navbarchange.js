var a = $(".navbar-wagon-fixed").offset().top;
// var b = $(".navbar-wagon-link").offset().top;
// var c = $(".navbar-wagon-item").offset().top;




// $(document).scroll(function(){
//     if($(this).scrollTop() > a)
//     {
//       $('.navbar-wagon-fixed').css({"background":"white"});
//     } else {
//       $('.navbar-wagon-fixed').css({"background":"transparent"});
//     }
//     if($(this).scrollTop() > b)
//     {
//       $('.navbar-wagon-link').css({"color":"#494949"});
//     } else {
//       $('.navbar-wagon-link').css({"color":"white"});
//     }
//     if($(this).scrollTop() > c)
//     {
//       $('.navbar-wagon-item').css({"color":"black"});
//     } else {
//       $('.navbar-wagon-item').css({"color":"white"});
//     }
// });





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



