/* eslint-disable eqeqeq */
import { React } from 'react';
import Quantity from './Quantity';

const Basket = ({ context }) => {
	const { state, config } = context;

	return Object.keys(state.cartItems).map((fruitId) =>
		config.fruits.find((fruit) => fruit.id == fruitId))
		.map((fruit) =>
			<div key={ fruit.id }>
				<h3 className="cart-text-align">{fruit.name} &nbsp;&nbsp;
					Rs. { fruit.rate }/kg</h3>
				<Quantity context={ context } fruit={ fruit }/>
			</div>);
};

export default Basket;
