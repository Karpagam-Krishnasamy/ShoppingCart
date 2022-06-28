const ItemDetails = {

	getItemDetails: ({ config: { fruits }, data }) =>
		fruits.find((fruit) => fruit.id === Number(data)),
};

export default ItemDetails;
