import { React } from 'react';
import './App.scss';
import Cart from './components/Cart';
import Header from './components/Header';
import Products from './components/Products';

const App = (context) =>
	<div className="App" role="application">
		<Header/>
		<div className="row">
			<div className="container col-1">
				<Products context={ context }/>
			</div>
			<div className="container col-2">
				<Cart context={ context }/>
			</div>
		</div>
	</div>;

export default App;
