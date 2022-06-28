import { React } from 'react';
import AddToCart from '../images/AddToCart.jpg';

const AddButton = ({ fruit, actions }) =>
	<div>
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
		/>
	</div>;

export default AddButton;
