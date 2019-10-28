function switchContainer() {
    if ($(window).width() < 992) {
        $(".switch-container").removeClass("container");
        $(".switch-container").addClass("container-fluid");
        $("#story").css("background", "../img/fonndd768.jpg");
    } else {
        $(".switch-container").addClass("container");
        $(".switch-container").removeClass("container-fluid");
        $("#story").css("background", "../img/fonndd.jpg");
    };
    if ($(window).width () < 768) {
        $("#story").css("background", "url('./asset/img/fonndd1024.jpg') no-repeat top right / cover");
        $("#story").css("background-attachment", "fixed");
    } else {
        $("#story").css("background", "url('./asset/img/fonndd.jpg') no-repeat top right / cover");
        $("#story").css("background-attachment", "fixed");
    }
    if ($(window).width () < 576) {
        $("#story").css("background-position-x", "-800px");
        $("#story").css("background-attachment", "fixed");
    } else {
        $("#story").css("background", "url('./asset/img/fonndd.jpg') no-repeat top right / cover");
        $("#story").css("background-attachment", "fixed");
    }
}; 

switchContainer();

$(window).resize(function() {
  switchContainer();
});
