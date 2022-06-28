const calculateTotal = {
	getDiscount: (fruit) =>
		fruit.rate - (fruit.rate * (fruit.discount || 0)),

	getItemPrice: (fruit) =>
		calculateTotal.getDiscount(fruit)
	+	(calculateTotal.getDiscount(fruit) * (fruit.tax || 0)),

	add: (total, fruit) =>
		total + calculateTotal.getItemPrice(fruit),

	delete: (total, fruit) =>
		total - calculateTotal.getItemPrice(fruit),

	getTotal:
	({ state: { total }, data: { fruit, operation }}) =>
		calculateTotal[operation](total, fruit),
};

export default calculateTotal;
