import { React } from 'react';
import AddToCart from '../images/AddToCart.jpg';

const AddButton = ({ actions, item }) =>
	<input
		type="image"
		src={ AddToCart }
		className="button"
		width="35%"
		height="15%"
		onClick={ () => {
			actions.addFruit({ item });
			actions.getTotal({ fruit: item, operation: 'add' });
		} }
	/>;

export default AddButton;
