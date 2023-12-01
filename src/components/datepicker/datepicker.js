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

	if (document.querySelector('.datepicker-single')) {
		document.querySelectorAll('.datepicker-single').forEach((el) => {
			// eslint-disable-next-line
			let datepickerSingle = new AirDatepicker(el.querySelector('input'), {
				// inline: true,
			});
		});
	}
};

export default {
	init,
};
