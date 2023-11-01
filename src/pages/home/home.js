import Swiper from 'swiper';
import {Autoplay} from 'swiper/modules';

const init = () => {
	// eslint-disable-next-line
	const sliderBrands = new Swiper('.home__brands .swiper', {
		modules: [Autoplay],
		slidesPerView: 8,
		autoplay: true,
	});
};

export default {
	init,
};
