$(document).ready(function () {
  $(document).mousemove(function (event) {
    var pageX = $(document).width();
    var pageY = $(document).height();

    var mouseX = event.pageX / -pageX;
    var mouseY = event.pageY;

    var xAxis = -mouseX * 50 - 50;
    var yAxis = ((pageY / 2 - mouseY) / pageY) * 50;

    $(".eye").css({
      transform: "translate(" + xAxis + "%," + -yAxis + "%)"
    });
  });

  $(window).resize(function () {
    pageX = $(document).width();
    pageY = $(document).height();
  });
});
