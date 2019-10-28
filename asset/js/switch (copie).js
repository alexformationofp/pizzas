function switchContainer() {
  let switch_img = $(".switch-atr");
    if ($(window).width() < 992) {
        $(".switch-container").removeClass("container");
        $(".switch-container").addClass("container-fluid");
        $("#story").css("background", "../img/fonndd768.jpg");
    }else if ($(window).width () < 768){
      $("#story").css("background", "url('./asset/img/fonndd1024.jpg') no-repeat top right / cover");
      $(switch_img[0]).attr('src', './asset/img/four1-tab.jpg');
      $(switch_img[1]).attr('src', './asset/img/four-tab.jpg');
      $(switch_img[2]).attr('src', './asset/img/camion-tab.jpg');
    }else if ($(window).width () < 576) {
      $("#story").css("background-position-x", "-800px");
      $(switch_img[0]).attr('src', './asset/img/four1-mob.jpg');
      $(switch_img[1]).attr('src', './asset/img/four-mob.jpg');
      $(switch_img[2]).attr('src', './asset/img/camion-mob.jpg');
    }else {
        $(".switch-container").addClass("container");
        $(".switch-container").removeClass("container-fluid");
        $("#story").css("background", "../img/fonndd.jpg");
        $("#story").css("background", "url('./asset/img/fonndd.jpg') no-repeat top right / cover");
        $(switch_img[0]).attr('src', './asset/img/four1.jpg');
        $(switch_img[1]).attr('src', './asset/img/four.jpg');
        $(switch_img[2]).attr('src', './asset/img/camion.jpg');
    };
};

switchContainer();
$(window).resize(function() {
  switchContainer();
});
