import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';
import IMask from 'imask';

import 'swiper/swiper-bundle.css';
import 'air-datepicker/air-datepicker.css';
import '@tarekraafat/autocomplete.js/dist/css/autoComplete.css';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import 'nice-select2/dist/css/nice-select2.css';
import '@styles/vendor.scss';
import '@styles/main.scss';

import actualYear from '../scripts/modules/actual-year';
import uaParser from '../scripts/modules/ua-parser';
import vhFix from '../scripts/modules/vh-fix';
import {Fancybox} from '@fancyapps/ui';
import tippy from 'tippy.js';
import NiceSelect from 'nice-select2';

import {isDevices} from '../scripts/helpers/index';
import lazyLoad from '../scripts/modules/lazy-load';
import scrollToAnchor from './modules/scrollToAnchor';
import lazyBlur from './modules/lazyBlur';
import sharing from '../components/sharing/sharing';
import authorization from '../pages/authorization/authorization';
import registration from '../components/registration/registration';
import header from '../components/header/header';
import home from '../pages/home/home';
import query from '../pages/query/query';
import account from '../pages/account/account';
import notification from '../pages/notification/notification';
import inputFile from '../components/input-file/input-file';
import datepicker from '../components/datepicker/datepicker';
import product from '../components/product/product';
import queryHistory from '../pages/query-history/query-history';
import requestCard from '../pages/request-card/request-card';
import modal from '../components/modal/modal';
import autocomplete from '../components/autocomplete/autocomplete';
import funnel from '../pages/funnel/funnel';
import catalog from '../pages/catalog/catalog';
import request from '../pages/request/request';
import vehicle from '../pages/vehicle/vehicle';
import basket from '../pages/basket/basket';
import garage from '../pages/garage/garage';
import listOrders from '../pages/list-orders/list-orders';
import {Form} from '../components/form/form';
import users from '../pages/users/users';
import forgot from '../pages/forgot/forgot';
import {Cookie} from '../components/cookies/cookies';

// eslint-disable-next-line no-underscore-dangle
window._debounce = debounce;
// eslint-disable-next-line no-underscore-dangle
window._throttle = throttle;

let resizeWidth = null;
const sendForm = new Form('POST');
const cookieJwt = new Cookie('jwt');

const resize = () => {
	if (isDevices() && resizeWidth && resizeWidth === innerWidth) {
		return;
	}

	document.body.classList.add('is-resizing');

	uaParser.resize();
	// resize logic

	document.body.classList.remove('is-resizing');

	resizeWidth = innerWidth;
};

const addBasket = () => {
	if (document.querySelector('[data-add-basket]')) {
		document.querySelectorAll('[data-add-basket]').forEach((item) => {
			sendForm.init('/basket/basket_add', item);
		});
	}

	if (document.querySelector('[data-add-request]')) {
		document.querySelectorAll('[data-add-request]').forEach((item) => {
			sendForm.init('/catalog_product/catalog_product_query/', item, document.querySelector('main'));
		});
	}
};

const exportXml = () => {
	if (document.querySelector('[data-export-xls]')) {
		document.querySelectorAll('[data-export-xls]').forEach((item) => {
			sendForm.init('/Main/export_xls', item);
		});
	}
};

const phoneMask = () => {
	if (document.querySelector('.js-phone-mask')) {
		document.querySelectorAll('.js-phone-mask').forEach((i) => {
			// eslint-disable-next-line
			new IMask(i.querySelector('input'), {
				mask: '+{7} (000) 000-00-00',
				lazy: false,
			});
		});
	}
};

const selectSearch = () => {
	if (document.querySelector('[data-nise-select]')) {
		document.querySelectorAll('[data-nise-select]').forEach((item) => {
			// eslint-disable-next-line
			new NiceSelect(item, {
				searchable: true,
				placeholder: 'Бренд',
				searchtext: 'Поиск бренда',
			});
		});
	}
};

const delDotsTire = () => {
	const replaceString = (item) => {
		item.addEventListener('change', (e) => {
			e.target.value = e.target.value.replace(/([.\-/\\=,\s+])/g, '');
		});
	};
	if (document.querySelector('input[name="numparts"]')) {
		document.querySelectorAll('input[name="numparts"]').forEach((item) => {
			replaceString(item);
		});
	}
	// if (document.querySelector('input[name="search"]')) {
	// 	document.querySelectorAll('input[name="search"]').forEach((item) => {
	// 		replaceString(item);
	// 	});
	// }
	if (document.querySelector('input[name="article"]')) {
		document.querySelectorAll('input[name="article"]').forEach((item) => {
			replaceString(item);
		});
	}
};

const delMetods = () => {
	if (document.querySelector('.commodity-query__item')) {
		document.querySelectorAll('.commodity-query__item').forEach((item) => {
			item.querySelector('.commodity-query__del').addEventListener('click', (e) => {
				e.preventDefault();
				const fd = new FormData();
				fd.append('jwt', cookieJwt.get('jwt'));
				fd.append('id', item.querySelector('.commodity-query__del').dataset.qhId);
				fd.append('num', item.querySelector('.commodity-query__del').dataset.qhNum);
				sendForm.sendData(fd, '/Main/delete_products', document.querySelector('main'));
				item.remove();
			});
		});
	}

	if (document.querySelector('.request-card__product')) {
		document.querySelectorAll('.request-card__product').forEach((item) => {
			item.querySelector('.request-card__product-del').addEventListener('click', (e) => {
				e.preventDefault();
				const fd = new FormData();
				fd.append('jwt', cookieJwt.get('jwt'));
				fd.append('id', item.querySelector('.request-card__product-del').dataset.rcId);
				fd.append('num', item.querySelector('.request-card__product-del').dataset.rcNum);
				sendForm.sendData(fd, '/Main/delete_products', document.querySelector('main'));
				item.remove();
			});
		});
	}
};

const repeatQuery = () => {
	if (document.querySelector('[data-repeat-query]')) {
		sendForm.init('/Main/repeat_query/', document.querySelector('[data-repeat-query]'), document.querySelector('main'));
	}
};

const productEditQuery = () => {
	if (document.querySelector('[data-product-edit-query]')) {
		document.querySelectorAll('[data-product-edit-query]').forEach((item) => {
			sendForm.init('/product/product_edit/', item);
		});
	}
};

const tooltip = () => {
	if (document.querySelector('[data-tooltip]')) {
		document.querySelectorAll('[data-tooltip]').forEach((item) => {
			tippy(item, {
				theme: 'light',
				content: item.dataset.tooltip,
			});
		});
	}
};

const init = () => {
	uaParser.init();
	actualYear.init();
	vhFix.init();
	lazyLoad.init();
	scrollToAnchor.init();
	lazyBlur.init();
	sharing.init();
	authorization.init();
	registration.init();
	home.init();
	query.init();
	queryHistory.init();
	account.init();
	notification.init();
	header.init();
	inputFile.init();
	datepicker.init();
	product.init();
	requestCard.init();
	modal.init();
	autocomplete.init();
	funnel.init();
	catalog.init();
	request.init();
	vehicle.init();
	basket.init();
	garage.init();
	listOrders.init();
	addBasket();
	phoneMask();
	users.init();
	Fancybox.bind('[data-fancybox]');
	exportXml();
	delDotsTire();
	forgot.init();
	delMetods();
	repeatQuery();
	productEditQuery();
	tooltip();
	selectSearch();
	// validate.init();

	resizeWidth = innerWidth;
	window.addEventListener('resize', _debounce(resize, 500));
};

document.addEventListener('DOMContentLoaded', init);
