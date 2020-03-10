/*
 *	page form.html
 *	behavior and check form
 */
var formApplication	= document.querySelector('.form-application');


if (formApplication) {

	formApplication.addEventListener("submit", function(e) {
		e.preventDefault();

		var formApplicationCatName = document.getElementById('cat-name');
		var formApplicationCatWeight = document.getElementById('cat-weight');
		var formApplicationEmail = document.getElementById('owner-email');
		var formApplicationPhone = document.getElementById('owner-tel');

		var formApplicationCatAge = document.getElementById('cat-age');
		var formApplicationMessage = document.getElementById('message');

		var numberOfChecks = 4;
		var check = 0;

		// check cat-name field
		if ( checkName('cat-name') ) {
			formApplicationCatName.classList.remove('form-application__field--error');
			check++;
		} else {
			formApplicationCatName.classList.add('form-application__field--error');
		}

		// check cat-weight field
		if ( checkWeight('cat-weight') ) {
			formApplicationCatWeight.classList.remove('form-application__field--error');
			check++;
		} else {
			formApplicationCatWeight.classList.add('form-application__field--error');
		}

		// check owner phone field
		if ( checkPhone('owner-tel') ) {
			formApplicationPhone.classList.remove('form-application__field--error');
			check++;
		} else {
			formApplicationPhone.classList.add('form-application__field--error');
		}

		// check owner email field
		if ( checkEmail('owner-email') ) {
			formApplicationEmail.classList.remove('form-application__field--error');
			check++;
		} else {
			formApplicationEmail.classList.add('form-application__field--error');
		}

		// comparison of the number of checks with correctly filled fields
		if ( check === numberOfChecks) {
			//clear form fields
			formApplicationCatName.value = "";
			formApplicationCatWeight.value = "";
			formApplicationEmail.value = "";
			formApplicationPhone.value = "";
			formApplicationCatAge.value = "";
			formApplicationMessage.value = "";
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

/*
 * check cat weight
 * id - string, id of field to check
 */
function checkWeight(id) {
	var weight = document.getElementById(id).value;
	if (!weight) {
		return false;
	}
	var rv_weight = /^[0-9]{1,2}$/;
	if(weight != '' && rv_weight.test(weight)) {
		return true;
	} else {
		return false;
	}
}