import { filter } from '@laufire/utils/collection';

const UpdateQuantity = {
	addFruit: ({ state: { cartItems }, data: { item: { id }}}) => ({
		...cartItems,
		[id]: (cartItems[id] || 0) + 1,
	}),

	removeFruit: ({ state: { cartItems }, data: { item: { id }}}) =>
		filter({ ...cartItems, [id]: cartItems[id] - 1 }, (quantity) =>
			quantity !== 0),

	add: (total, fruit) =>
		total + UpdateQuantity.getItemPrice(fruit),

	delete: (total, fruit) =>
		total - UpdateQuantity.getItemPrice(fruit),

	getTotal: ({ state: { total }, data: { fruit, operation }}) =>
		UpdateQuantity[operation](total, fruit),

	getDiscount: (fruit) =>
		fruit.rate - (fruit.rate * (fruit.discount || 0)),

	getItemPrice: (fruit) =>
		UpdateQuantity.getDiscount(fruit)
	+	(UpdateQuantity.getDiscount(fruit) * (fruit.tax || 0)),
};

export default UpdateQuantity;
