/* eslint-disable no-magic-numbers */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-return-assign */
import config from '../core/config';
import { map, reduce } from '@laufire/utils/collection';

const addFruit = ({ state, data }) =>
	state.cartItems[data] = (state.cartItems[data] || 0) + 1;

const removeFruit = ({ state, data }) =>
	state.cartItems[data] <= 1
		? delete state.cartItems[data]
		: state.cartItems[data] -= 1;

const getItemPrice = (quantity, fruitId) => config.rates[fruitId] * quantity;

const getDiscountAmount = (quantity, fruitId) =>
	config.discounts.hasOwnProperty(fruitId)
		? (config.discounts[fruitId] / parseFloat(100))
		* config.rates[fruitId] * quantity
		: 0;

const getItemDiscountedPrice = (quantity, fruitId) =>
	getItemPrice(quantity, fruitId) - getDiscountAmount(quantity, fruitId);

const getTaxAmount = (fruitId) =>
	config.taxes.hasOwnProperty(fruitId)
		? config.taxes[fruitId] / parseFloat(100)
		: 0;

const getFinalLineItemPrice = ({ state }) =>
	map(state.cartItems, (quantity, fruitId) =>
		getItemDiscountedPrice(quantity, fruitId)
	+ (getItemDiscountedPrice(quantity, fruitId)
		* getTaxAmount(fruitId)));

const getTotalAmount = ({ state }) =>
	reduce(
		getFinalLineItemPrice({ state }), (sum, individualRate) =>
			sum + individualRate, 0
	);

const Services = {
	addFruit,
	removeFruit,
	getTotalAmount,
};

export default Services;
