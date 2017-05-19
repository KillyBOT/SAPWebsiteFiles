$(document).ready(function(){
  $('div').fadeIn("slow");
  $("#MenuPage ul li").hover(function(){
    $(this).animate({
      //paddingTop:'+=10px',
      //paddingBottom:'+=10px',
      paddingLeft: '+=10px',
      paddingRight: '+=10px',
      opacity: '0.5'
    });
    //$(this).toggleClass('onHover');
  },function(){
    $(this).animate({
      //paddingTop:'-=10px',
      //paddingBottom: '-=10px',
      paddingLeft: '-=10px',
      paddingRight: '-=10px',
      //color:'#000000'
      opacity: '1'
      //height:'-=50px'
    });
    //$(this).toggleClass('onHover');
  });
});
