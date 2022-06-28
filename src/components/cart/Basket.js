/* eslint-disable eqeqeq */
import { React } from 'react';
import Quantity from './Quantity';
import ItemDetails from '../../services/ItemDetails';
import { map, values } from '@laufire/utils/collection';

const Basket = ({ context }) => {
	const { state: { cartItems }} = context;

	return values(map(cartItems, (dummy, fruitId) =>
		ItemDetails.getItemDetails({ ...context, data: fruitId })))
		.map((fruit) =>
			<div key={ fruit.id }>
				<h3 className="cart-text-align">{fruit.name} &nbsp;&nbsp;
					Rs. { fruit.rate }/kg</h3>
				<Quantity { ...{ ...context, item: fruit } }/>
			</div>);
};

export default Basket;
