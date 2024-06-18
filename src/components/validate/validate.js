export const validate = (argument, input) => {
	if (argument) {
		if (input.parentElement.classList.contains('is-invalid')) {
			input.parentElement.classList.remove('is-invalid');
		}
		input.parentElement.classList.add('is-valid');
	} else {
		if (input.parentElement.classList.contains('is-valid')) {
			input.parentElement.classList.remove('is-valid');
		}
		input.parentElement.classList.add('is-invalid');
	}
};

export const validateCount = (input, length) => {
	input.addEventListener('input', (e) => {
		let text = e.target.value;
		if (input.value.length <= length) {
			e.target.value = text;
		} else {
			e.target.value = text.slice(0, length);
		}
	});
};
