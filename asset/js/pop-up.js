$(document).ready(function(){

  $("#pop-up").hide(6000,function(){
    $("#pop-up").removeClass("d-none");
    $("#pop-up").fadeIn(6000);
  });

  $("#close-pop").on('click', function(){
      $("#pop-up").remove();
  });

});
