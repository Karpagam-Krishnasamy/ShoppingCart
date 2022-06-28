import { React } from 'react';
import AddButton from './AddToCartButton';

const Products = ({ context }) => {
	const { config: { fruits }} = context;

	return fruits.map((fruit) => <products key={ fruit.id }>
		<div className="left">
			<img src={ fruit.image } width="18%" height="18%"/>
			<h3>{ fruit.name }</h3> <h3>Rs. { fruit.rate }/kg</h3>
		</div>
		<div className="right">
			<AddButton { ...{ ...context, item: fruit } }/>
		</div></products>);
};

export default Products;
