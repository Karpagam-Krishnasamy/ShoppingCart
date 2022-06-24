/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
/* eslint-disable react/jsx-key */
import { React } from 'react';
import context from '../core/context';
import config from '../core/config';
import plusImage from '../images/plus.png';
import minusImage from '../images/minus.jpg';

const getBasketItems = ({ state }) =>
	Object.keys(state.cartItems).map((fruitId) =>
		<div><h3 className="cart-text-align">{config.fruits[fruitId]} &nbsp;&nbsp;    Rs. { config.rates[fruitId] }/kg</h3>
			<a className="border right">
				<input
					type="image"
					src={ plusImage }
					width="3%"
					height="3%"
					onClick={ () => {
						context.actions.addFruit(fruitId);
						context.actions.getTotal();
					} }
				/>&nbsp;&nbsp;
				<a className="quantityBorder">{state.cartItems[fruitId]}</a>&nbsp;&nbsp;
				<input
					type="image"
					src={ minusImage }
					width="4%"
					onClick={ () => {
						context.actions.removeFruit(fruitId);
						context.actions.getTotal();
					} }
				/>
			</a><br/><br/>
		</div>);

export default getBasketItems;
