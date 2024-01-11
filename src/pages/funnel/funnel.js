import {Form} from '../../components/form/form';

const funnelQuery = document.querySelector('[data-search-query]');
const funnelOrder = document.querySelector('[data-search-order]');
const init = () => {
	if (funnelQuery) {
		const sendData = new Form('POST');
		sendData.init('https://my.loaderpro.ru/funnel_query/funnel_query_search/', funnelQuery);
	}

	if (funnelOrder) {
		const sendData = new Form('POST');
		sendData.init('https://my.loaderpro.ru/funnel_orders/funnel_orders_search/', funnelOrder);
	}
};

export default {
	init,
};
