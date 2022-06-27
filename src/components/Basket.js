/* eslint-disable eqeqeq */
/* eslint-disable max-lines-per-function */
import { React } from 'react';
import plusImage from '../images/plus.png';
import minusImage from '../images/minus.jpg';

const Basket = ({ context }) => {
	const { state, config } = context;

	return Object.keys(state.cartItems).map((fruitId) =>
		config.fruits.find((fruit) => fruit.id === fruitId))
		.map((fruit) =>
			<div key={ fruit.id }>
				<h3 className="cart-text-align">{fruit.name} &nbsp;&nbsp;
					Rs. { fruit.rate }/kg</h3>
				<a className="border right">
					<input
						type="image"
						src={ plusImage }
						width="3%"
						height="3%"
						onClick={ () => {
							context.actions.addFruit({ fruit });
							context.actions.getTotal({ item: fruit,
								operation: 'add' });
						} }
					/>&nbsp;&nbsp;
					<a className="quantityBorder">
						{state.cartItems[fruit.id]}</a>&nbsp;&nbsp;
					<input
						type="image"
						src={ minusImage }
						width="4%"
						onClick={ () => {
							context.actions.removeFruit({ fruit });
							context.actions.getTotal({ item: fruit,
								operation: 'delete' });
						} }
					/>
				</a><br/><br/>
			</div>);
};

export default Basket;
