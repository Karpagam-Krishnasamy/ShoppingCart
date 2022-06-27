import Apple from '../images/Apple.png';
import Carrot from '../images/Carrot.png';
import Guava from '../images/Guava.png';

const config = {
	fruits: [{
		id: 1,
		name: 'Apple',
		image: Apple,
		rate: 100,
		discount: 0.10,
	},
	{
		id: 2,
		name: 'Carrot',
		image: Carrot,
		rate: 10,
		tax: 0.05,
	},
	{
		id: 3,
		name: 'Guava',
		image: Guava,
		rate: 50,
		tax: 0.10,
	}],
};

export default config;
