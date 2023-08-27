const sendForm = async (data) => {
	let response = await fetch('https://api.loaderpro.ru/auth/api/login.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(data),
	});

	let result = await response.json();
	alert(result.message);
};
const init = () => {
	// При отправке формы входа
	document.querySelector('#login_form').addEventListener('submit', (evt) => {
		evt.preventDefault();
		const formData = new FormData(document.querySelector('#login_form'));
		let object = {};

		formData.forEach((value, key) => {
			object[key] = value;
		});

		sendForm(JSON.stringify(object)).then((r) => console.log(r.json()));
	});

	// $(document).on('submit', '#login_form', function () {
	// 	// Получаем данные формы
	// 	const login_form = $(this);
	// 	const form_data = JSON.stringify(login_form.serializeObject());
	//
	// 	// Отправка данных формы в API
	// 	$.ajax({
	// 		url: 'https://api.loaderpro.ru/auth/api/login.php',
	// 		type: 'POST',
	// 		contentType: 'application/json',
	// 		data: form_data,
	// 		success: (result) => {
	// 			// Сохраним JWT в куки
	// 			// setCookie('jwt', result.jwt, 1);
	//
	// 			// Показ домашней страницы и сообщение об успешном входе
	// 			// showHomePage();
	// 			console.log('Успешный вход в систему.', result);
	// 			$('#response').html("<div class='alert alert-success'>Успешный вход в систему.</div>");
	// 		},
	// 		error: (xhr, resp, text) => {
	// 			// При ошибке сообщим пользователю, что вход в систему не выполнен и очистим поля ввода
	// 			console.log('Ошибка входа. Email или пароль указан неверно.', text);
	// 			// eslint-disable-next-line max-len
	// 			// $('#response').html("<div class='alert alert-danger'>Ошибка входа. Email или пароль указан неверно.</div>");
	// 			// login_form.find('input').val('');
	// 		},
	// 	});
	//
	// 	return false;
	// });
};

export default {
	init,
};
