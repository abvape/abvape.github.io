var imageComparison = document.querySelector('.image-comparison');

if (imageComparison) {
	var scaleIndicator = document.querySelector('.image-comparison__scale-indicator');
	var input = document.querySelector('.image-comparison__range-input');
	var scaleButtonBefore = document.querySelector('.image-comparison__range-button--before');
	var scaleButtonAfter = document.querySelector('.image-comparison__range-button--after');
	var scalePoint = document.querySelector('.image-comparison__scale-point');

	if (imageComparison.offsetWidth <= 609) {
		scaleButtonBefore.addEventListener("click", function(e) {
			e.preventDefault();
			scaleIndicator.style.width = '0';
			input.value = '0';
			imageComparsion(100);
		});

		scaleButtonAfter.addEventListener("click", function(e) {
			e.preventDefault();
			scaleIndicator.style.width = '100%';
			input.value = '100';
			imageComparsion(0);
		});
	} else {
		scaleButtonBefore.addEventListener("click", function(e) {
			e.preventDefault();
			scalePoint.style.left = '-17px'
			scaleIndicator.style.width = '100%';
			input.value = '0';
			imageComparsion(100);
		});

		scaleButtonAfter.addEventListener("click", function(e) {
			e.preventDefault();
			scalePoint.style.left = '411px'
			scaleIndicator.style.width = '100%';
			input.value = '100';
			imageComparsion(0);
		});
	}

	input.oninput = function() {
		let inputValue = input.value;
		imageComparsion(inputValue);
		let scale = document.querySelector('.image-comparison__scale');
		if (imageComparison.offsetWidth <= 609) {
			inputValue = ((scale.offsetWidth - 14) / 100 * inputValue) + 2;
			scaleIndicator.style.width = inputValue + 'px';
		} else {
			let scaleLeft = (scale.offsetWidth / 100 * inputValue) - 17;
			scalePoint.style.left = scaleLeft + 'px';
		}
	};

	window.onresize = function() {
		var w_width = window.innerWidth
			|| document.documentElement.clientWidth
			|| document.body.clientWidth;
		if ( w_width < 768 ) {
			imageComparsion(50);
			input.value = '50';
			scaleIndicator.style.width = '50px';

			scaleButtonBefore.addEventListener("click", function(e) {
				e.preventDefault();
				scaleIndicator.style.width = '0';
				input.value = '0';
				imageComparsion(100);
			});

			scaleButtonAfter.addEventListener("click", function(e) {
				e.preventDefault();
				scaleIndicator.style.width = '100%';
				input.value = '100';
				imageComparsion(0);
			});

		} else if ( w_width >= 768 && w_width < 1440) {
			imageComparsion(50);
			input.value = '50';
			scalePoint.style.left = '197px'
			scaleIndicator.style.width = '428px';

			scaleButtonBefore.addEventListener("click", function(e) {
				e.preventDefault();
				scalePoint.style.left = '-17px'
				scaleIndicator.style.width = '100%';
				input.value = '0';
				imageComparsion(100);
			});

			scaleButtonAfter.addEventListener("click", function(e) {
				e.preventDefault();
				scalePoint.style.left = '411px'
				scaleIndicator.style.width = '100%';
				input.value = '100';
				imageComparsion(0);
			});

		} else {
			imageComparsion(53);
			input.value = '53';
			scalePoint.style.left = '209px'

			scaleButtonBefore.addEventListener("click", function(e) {
				e.preventDefault();
				scalePoint.style.left = '-17px'
				scaleIndicator.style.width = '100%';
				input.value = '0';
				imageComparsion(100);
			});

			scaleButtonAfter.addEventListener("click", function(e) {
				e.preventDefault();
				scalePoint.style.left = '411px'
				scaleIndicator.style.width = '100%';
				input.value = '100';
				imageComparsion(0);
			});
		}
	}

	function imageComparsion(rate) {
		// блок обёртка для картинок
		let element = document.querySelector('.image-comparison__wrapper');
		let layer = element.querySelector('.compare');
		let width = element.offsetWidth / 100 * rate;
		let height = parseInt(getComputedStyle(layer).height);
		layer.style.clip = `rect(0px ${width}px ${height}px 0px)`;
	}
}