import { React } from 'react';
import Basket from './Basket';

const Cart = ({ context }) =>
	<cart>
		<h2>Cart</h2><br/>
		<Basket context={ context }/>
		<h2>Total : {context.state.total}</h2>
	</cart>;

export default Cart;
