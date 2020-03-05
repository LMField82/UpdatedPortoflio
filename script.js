$(document).ready(function(){
 
  $(".dropdown-trigger").dropdown();
  $('#demo-carousel-auto').carousel();

setInterval(function() {

  $('#demo-carousel-auto').carousel('next');

}, 5000);   

$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: false
});

$('#carousel-next').on('touchstart', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('#carouselFirst').carousel('next');
});

$('#carousel-prev').on('touchstart', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('#carouselFirst').carousel('prev');
});


}); 

 
