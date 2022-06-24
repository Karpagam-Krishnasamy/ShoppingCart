/* eslint-disable no-magic-numbers */
/* eslint-disable react/jsx-key */
/* eslint-disable max-len */
import { React } from 'react';
import config from '../core/config';
import context from '../core/context';
import AddToCart from '../images/AddToCart.jpg';

const updateQuantity = () =>
	Object.keys(config.fruits).map((fruitId) =>
		<div>
			<input
				type="image"
				src={ AddToCart }
				className="button"
				width="40%"
				height="40%"
				onClick={ () => {
					context.actions.addFruit(fruitId);
					context.actions.getTotal();
				} }
			/>
		</div>);

export default updateQuantity;
