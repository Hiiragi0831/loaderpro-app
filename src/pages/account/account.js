import {Form} from '../../components/form/form';

const init = () => {
	if (document.querySelector('[data-account-form]')) {
		const form = document.querySelector('[data-account-form]');
		const sendData = new Form('POST');

		sendData.init('https://api.loaderpro.ru/account/save/', form);
	}
};

export default {
	init,
};

// $('body').on('click', '.row-notifications', function(){
// 	var noteid = $(this).attr('data-id');
// 	var urlsite = window.location.pathname+'/note_read/';
// 	$(this).attr('style', 'opacity: 0.5;');
//
// 	$.ajax({
// 		type: "POST",
// 		url: urlsite,
// 		data: {
// 			'noteid': noteid
// 		}
// 	});
// });
