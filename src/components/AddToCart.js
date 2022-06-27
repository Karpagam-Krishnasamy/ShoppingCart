/* eslint-disable no-magic-numbers */
/* eslint-disable react/jsx-key */
/* eslint-disable max-len */
import { React } from 'react';
import config from '../core/config';
import context from '../core/context';
import AddToCart from '../images/AddToCart.jpg';

const updateQuantity = () =>
	config.fruits.map((fruit) =>
		<div>
			<input
				type="image"
				src={ AddToCart }
				className="button"
				width="40%"
				height="40%"
				onClick={ () => {
					context.actions.addFruit({ fruit });
					context.actions.getTotal({ item: fruit, operation: 'add' });
				} }
			/>
		</div>);

export default updateQuantity;
