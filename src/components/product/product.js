import Swiper from 'swiper/bundle';
import {Form} from '../form/form';

const product = document.querySelectorAll('.product');
const editProduct = document.querySelector('[data-form-edit]');
const sendData = new Form('POST');

const count = () => {
	const item = document.querySelector('.product__count');
	const input = item.querySelector('input');

	item.querySelector('.product__count-plus').addEventListener('click', (evt) => {
		evt.preventDefault();
		input.value++;
	});

	item.querySelector('.product__count-minus').addEventListener('click', (evt) => {
		evt.preventDefault();
		input.value--;
	});
};

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

	count();

	sendData.init('/catalog_product/catalog_product_edit_product/', editProduct);
};

export default {
	init,
};
