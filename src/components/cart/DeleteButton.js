import { React } from 'react';
import minusImage from '../../images/minus.jpg';

const DeleteButton = ({ fruit, actions }) =>
	<input
		type="image"
		src={ minusImage }
		width="4%"
		height="3%"
		onClick={ () => {
			actions.removeFruit({ fruit });
			actions.getTotal({ item: fruit,
				operation: 'delete' });
		} }
	/>;

export default DeleteButton;
