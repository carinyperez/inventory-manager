import { useState, useEffect} from 'react'; 
import axios from 'axios';
import './Store.css';
import Product from '../components/Product';

const Store = () => {
	const [data, setData] = useState('');
	const [error, setError] = useState('');
	const [sampleData, setSampleData] = useState('');

	useEffect(() => {
		getProducts()
		sampleProducts();
	}, [])

	const getProducts = async () => {
		try {
			const products = await axios('/api/v1/products'); 
			setData(products.data.products);
		} catch (error) {
			setError(error.message)
			setTimeout(() => {
				setError('')
			}, 1000)
		}
	}

	const sampleProducts = async () => {
		try {
			const products = await axios('https://fakestoreapi.com/products');
			setSampleData(products.data.slice(0,6));
		} catch (error) {
			setError(error.message);
			setTimeout(() => {
				setError('')
			}, 1000)
		}
	}
	return (
		<main>
			<section className='products'>
				{data && data.map(product => <Product key={product.name} product={product} />)}
			</section>
			<section>
			{error && <p className='error'>{error}</p>}
			</section>
			<section className='sample-products'>
				<h1>No idea where to start? Here a list of products to sell</h1>
				<ul>
					{sampleData && sampleData.map(product => <li key={product.title}>{product.title}</li>)}
				</ul>
			</section>
		</main>
	)
}

export default Store; 