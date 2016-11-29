//Selectors for Nav
$("#Lucas").addClass("selected");
$('body').css("background-color", "black");

$("#Lucas").click(function(){
  $("#background").css("background-color", "");
  $("#Projects").removeClass("selected");
  $("#Resume").removeClass("selected");
  $(this).addClass("selected");
  $("#background").css("background-color", "black");
});

$("#Projects").click(function(){
  $("#background").css("background-color", "");
  $("#Lucas").removeClass("selected");
  $("#Resume").removeClass("selected");
  $(this).addClass("selected");
  $("#background").css("background-color", "black");
});

$("#Resume").click(function(){
  $("#background").css("background-color", "");
  $("#Lucas").removeClass("selected");
  $("#Projects").removeClass("selected");
  $("#background").css("background-color", "black");
  $(this).addClass("selected");
});
