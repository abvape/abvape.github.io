/*
 *	page form.html
 *	behavior and check form
 */
var formApplication	= document.querySelector('.form-application');

if (formApplication) {
	var sendRequestLink = document.querySelector('.form-application__button');
	var popupSuccessOverlay = document.querySelector('.popup-success .modal-overlay');
	var popupErrorOverlay = document.querySelector('.popup-error .modal-overlay');
	var popupSuccess = document.querySelector('.popup-success');
	var popupError = document.querySelector('.popup-error');
	var popupSuccessClose = document.querySelector('.popup-success__close');
	var popupErrorClose = document.querySelector('.popup-error__close');

	sendRequestLink.addEventListener("click", function(e) {
		e.preventDefault();

		var formApplicationSurname = document.getElementById('surname');
		var formApplicationName = document.getElementById('name');
		var formApplicationMiddlename = document.getElementById('middlename');
		var formApplicationEmail = document.getElementById('email');
		var formApplicationPhone = document.getElementById('tel');
		var formApplicationMessage = document.getElementById('message');
		var numberOfChecks = 4;
		var check = 0;

		// check surname field
		if ( checkName('surname') ) {
			formApplicationSurname.classList.remove('form-application__field--error');
			check++;
		} else {
			formApplicationSurname.classList.add('form-application__field--error');
		}

		// check name field
		if ( checkName('name') ) {
			formApplicationName.classList.remove('form-application__field--error');
			check++;
		} else {
			formApplicationName.classList.add('form-application__field--error');
		}

		// check phone field
		if ( checkPhone('tel') ) {
			formApplicationPhone.classList.remove('form-application__field--error');
			check++;
		} else {
			formApplicationPhone.classList.add('form-application__field--error');
		}

		// check email field
		if ( checkEmail('email') ) {
			formApplicationEmail.classList.remove('form-application__field--error');
			check++;
		} else {
			formApplicationEmail.classList.add('form-application__field--error');
		}

		// comparison of the number of checks with correctly filled fields
		if ( check === numberOfChecks) {
			popupSuccess.classList.add('modal-show');
			popupSuccessOverlay.classList.add('modal-overlay--active');

			//clear form fields
			formApplicationSurname.value = "";
			formApplicationName.value = "";
			formApplicationMiddlename.value = "";
			formApplicationEmail.value = "";
			formApplicationPhone.value = "";
			formApplicationMessage.value = "";
		} else {
			popupError.classList.add('modal-show');
			popupErrorOverlay.classList.add('modal-overlay--active');
		}
	});

	// success
	popupSuccessClose.addEventListener("click", function(e) {
		e.preventDefault();
		popupSuccess.classList.remove('modal-show');
		popupSuccessOverlay.classList.remove('modal-overlay--active');
	});

	popupSuccessOverlay.addEventListener("click", function(e) {
		e.preventDefault();
		popupSuccess.classList.remove('modal-show');
		popupSuccessOverlay.classList.remove('modal-overlay--active');
	});

	// error
	popupErrorClose.addEventListener("click", function(e) {
		e.preventDefault();
		popupError.classList.remove('modal-show');
		popupErrorOverlay.classList.remove('modal-overlay--active');
	});

	popupErrorOverlay.addEventListener("click", function(e) {
		e.preventDefault();
		popupError.classList.remove('modal-show');
		popupErrorOverlay.classList.remove('modal-overlay--active');
	});

	window.addEventListener("keydown", function(e) {
		if (e.keyCode === 27) {
			e.preventDefault();
			// success
			if (popupSuccess.classList.contains('modal-show')) {
				popupSuccess.classList.remove('modal-show');
				popupSuccessOverlay.classList.remove('modal-overlay--active');
			}
			// error
			if (popupError.classList.contains('modal-show')) {
				popupError.classList.remove('modal-show');
				popupErrorOverlay.classList.remove('modal-overlay--active');
			}
		}
	});
}

/*
 * check email adress
 * id - string, id of field to check
 */
function checkEmail(id) {
	var email = document.getElementById(id).value;
	if (!email) {
		return false;
	}
	var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
	if(email != '' && rv_email.test(email)) {
		return true;
	} else {
		return false;
	}
}

/*
 * check user name
 * id - string, id of field to check
 */
function checkName(id) {
	var name = document.getElementById(id).value;
	if (!name) {
		return false;
	}
	var rv_name = /^[a-zA-Zа-яА-Я0-9_-\s]+$/;
	if(name.length > 2 && name != '' && rv_name.test(name)) {
		return true;
	} else {
		return false;
	}
}

/*
 * check user phone
 * id - string, id of field to check
 */
function checkPhone(id) {
	var phone = document.getElementById(id).value;
	if (!phone) {
		return false;
	}
	var rv_phone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
	if(phone != '' && rv_phone.test(phone)) {
		return true;
	} else {
		return false;
	}
}