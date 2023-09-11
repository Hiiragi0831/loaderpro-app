import Swiper from 'swiper';

const init = () => {
	// eslint-disable-next-line
	const sliderBrands = new Swiper('.home__brands .swiper', {
		slidesPerView: 8,
	});
};

export default {
	init,
};
