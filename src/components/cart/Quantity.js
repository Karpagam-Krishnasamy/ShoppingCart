import React from 'react';
import AddButton from './AddButton';
import DeleteButton from './DeleteButton';

const Quantity = (context) => {
	const { state: { cartItems }, item } = context;

	return <div><a className="border right">
		<AddButton { ...context }/>&nbsp;&nbsp;
		<a className="quantityBorder">
			{cartItems[item.id]}</a>&nbsp;&nbsp;
		<DeleteButton { ...context }/>
					&nbsp;&nbsp;
	</a><br/><br/>
	</div>;
};

export default Quantity;
