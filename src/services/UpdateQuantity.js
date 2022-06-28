import { filter } from '@laufire/utils/collection';

const addFruit = ({ state: { cartItems }, data: { fruit: { id }}}) => ({
	...cartItems,
	[id]: (cartItems[id] || 0) + 1,
});

const removeFruit = ({ state: { cartItems }, data: { fruit: { id }}}) =>
	filter({ ...cartItems, [id]: cartItems[id] - 1 }, (quantity) =>
		quantity !== 0);

const getDiscount = (fruit) =>
	fruit.rate - (fruit.rate * (fruit.discount || 0));

const getItemPrice = (fruit) =>
	getDiscount(fruit)
	+	(getDiscount(fruit) * (fruit.tax || 0));

const getTotal = ({ state: { total }, data: { item, operation }}) =>
	(operation === 'add'
		? total + getItemPrice(item)
		: total - getItemPrice(item));

const Services = {
	addFruit,
	removeFruit,
	getTotal,
};

export default Services;
