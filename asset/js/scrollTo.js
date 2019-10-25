$(document).ready(function() {
  $('.js-scrollTo').on('click', function() { // Au clic sur un élément
    var page = $(this).attr('href'); // Page cible
    var speed = 750; // Durée de l'animation (en ms)
    $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
    return false;
  });
});


$(window).on('scroll', function(){
  if ($(document.documentElement).scrollTop() > 450) {
    $("#navigation").css("background-color", "#333333");
  }else{
    $("#navigation").css("background-color", "rgba(0, 0, 0, 0.5)");
  }
});
