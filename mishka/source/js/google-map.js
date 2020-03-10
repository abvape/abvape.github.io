var contactsMap = document.querySelector('.contacts__map');

if (contactsMap) {

	contactsMap.classList.remove('contacts__map--nojs');

	var map;

	function initMap() {
		var location = {lat: 59.939032, lng: 30.323229};

		var map = new google.maps.Map(
			document.querySelector('.contacts__map-map'), {zoom: 17, center: location}
		);

		var marker = new google.maps.Marker({
			position: {lat: 59.938832, lng: 30.323129},
			map: map,
			icon: {
				url: "./img/map-pin.svg",
				scaledSize: new google.maps.Size(67, 100)
			}
		});
	}

	initMap();

}



