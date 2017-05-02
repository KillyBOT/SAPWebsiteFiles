$(document).ready(function(){
  $('div').fadeIn("slow");
  $(".MenuCard").hover(function(){
    $(this).animate({
      padding-top:'+=10px',
      padding-bottom:'+=10px'
      //height:'+=50px'
    });
    $(this).toggleClass('onHover');
  },function(){
    $(this).animate({
      padding-top:'-=10px',
      padding-bottom: '10px'
      //height:'-=50px'
    });
    $(this).toggleClass('onHover');
  });
});
