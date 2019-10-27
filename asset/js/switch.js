function switchContainer() {
    if ($(window).width() < 992) {
        $(".switch-container").removeClass("container");
        $(".switch-container").addClass("container-fluid");
    } else {
        $(".switch-container").addClass("container");
        $(".switch-container").removeClass("container-fluid");
    }
};

switchContainer();

$(window).resize(function() {
  switchContainer();
});
