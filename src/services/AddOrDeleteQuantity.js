import { filter } from '@laufire/utils/collection';

const addFruit = ({ state, data }) =>
	({ ...state.cartItems, [data.fruit.id]:
		(state.cartItems[data.fruit.id] || 0) + 1 });

const removeFruit = ({ state, data }) =>
	filter({ ...state.cartItems, [data.fruit.id]:
		state.cartItems[data.fruit.id] - 1 }, (quantity) =>
		quantity !== 0);

const getDiscountPrice = (fruit) =>
	fruit.rate - (fruit.rate * (fruit.discount || 0));

const getItemPrice = (fruit) =>
	getDiscountPrice(fruit) + (getDiscountPrice(fruit) * (fruit.tax || 0));

const getTotal = ({ state, data }) => (data.operation === 'add'
	? state.total + getItemPrice(data.item)
	: state.total - getItemPrice(data.item));

const Services = {
	addFruit,
	removeFruit,
	getTotal,
};

export default Services;
