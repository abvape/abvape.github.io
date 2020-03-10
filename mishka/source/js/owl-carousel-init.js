$(document).ready(function(){

// reviews slider
$(".reviews__list.owl-carousel").owlCarousel({
	responsiveClass:true,
	responsive:{
		0:{
			items:1,
			autoplay: false,
			autoHeight: true,
			nav:true,
			loop:true,
			navText : ["",""],
			dots:false,
			dotData:true
		}
	}
});

});