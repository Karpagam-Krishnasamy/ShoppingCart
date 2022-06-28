import { filter } from '@laufire/utils/collection';

const UpdateQuantity = {
	addFruit: ({ state: { cartItems }, data: { item: { id }}}) => ({
		...cartItems,
		[id]: (cartItems[id] || 0) + 1,
	}),

	removeFruit: ({ state: { cartItems }, data: { item: { id }}}) =>
		filter({ ...cartItems, [id]: cartItems[id] - 1 }, (quantity) =>
			quantity !== 0),

	getItemDetails: ({ config: { fruits }, data }) =>
		fruits.find((fruit) => fruit.id === Number(data)),
};

export default UpdateQuantity;
