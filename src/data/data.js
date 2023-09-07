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
				icon: 'basket-shopping',
				name: 'Корзина заказов',
				href: '#',
			}, {
				icon: 'basket-shopping',
				name: 'Заказы',
				href: '#',
			}, {
				icon: 'basket-shopping',
				name: 'Счет-фактуры',
				href: '#',
			}, {
				icon: 'basket-shopping',
				name: 'Рекламации и Возвраты',
				href: '#',
			}, {
				icon: 'basket-shopping',
				name: 'Установка',
				href: '#',
			}, {
				icon: 'basket-shopping',
				name: 'Контактные лица',
				href: '#',
			}, {
				icon: 'basket-shopping',
				name: 'Адреса доставки',
				href: '#',
			}, {
				icon: 'basket-shopping',
				name: 'Перевозчики',
				href: '#',
			}, {
				icon: 'basket-shopping',
				name: 'Управление документооборотом',
				href: '#',
			},
		],
	},
};

export default data;
