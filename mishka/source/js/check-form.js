/*
 *	page form.html
 *	behavior and check form
 */
var formApplication	= document.querySelector('.form-application');


if (formApplication) {

	formApplication.addEventListener("submit", function(e) {
		e.preventDefault();

		var formApplicationName = document.getElementById('customer-name');
		var formApplicationSurname = document.getElementById('customer-surname');
		var formApplicationPhone = document.getElementById('customer-tel');
		var formApplicationEmail = document.getElementById('customer-email');

		var numberOfChecks = 4;
		var check = 0;

		// check customer-name field
		if ( checkName('customer-name') ) {
			formApplicationName.classList.remove('form-application__field--error');
			check++;
		} else {
			formApplicationName.classList.add('form-application__field--error');
		}

		// check customer-surname field
		if ( checkName('customer-surname') ) {
			formApplicationSurname.classList.remove('form-application__field--error');
			check++;
		} else {
			formApplicationSurname.classList.add('form-application__field--error');
		}

		// check customer phone field
		if ( checkPhone('customer-tel') ) {
			formApplicationPhone.classList.remove('form-application__field--error');
			check++;
		} else {
			formApplicationPhone.classList.add('form-application__field--error');
		}

		// check customer email field
		if ( checkEmail('customer-email') ) {
			formApplicationEmail.classList.remove('form-application__field--error');
			check++;
		} else {
			formApplicationEmail.classList.add('form-application__field--error');
		}

		// comparison of the number of checks with correctly filled fields
		if ( check === numberOfChecks) {
			//clear form fields
			resetForm(formApplication);
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

function resetForm(form) {
	// clearing inputs
	var inputs = form.getElementsByTagName('input');

	for (var i = 0; i<inputs.length; i++) {
		switch (inputs[i].type) {
			// case 'hidden':
			case 'text':
			case 'email':
			case 'tel':
				inputs[i].value = '';
				break;
			case 'radio':
			case 'checkbox':
				inputs[i].checked = false;
		}
	}

	// clearing selects
	var selects = form.getElementsByTagName('select');

	for (var i = 0; i<selects.length; i++) {
		selects[i].selectedIndex = 0;
	}

	// clearing textarea
	var text = form.getElementsByTagName('textarea');

	for (var i = 0; i<text.length; i++) {
		text[i].value = '';
	}

	return false;
}