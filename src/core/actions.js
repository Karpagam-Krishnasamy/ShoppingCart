/* eslint-disable no-return-assign */
/* eslint-disable max-len */

import Services from '../services/AddOrDeleteQuantity';

const addFruit = ({ state, data }) => ({
	cartItems: Services.addFruit({ state, data }),
});
const removeFruit = ({ state, data }) => ({
	cartItems: Services.removeFruit({ state, data }),
});
const getTotal = ({ state, data }) => ({
	total: Services.getTotal({ state, data }),
});

const actions = {
	addFruit,
	removeFruit,
	getTotal,
};

export default actions;
