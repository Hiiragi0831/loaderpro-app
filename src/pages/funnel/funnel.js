import {Form} from '../../components/form/form';

const funnelQuery = document.querySelector('[data-search-query]');
const funnelOrder = document.querySelector('[data-search-order]');
const sendData = new Form('POST');
const init = () => {
	if (funnelQuery) {
		sendData.init('/funnel_query/funnel_query_search/', funnelQuery, document.querySelector('.funnel__row'));
	}

	if (funnelOrder) {
		sendData.init('/funnel_orders/funnel_orders_search/', funnelOrder, document.querySelector('.funnel__row'));
	}
};

export default {
	init,
};
