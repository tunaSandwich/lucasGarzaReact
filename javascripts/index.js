//Selectors for Nav
$("#Lucas").addClass("selected");

$("#Lucas").click(function(){
  $("#Projects").removeClass("selected");
  $("#Resume").removeClass("selected");
  $("#Contact").removeClass("selected");
  $(this).addClass("selected");
});

$("#Projects").click(function(){
  $("#Lucas").removeClass("selected");
  $("#Resume").removeClass("selected");
  $("#Contact").removeClass("selected");
  $(this).addClass("selected");
});

$("#Resume").click(function(){
  $("#Lucas").removeClass("selected");
  $("#Projects").removeClass("selected");
  $("#Contact").removeClass("selected");
  $(this).addClass("selected");
});

$("#Contact").click(function(){
  $("#Lucas").removeClass("selected");
  $("#Projects").removeClass("selected");
  $("#Resume").removeClass("selected");
  $(this).addClass("selected");
});
