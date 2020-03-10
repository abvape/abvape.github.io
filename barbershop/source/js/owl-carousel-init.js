$(document).ready(function(){

// find element
var $advantagesOwl = $('.advantages__list.owl-carousel');

// set the owl-carousel options advantages slider
var advantages_carousel_settings = {
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
};

function initOwl(){
	var width = $(window).outerWidth();
	if(width <= 767) {
		// initialize owl-carousel if window screensize is less the 767px
		$advantagesOwl.addClass('owl-carousel').owlCarousel( advantages_carousel_settings );
	} else {
		// destroy owl-carousel and remove all depending classes if window screensize is bigger then 767px
		$advantagesOwl.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
		$advantagesOwl.find('.owl-stage-outer').children().unwrap();
	}
}

// initilize after window resize
var id;
$(window).resize( function() {
	clearTimeout(id);
	id = setTimeout(initOwl, 500);
});

// initilize onload
initOwl();

// reviews slider
$(".reviews__list.owl-carousel").owlCarousel({
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
		768:{
			items:1,
			autoplay: true,
			autoHeight: true,
			nav:true,
			loop:true,
			navText : ["",""],
			dots:true,
			dotData:true
		},
	}
});

});