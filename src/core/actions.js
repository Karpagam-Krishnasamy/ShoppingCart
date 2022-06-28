import UpdateQuantity from '../services/UpdateQuantity';

const addFruit = ({ state, data }) => ({
	cartItems: UpdateQuantity.addFruit({ state, data }),
});
const removeFruit = ({ state, data }) => ({
	cartItems: UpdateQuantity.removeFruit({ state, data }),
});
const getTotal = ({ state, data }) => ({
	total: UpdateQuantity.getTotal({ state, data }),
});

const actions = {
	addFruit,
	removeFruit,
	getTotal,
};

export default actions;
