// Left nav bar
$(".openNav").click(function (e) {
  $("#homeContent").animate({ marginLeft: "250px" }, 50);
  $("#sideBar").animate({ width: "250px" }, 50);
});

$(".closebtn").click(function (e) {
  $("#homeContent").animate({ marginLeft: "0" }, 50);
  $("#sideBar").animate({ width: "0" }, 50);
});

// Slider

$("#sliderDown .toggle").click(function (e) {
  $(this).next().slideToggle(500);
  $(".inner").not($(this).next()).slideUp(500);
});

// counter
function makeTimer() {
  //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");
  var endTime = new Date("29 April 2050 9:56:00 GMT+01:00");
  endTime = Date.parse(endTime) / 1000;

  var now = new Date();
  now = Date.parse(now) / 1000;

  var timeLeft = endTime - now;

  var days = Math.floor(timeLeft / 86400);
  var hours = Math.floor((timeLeft - days * 86400) / 3600);
  var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
  var seconds = Math.floor(
    timeLeft - days * 86400 - hours * 3600 - minutes * 60
  );

  if (hours < "10") {
    hours = "0" + hours;
  }
  if (minutes < "10") {
    minutes = "0" + minutes;
  }
  if (seconds < "10") {
    seconds = "0" + seconds;
  }

  $(".days").html(days + "<span> D</span>");
  $(".hours").html(hours + "<span> H</span>");
  $(".minutes").html(minutes + "<span> M</span>");
  $(".seconds").html(seconds + "<span>S</span>");
}

setInterval(function () {
  makeTimer();
}, 1000);

// Text Counter

let maxLength = 100;
$("textarea").keyup(function (e) {
  let length = $(this).val().length;
  let remaining = maxLength - length;
  if (remaining <= 0) {
    $("#chars").text("You used all you Characters");
  } else {
    $("#chars").text(remaining);
  }
});
