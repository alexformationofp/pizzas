function switchContainer() {
  if ($(window).width() < 992) {
    $(".switch-container").removeClass("container");
    $(".switch-container").addClass("container-fluid");
    $("#story").css("background", "../img/fonndd768.jpg");
  }else {
    $(".switch-container").addClass("container");
    $(".switch-container").removeClass("container-fluid");
    $("#story").css("background", "../img/fonndd.jpg");
  };
  if ($(window).width() < 768) {
    console.log($(window).width());
    $("#story").css("background", "url('./asset/img/fonndd1024.jpg') no-repeat top right / cover");
  }else {
    $("#story").css("background", "url('./asset/img/fonndd.jpg') no-repeat top right / cover");
  };
  if ($(window).width() < 576) {
    $("#story").css("background-position-x", "-800px");
  }else {
    $("#story").css("background", "url('./asset/img/fonndd.jpg') no-repeat top right / cover");
  };
};

function img_switch(){
  let switch_img = $(".switch-atr");
  if ($(window).width() < 576) {
    console.log('mobile');
    $(switch_img[0]).attr('src', './asset/img/four1-mob.jpg');
    $(switch_img[1]).attr('src', './asset/img/four-mob.jpg');
    $(switch_img[2]).attr('src', './asset/img/camion-mob.jpg');
  }else if ($(window).width() < 992){
    console.log('tablet');
    $(switch_img[0]).attr('src', './asset/img/four1-tab.jpg');
    $(switch_img[1]).attr('src', './asset/img/four-tab.jpg');
    $(switch_img[2]).attr('src', './asset/img/camion-tab.jpg');
  }else{
    console.log('desktop');
    $(switch_img[0]).attr('src', './asset/img/four1.jpg');
    $(switch_img[1]).attr('src', './asset/img/four.jpg');
    $(switch_img[2]).attr('src', './asset/img/camion.jpg');
  };
};

switchContainer();
img_switch();
$(window).resize(function() {
  switchContainer();
  img_switch();
});
