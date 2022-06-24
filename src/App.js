import { React } from 'react';
import './App.scss';
import getProducts from './components/Products';
import updateQuantity from './components/AddToCart';
import getBasketItems from './components/Basket';

/* eslint-disable max-len */
const App = ({ state: { totalValue, cartItems }}) =>
	<div className="App" role="application">
		<div className="row block centre"><h1 className="heading-align">Fruit Shopping</h1></div>
		<div className="row">
			<div className="container col-1">
				<div className="left">{ getProducts() }</div>
				<div className="right">{ updateQuantity() }</div>
			</div>
			<div className="container col-2">
				<h2>Cart</h2><br/>
				<div>{ getBasketItems({ state: { cartItems }}) }</div><br/>
				<div><h3>Total: {totalValue}</h3></div>
			</div>
		</div>
	</div>;

export default App;
