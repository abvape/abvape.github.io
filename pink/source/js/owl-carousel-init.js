$(document).ready(function(){

// advantages slider (tablet)
$(".advantages__slider.owl-carousel").owlCarousel({
	responsiveClass:true,
	responsive:{
		0:{
			items:1,
			autoplay: true,
			autoHeight: true,
			nav:false,
			loop:true,
			navText : ["",""],
			dots:false,
			dotData:true
		}
	}
});

// reviews slider
$(".reviews__slider.owl-carousel").owlCarousel({
	responsiveClass:true,
	responsive:{
		0:{
			items:1,
			autoplay: true,
			autoHeight: true,
			nav:false,
			loop:true,
			navText : ["",""],
			dots:true,
			dotData:true
		},
		1200:{
			items:1,
			autoplay: true,
			autoHeight: true,
			nav:true,
			loop:true,
			navText : ["",""],
			dots:false,
			dotData:true
		}
	}
});

// package slider
$(".package__slider.owl-carousel").owlCarousel({
	responsiveClass:true,
	responsive:{
		0:{
			items:1,
			autoplay: true,
			autoHeight: true,
			nav:false,
			loop:true,
			navText : ["",""],
			dots:true,
			dotData:true
		}
	}
});

});