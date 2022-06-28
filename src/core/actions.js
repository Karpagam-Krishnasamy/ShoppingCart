import UpdateQuantity from '../services/UpdateQuantity';
import calculateTotal from '../services/calculateTotal';

const addFruit = (context) => ({
	cartItems: UpdateQuantity.addFruit(context),
});
const removeFruit = (context) => ({
	cartItems: UpdateQuantity.removeFruit(context),
});
const getTotal = (context) => ({
	total: calculateTotal.getTotal(context),
});

const actions = {
	addFruit,
	removeFruit,
	getTotal,
};

export default actions;
