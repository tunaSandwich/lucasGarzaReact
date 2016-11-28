//Selectors for Nav
$("#Lucas").addClass("selected");
$("#background").css("background-color", "black");

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
  $("#background").css("background-color", "rgba(230, 48, 0, 0.74)");
});

$("#Resume").click(function(){
  $("#background").css("background-color", "");
  $("#Lucas").removeClass("selected");
  $("#Projects").removeClass("selected");
  $("#background").css("background-color", "rgb(38, 38, 38)");
  $(this).addClass("selected");
});
