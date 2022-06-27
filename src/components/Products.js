import { React } from 'react';
import AddToCart from '../images/AddToCart.jpg';

const Products = ({ context }) => {
	const { config, actions } = context;

	return config.fruits.map((fruit) => <products key={ fruit.id }>
		<div className="left">
			<img src={ fruit.image } width="18%" height="18%"/>
			<h3>{ fruit.name }</h3> <h3>Rs. { fruit.rate }/kg</h3>
		</div>
		<div className="right">
			<input
				type="image"
				src={ AddToCart }
				className="button"
				width="35%"
				height="15%"
				onClick={ () => {
					actions.addFruit({ fruit });
					actions.getTotal({ item: fruit, operation: 'add' });
				} }
			/></div></products>);
};

export default Products;
