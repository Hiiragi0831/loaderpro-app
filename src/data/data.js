import general from 'general';

const data = {
	general,
	home: {
		meta: {
			title: 'page home',
			description: 'home description',
			image: `${general.baseDir}image/share/share.jpg`,
			keywords: [],
		},
	},
	article: {
		meta: {
			title: 'page article',
			description: 'article description',
			image: `${general.baseDir}image/share/share.jpg`,
			keywords: [],
		},
	},
	account: {
		menu: [
			{
				icon: 'gear',
				name: 'Мой аккаунт',
				href: '/account/',
			}, {
				icon: 'ballot-check',
				name: 'Заказы',
				href: '/list-orders/',
			}, {
				icon: 'user',
				name: 'Пользователи',
				href: '/users/',
			},
		],
	},
};

export default data;
