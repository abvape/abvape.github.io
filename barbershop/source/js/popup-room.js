var loginLink = document.querySelector('.user-list__login');
var roomOverlay = document.querySelector('.popup-room .modal-overlay');
var popupRoom = document.querySelector('.popup-room');
var popupClose = document.querySelector('.popup-room__button--close');
var popupForm = document.querySelector('.popup-room__form');
var popupLogin = document.querySelector('[name=login]');
var popupPassword = document.querySelector('[name=password]');

// open popup modal window
loginLink.addEventListener("click", function(e) {
	e.preventDefault();
	popupRoom.classList.add('modal-show');
	roomOverlay.classList.add('modal-overlay--active');
	popupLogin.focus();
});

// close popup modal window (click button "close")
popupClose.addEventListener("click", function(e) {
	e.preventDefault();
	popupRoom.classList.remove('modal-show');
	roomOverlay.classList.remove('modal-overlay--active');
});

// form submission processing
popupForm.addEventListener("submit", function(e) {
	if (!popupLogin.value || !popupPassword.value) {
		e.preventDefault();
		popupRoom.classList.add('modal-error');
		setTimeout( () => popupRoom.classList.remove('modal-error'), 700);
	}
});

// close popup modal window (overlay click)
roomOverlay.addEventListener("click", function(e) {
	e.preventDefault();
	popupRoom.classList.remove('modal-show');
	roomOverlay.classList.remove('modal-overlay--active');
});

// keyboard support
window.addEventListener("keydown", function(e) {
	if (e.keyCode === 27) {
		e.preventDefault();
		if (popupRoom.classList.contains('modal-show')) {
			popupRoom.classList.remove('modal-show');
			roomOverlay.classList.remove('modal-overlay--active');
		}
	}
});