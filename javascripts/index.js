// $( "td " ).find( "img" ).hover(
//   function(){
//     var iconImg = $( this ); //save icon Img to replace it with text later
//     var iconAltText = this.title; // Get Title of icon
//
//     $( this ).fadeOut( 500 , function(){
//       iconImg.data('iconHTML', iconImg.text());
//       iconImg.replaceWith("<h4>" + iconAltText + "</h4>");//TODO because dealing with image, we cannot add text... need to create a
//     });
//
// }, function(){
//   //fade icon back in
//   var iconTitle = $( this ); //save icon title to replace it with text later
//   iconTitle.text(iconTitle.data('iconHTML'));
// });

//Selectors for Nav
$("#Lucas").addClass("selected");

$("#Lucas").click(function(){
  $("#Projects").removeClass("selected");
  $("#Resume").removeClass("selected");
  $(this).addClass("selected");
});

$("#Projects").click(function(){
  $("#Lucas").removeClass("selected");
  $("#Resume").removeClass("selected");
  $(this).addClass("selected");
});

$("#Resume").click(function(){
  $("#Lucas").removeClass("selected");
  $("#Projects").removeClass("selected");
  $(this).addClass("selected");
});
