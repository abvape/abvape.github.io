var addToCart = document.querySelectorAll('.add-to-cart');
var popupForm = document.querySelector('.popup-cart__form');

if (addToCart && popupForm) {

	var cartOverlay = document.querySelector('.popup-cart .modal-overlay');
	var popupCart = document.querySelector('.popup-cart');

	for (let item of addToCart) {
		// open popup modal window
		item.addEventListener("click", function(e) {
			e.preventDefault();
			popupCart.classList.add('modal-show');
			cartOverlay.classList.add('modal-overlay--active');
		});
	}

	// form submission processing
	popupForm.addEventListener("submit", function(e) {
		e.preventDefault();
		popupCart.classList.remove('modal-show');
		cartOverlay.classList.remove('modal-overlay--active');
	});

	// close popup modal window
	cartOverlay.addEventListener("click", function(e) {
		e.preventDefault();
		popupCart.classList.remove('modal-show');
		cartOverlay.classList.remove('modal-overlay--active');
	});

	// keyboard support
	window.addEventListener("keydown", function(e) {
		if (e.keyCode === 27) {
			e.preventDefault();
			if (popupCart.classList.contains('modal-show')) {
				popupCart.classList.remove('modal-show');
				cartOverlay.classList.remove('modal-overlay--active');
			}
		}
	});
}

