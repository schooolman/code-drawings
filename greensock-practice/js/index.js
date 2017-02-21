$( document ).ready(function() {
  
  var upDown = false;
  
  $('.button').click(function(){
    if(upDown === false){
    TweenMax.staggerTo('.div', 1, {y: 150, backgroundColor: "blue", borderRadius:"50%", color:"white"}, 0.25);
    upDown = true;
    } else {
      TweenMax.staggerTo('.div', 1, {y: 0, backgroundColor:"green", borderRadius:"0%", color:"green"}, 0.25);
      upDown = false;
    }
  })
  
  
});