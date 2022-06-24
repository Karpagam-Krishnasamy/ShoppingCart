/* eslint-disable no-return-assign */
/* eslint-disable max-len */

import Services from '../services/AddOrDeleteQuantity';

const addFruit = ({ state, data }) => Services.addFruit({ state, data });
const removeFruit = ({ state, data }) => Services.removeFruit({ state, data });

const getTotal = ({ state }) => ({
	totalValue: Services.getTotalAmount({ state }),
});

const actions = {
	addFruit,
	removeFruit,
	getTotal,
};

export default actions;
