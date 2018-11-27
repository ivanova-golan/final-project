$(function(){
   //  $('#slider_home').owlCarousel({
	  //   stopOnHover : true,
	  //   loop: true,
	  //   items: 1,
	  //   autoplay:true,
	  //   autoplayTimeout:8000,
	  //   autoplayHoverPause:true,
	  //   stopAutoOnClick:true,
	  //   nav:true,
	  //   dots: true,
	  // });
	  var produxtsSlider = $('#slider_home').bxSlider({
		responsive: true,
		minSlides: 1,
		maxSlides: 1,
		slideMargin: 20,
		auto: true,
		autoHover: true,
		speed: 800,
		pager: true,
		controls: true,
	});


});



function ShowPoPup(target, number){
  window.event.preventDefault();
  console.log(target);
  $(".darken").fadeIn();
  // $(target).fadeIn();
  $(target).addClass('active');
}
function HidePopup(target){
  // $(target).fadeOut(300);  
  $(".darken").fadeOut(300); 
  $(target).removeClass('active');
}