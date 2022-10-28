"use strict";

$(document).ready(function() {

/*---------------------
Brand carousel
-----------------------*/

$('#brand').owlCarousel({
  loop: true,
  nav: false,
  responsiveClass: true,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  responsive: {
    0: {
      items: 1,
      margin: 30,
    },
    600: {
      items: 1,
      margin: 30,
    },
    1000: {
      items: 1,
      margin: 60,
    }
  }
})



/*---------------------
SLIDER
-----------------------*/
$('#slider').owlCarousel({
  loop: true,
  nav: true,
  responsiveClass: true,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  responsive: {
    0: {
      items: 1,
      margin: 30,
    },
    600: {
      items: 1,
      margin: 30,
    },
    1000: {
      items: 1,
      margin: 60,
    }
  }
})



/*------------------------------------
    2. CountUp
--------------------------------------*/  

$('.countup').counterUp({
  delay: 5,
  time: 2000
});


});