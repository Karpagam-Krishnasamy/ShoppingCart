import { React } from 'react';
import minusImage from '../../images/minus.jpg';

const DeleteButton = ({ actions, item }) =>
	<input
		type="image"
		src={ minusImage }
		width="4%"
		height="3%"
		onClick={ () => {
			actions.removeFruit({ item });
			actions.getTotal({ fruit: item, operation: 'delete' });
		} }
	/>;

export default DeleteButton;
