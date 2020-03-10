var inputFill = document.getElementById('slider-fill');

if (inputFill) {

	var inputCrop = document.getElementById('slider-crop');
	var inputContrast = document.getElementById('slider-contrast');
	var image = document.querySelector('.add-photo__image');

	inputCrop.oninput = function() {
		let crop = inputCrop.value;

		imageCrop(image, crop);
	};

	inputFill.oninput = function() {
		let brightness = inputFill.value;
		let contrast = inputContrast.value;

		imageEffect(image, brightness, contrast);
	};

	inputContrast.oninput = function() {
		let brightness = inputFill.value;
		let contrast = inputContrast.value;

		imageEffect(image, brightness, contrast);
	};

	function imageEffect(image, brightness, contrast) {
		image.style.filter = 'contrast(' + contrast * 2 + '%) brightness(' + brightness * 2 + '%)';
	}

	function imageCrop(image, crop) {
		let imageWidth = image.offsetWidth;
		let imageHeight = image.offsetHeight;

		let stepWidth = imageWidth / 100 / 2;
		let stepHeight = imageHeight / 100 / 2;

		let cropTop =  stepHeight * crop;
		let cropBottom = imageHeight - cropTop;
		let cropLeft = stepWidth * crop;
		let cropRight = imageWidth - cropLeft;

		image.style.clip = 'rect(' + cropTop + 'px, ' + cropRight + 'px, ' + cropBottom + 'px, ' + cropLeft + 'px)';
	}

}
