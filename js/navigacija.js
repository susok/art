$(document).ready(function() {    
  $('.sandwich-menu').click(function() {
    $('.nav-menu').toggleClass('open');  
    $(this).toggleClass('open');
  });

  $('.sandwich').click(function() {
    $('.nav-menu').slideToggle();
    $(this).toggleClass('open');
  });

  $(window).resize(function() {
    if ($(window).width() > 768) {
      $('.nav-menu').removeAttr('style');
    } else {
      $('.nav-menu').hide();
    }      
  });
});