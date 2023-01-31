// class mini on scroll ==================
$(document).ready(function() {
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
  
      if (scroll >= 300) {
        $(".header__body").addClass("_mini");
        $(".header").addClass("_mini");
      } else {
        $(".header__body").removeClass("_mini");
        $(".header").removeClass("_mini");
      }
    });
  });
// header burger =========================
$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});


//  animation .head ==========================================
$(window).scroll(function(){
  var windowWidth = $(this).width();
  var windowHeight = $(this).height();
  var windowScrollTop = $(this).scrollTop();
  if(windowScrollTop>100){
    $('.showright').css('animation','showright 0.8s ease normal 0s both');
    $('.showright').css('display','block');
  }else{
    // $('.showright').css('display','none');
  }
});

$(window).scroll(function(){
  var windowWidth = $(this).width();
  var windowHeight = $(this).height();
  var windowScrollTop = $(this).scrollTop();
  if(windowScrollTop>1000){
    $('.showleft').css('animation','showleft 0.8s ease normal 0.3s both');
    $('.showleft').css('display','block');
  }else{
    // $('.showleft').css('display','none');
  }
});