import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';

import 'swiper/swiper-bundle.css';
import 'air-datepicker/air-datepicker.css';
import '@tarekraafat/autocomplete.js/dist/css/autoComplete.css';
import '@styles/vendor.scss';
import '@styles/main.scss';

import actualYear from '../scripts/modules/actual-year';
import uaParser from '../scripts/modules/ua-parser';
import vhFix from '../scripts/modules/vh-fix';

import {isDevices} from '../scripts/helpers/index';
import lazyLoad from '../scripts/modules/lazy-load';
import scrollToAnchor from './modules/scrollToAnchor';
import lazyBlur from './modules/lazyBlur';
// import router from '../components/router/router';
import sharing from '../components/sharing/sharing';
import authentication from '../components/authentication/authentication';
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

// eslint-disable-next-line no-underscore-dangle
window._debounce = debounce;
// eslint-disable-next-line no-underscore-dangle
window._throttle = throttle;

let resizeWidth = null;

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

// добавить скрипты для инициализации при переходах
// const scriptsInit = [
// 	// активируем нужные модули которые будут использоваться и которые должны обновлять при переходах между страницами
// 	lazyLoad.init,
// 	scrollToAnchor.init,
// 	lazyBlur.init,
// 	sharing.init,
//
// 	authentication.init,
// 	registration.init,
// 	home.init,
// 	query.init,
// ];
//
// // добавить скрипты для удаленния данных при уходе
// const scriptsDestroy = [
//
// ];
const init = () => {
	uaParser.init();
	actualYear.init();
	vhFix.init();
	// закоментировать или удалить если SPA поведение не требуется
	// router.init(scriptsInit, scriptsDestroy);
	lazyLoad.init();
	scrollToAnchor.init();
	lazyBlur.init();
	sharing.init();
	authentication.init();
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

	resizeWidth = innerWidth;
	window.addEventListener('resize', _debounce(resize, 500));
};

document.addEventListener('DOMContentLoaded', init);
