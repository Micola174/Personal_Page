$("document").ready(function(){
   $("#nav li").hover(function(){
        $(this).children("ul").stop(false, true).fadeIn(500);
   }, function(){
       $(this).children("ul").stop(false, true).fadeOut(500);
   });
   $(".images").cycle({
      fx: "scrollHorz",
      speed: "slow",
      prev: ".back",
      next: ".next"
   });
});