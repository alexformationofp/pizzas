$(document).ready(function(){

  $(".burger").on("click", function() {

    function isEmpty(el){
      return !$.trim(el.html());
    };

    var empt_brg = isEmpty($("#burger-menu"));

    if (empt_brg) {
      $("#navigation-mobile").css('background', 'rgba(0, 0, 0, 0.85)');
      $("#logo-m").removeClass("d-none");
      $('#logo-pos').removeClass("flexyend");
      $('#logo-pos').addClass("flexytween");
      $("#menu-mobile").animate({
        height: '100vh'
      },function(){
        $("#burger-menu").append('<ul id="burger-rm"><li><a class="navbar-style js-scrollTo click-back" href="#pizza">Nos pizzas</a></li><li><a class="navbar-style js-scrollTo click-back" href="#story">Nos valeurs</a></li><li><a class="navbar-style js-scrollTo click-back" href="#location">Nos restaurants</a></li>');
        $(".burger").toggleClass("b-active");
        $(".click-back").on('click',function(){
          $('#logo-pos').removeClass("flexytween");
          $("#logo-m").addClass("d-none");
          $('#logo-pos').addClass("flexyend");
          $("#burger-rm").fadeIn(1000,function(){
            $("#burger-rm").remove();
            $("#menu-mobile").animate({
              height: '0px'
            },function(){
              $("#navigation-mobile").css('background', 'none');
              $(".burger").toggleClass("b-active");
            });
          });
        });
      });
    }else{
      $('#logo-pos').removeClass("flexytween");
      $("#logo-m").addClass("d-none");
      $('#logo-pos').addClass("flexyend");
      $("#burger-rm").fadeIn(1000,function(){
        $("#burger-rm").remove();
        $("#menu-mobile").animate({
          height: '0px'
        },function(){
          $("#navigation-mobile").css('background', 'none');
          $(".burger").toggleClass("b-active");
        });
      });
    };

  });

});
