document.addEventListener("DOMContentLoaded", function() {

	// var slider = document.querySelector('.my-slider');

	// slider = tns({
	// 	container: '.my-slider',
	// 	items: 1,
	// 	slideBy: 'page',
	// 	autoplay: true,
	// 	autoplayTimeout: 8000,
	// 	speed: 1000,
	// 	controls: false,
	// 	nav: false,
	// 	mouseDrag: true
	// });

	var productImg = document.querySelector('.product_main_img');

	productImg = tns({
		container: '.product_main_img',
		navContainer: '.product_thumb_img',
		loop: true,
		items: 1,
		navAsThumbnails: true,
		mouseDrag: true,
		controls: false
	});

	var productTmb = document.querySelector('.product_thumb_img');

	productTmb = tns({
		container: '.product_thumb_img',
		nav: false,
		controls: false,
		rewind: true,
		autoWidth: true
	});

	$('#my-menu').css("display","block")
	$('#my-menu').mmenu({
		"extensions": [
			"pagedim-black"
	 ],
	 "navbar": {
		 "title": 'Меню'
		}
	});

});
