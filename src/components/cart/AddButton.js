import { React } from 'react';
import plusImage from '../../images/plus.png';

const AddButton = ({ item, actions }) =>

	<input
		type="image"
		src={ plusImage }
		width="3%"
		height="3%"
		onClick={ () => {
			actions.addFruit({ item });
			actions.getTotal({ fruit: item, operation: 'add' });
		} }
	/>;

export default AddButton;
