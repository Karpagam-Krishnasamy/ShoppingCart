/* eslint-disable react/jsx-key */
import config from '../core/config';
import { React } from 'react';

const getProducts = () =>
	config.fruits.map((fruit) =>
		<div>
			<img
				src={ fruit.image }
				alt="Fruit image"
				width="20%"
				height="20%"
			/>
			<h3>{ fruit.name }</h3>
			<h3>Rs. { fruit.rate }/kg</h3>
		</div>);

export default getProducts;
