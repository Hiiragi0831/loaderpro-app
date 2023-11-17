import Swiper from 'swiper/bundle';

const product = document.querySelectorAll('.product');

const init = () => {
	if (!product.length) {
		return;
	}

	let galleryThumb = new Swiper('.product__gallery-thumb .swiper', {
		slidesPerView: 4,
		freeMode: true,
		watchSlidesProgress: true,
	});

	let galleryMain = new Swiper('.product__gallery-main .swiper', {
		spaceBetween: 15,
		init: false,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumb,
		},
	});

	galleryMain.init();
};

export default {
	init,
};
