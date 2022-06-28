import { React } from 'react';
import plusImage from '../../images/plus.png';

const AddButton = ({ fruit, actions }) =>
	<input
		type="image"
		src={ plusImage }
		width="3%"
		height="3%"
		onClick={ () => {
			actions.addFruit({ fruit });
			actions.getTotal({ item: fruit,
				operation: 'add' });
		} }
	/>;

export default AddButton;
