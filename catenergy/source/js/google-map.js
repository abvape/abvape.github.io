var contactsMap = document.querySelector('.page-footer__map');

if (contactsMap) {

	contactsMap.classList.remove('page-footer__map--nojs');

	var map,
		mapLocation,
		mapZoom,
		iconPath,
		iconWidth,
		iconHeight;

	var width = window.innerWidth;

	function initMap(width) {

		if (width < 768) {
			mapLocation = {lat: 59.939032, lng: 30.323229};
			iconPath = "./img/map-pin.png";
			iconWidth = 62;
			iconHeight = 53;
			mapZoom = 17;
		} else if (width >= 768 && width < 1440) {
			mapLocation = {lat: 59.938932, lng: 30.323229};
			iconPath = "./img/map-pin-tablet.png";
			iconWidth = 124;
			iconHeight = 106;
			mapZoom = 18;
		} else {
			mapLocation = {lat: 59.939132, lng: 30.319229};
			iconPath = "./img/map-pin-tablet.png";
			iconWidth = 124;
			iconHeight = 106;
			mapZoom = 17;
		}

		var location = mapLocation;

		var map = new google.maps.Map(
			document.querySelector('.page-footer__map-map'), {
				zoom: mapZoom,
				center: location
			}
		);

		var marker = new google.maps.Marker({
			position: {lat: 59.938832, lng: 30.323229},
			map: map,
			icon: {
				url: iconPath,
				scaledSize: new google.maps.Size(iconWidth, iconHeight)
			}
		});
	}

	initMap(width);

	window.addEventListener("resize", function(){
		let width = window.innerWidth;
		initMap(width);
	});

}



