import AirDatepicker from 'air-datepicker';

const init = () => {
	if (document.querySelector('.datepicker-multiple')) {
		document.querySelectorAll('.datepicker-multiple').forEach((el) => {
			// eslint-disable-next-line
			let datepickerMultiple = new AirDatepicker(el.querySelector('input'), {
				range: true,
				multipleDatesSeparator: ' - ',
				// inline: true,
			});
		});
	}
};

export default {
	init,
};
