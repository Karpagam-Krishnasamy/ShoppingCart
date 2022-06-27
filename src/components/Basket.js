/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
/* eslint-disable react/jsx-key */
import { React } from 'react';
import context from '../core/context';
import config from '../core/config';
import plusImage from '../images/plus.png';
import minusImage from '../images/minus.jpg';

const getBasketItems = ({ state }) =>
	// eslint-disable-next-line eqeqeq
	config.fruits.filter((fruit) => Object.keys(state.cartItems).some((fruitId) => fruitId == fruit.id))
		.map((fruit) =>
			<div><h3 className="cart-text-align">{fruit.name} &nbsp;&nbsp;    Rs. { fruit.rate }/kg</h3>
				<a className="border right">
					<input
						type="image"
						src={ plusImage }
						width="3%"
						height="3%"
						onClick={ () => {
							context.actions.addFruit({ fruit });
							context.actions.getTotal({ item: fruit, operation: 'add' });
						} }
					/>&nbsp;&nbsp;
					<a className="quantityBorder">{state.cartItems[fruit.id]}</a>&nbsp;&nbsp;
					<input
						type="image"
						src={ minusImage }
						width="4%"
						onClick={ () => {
							context.actions.removeFruit({ fruit });
							context.actions.getTotal({ item: fruit, operation: 'delete' });
						} }
					/>
				</a><br/><br/>
			</div>);

export default getBasketItems;
