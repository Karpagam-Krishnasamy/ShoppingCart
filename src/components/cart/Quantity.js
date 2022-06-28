import React from 'react';
import AddButton from './AddButton';
import DeleteButton from './DeleteButton';

const Quantity = ({ context, fruit }) => {
	const { state: { cartItems }, actions } = context;

	return <div><a className="border right">
		<AddButton fruit={ fruit } actions={ actions }/>&nbsp;&nbsp;
		<a className="quantityBorder">
			{cartItems[fruit.id]}</a>&nbsp;&nbsp;
		<DeleteButton fruit={ fruit } actions={ actions }/>
					&nbsp;&nbsp;
	</a><br/><br/>
	</div>;
};

export default Quantity;
