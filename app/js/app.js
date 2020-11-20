document.addEventListener("DOMContentLoaded", function() {

	var slider = document.querySelector('.my-slider');

	slider = tns({
		container: '.my-slider',
		items: 1,
		slideBy: 'page',
		autoplay: true,
		autoplayTimeout: 8000,
		speed: 1000,
		controls: false,
		nav: false,
		mouseDrag: true
	});

	$('#my-menu').mmenu({
		"extensions": [
			"pagedim-black"
	 ],
	 "navbar": {
		 "title": 'Меню'
		}
	});

});
