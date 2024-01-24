import Swiper from 'swiper';
import {Autoplay} from 'swiper/modules';

const init = () => {
	// eslint-disable-next-line
	const sliderBrands = new Swiper('.home__brands .swiper', {
		modules: [Autoplay],
		slidesPerView: 2,
		autoplay: true,
		breakpoints: {
			1024: {
				slidesPerView: 8,
			},
		},
	});
};

export default {
	init,
};
