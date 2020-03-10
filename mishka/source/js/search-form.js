var searchBlock = document.querySelector('.user-list__item--search');
var searchForm = document.querySelector('.search-form');
var searchField = document.querySelector('.search-form__field');
var searchToggleOn = document.querySelector('.user-list__link--search');

// open search block
searchToggleOn.addEventListener('click', function(e) {
	e.preventDefault();
	searchBlock.classList.remove('user-list__item--search-closed');
	searchBlock.classList.add('user-list__item--search-opened');
	searchField.focus();
});

// close search block (click on document (not search form))
document.addEventListener('click', function (e) {
	var target = e.target;
	var its_menu = target == searchForm || searchForm.contains(target);
	var its_hamburger = target == searchToggleOn;
	var menu_is_active = searchBlock.classList.contains('user-list__item--search-opened');

	if (!its_menu && !its_hamburger && menu_is_active) {
		searchBlock.classList.remove('user-list__item--search-opened');
		searchBlock.classList.add('user-list__item--search-closed');
		searchField.value = "";
	}
});

// keyboard support
window.addEventListener("keydown", function(e) {
	if (e.keyCode === 27) {
		e.preventDefault();
		if (searchBlock.classList.contains('user-list__item--search-opened')) {
			searchBlock.classList.remove('user-list__item--search-opened');
			searchBlock.classList.add('user-list__item--search-closed');
			searchField.value = "";
		}
	}
});