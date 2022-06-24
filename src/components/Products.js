/* eslint-disable react/jsx-key */
import config from '../core/config';
import { React } from 'react';

const getProducts = () =>
	Object.keys(config.fruits).map((fruitId) =>
		<div>
			<img
				src={ config.images[fruitId] }
				alt="Fruit image"
				width="20%"
				height="20%"
			/>
			<h3>{ config.fruits[fruitId] }</h3>
			<h3>Rs. { config.rates[fruitId] }/kg</h3>
		</div>);

export default getProducts;
