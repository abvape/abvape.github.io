var contactsMap = document.querySelector('.contacts__map');

if (contactsMap) {

	contactsMap.classList.remove('contacts__map--nojs');

	var map;

	function initMap() {
		var location = {lat: 59.937306, lng: 30.321201};

		var map = new google.maps.Map(
			document.querySelector('.contacts__map-map'), {zoom: 16, center: location}
		);

		var marker = new google.maps.Marker({
			position: {lat: 59.936206, lng: 30.321201},
			map: map,
			icon: {
				url: "./img/map-marker.svg",
				scaledSize: new google.maps.Size(36, 36)
			}
		});
	}

	initMap();

}



