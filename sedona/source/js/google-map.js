var contactsMap = document.querySelector('.invite__map');

if (contactsMap) {

	contactsMap.classList.remove('invite__map--nojs');

	var map;

	function initMap() {
		var location = {lat: 34.862554, lng: -111.780606};

		var map = new google.maps.Map(
			document.querySelector('.invite__map-map'), {zoom: 7, center: location}
		);

		var marker = new google.maps.Marker({
			position: {lat: 34.862554, lng: -111.780606},
			map: map,
			icon: {
				url: "./img/map-marker.svg",
				scaledSize: new google.maps.Size(27, 27)
			}
		});
	}

	initMap();

}