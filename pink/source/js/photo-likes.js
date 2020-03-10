var photoLikeButtons = document.querySelectorAll('.photo__like');

if (photoLikeButtons) {

	// browser check (if ie)
	var ua = window.navigator.userAgent;
	var isIE = /MSIE|Trident/.test(ua);

	if (!isIE) {
		for (let button of photoLikeButtons) {
			button.addEventListener("click", function(e) {
				e.preventDefault();
				button.classList.toggle('photo__like--like');
			});
		}
	}

}