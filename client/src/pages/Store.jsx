import { useState, useEffect} from 'react'; 
import axios from 'axios';
import './Store.css';
import Product from '../components/Product';

const Store = () => {
	const [data, setData] = useState('');
	const [error, setError] = useState('');

	useEffect(() => {
		getProducts()
	}, [])

	const getProducts = async () => {
		try {
			const products = await axios('/api/v1/products'); 
			setData(products.data.products);
			console.log(data);
		} catch (error) {
			setError(error.message)
		}
	}
	return (
		<main>
			<section className='products'>
				{data && data.map(product => <Product product={product}/>)}
			</section>
			<section>
			{error && <p className='error'>{error}</p>}
			</section>
		</main>
	)
}

export default Store; 