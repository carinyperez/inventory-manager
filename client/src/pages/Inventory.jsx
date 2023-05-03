import {useState, useEffect} from 'react';
import axios from 'axios'; 
import './Inventory.css';
import EditProduct from '../components/EditProduct';

const Inventory  = () => {
	const [data, setData] = useState('');
	const [error, setError] = useState('');

	useEffect(() => {
		getProducts()
	}, [])

	const getProducts = async() => {
		try {
			const products = await axios('/api/v1/products'); 
			setData(products.data.products);
		} catch (error) {
			setError(error.message)
		}
	}

	return (
		<div>
			<h1>Edit your inventory</h1>
			<section>
				{data && data.map(product => <EditProduct key={product._id}product={product}/>)}
			</section>
			<section>
				{error && <p className='error'>{error}</p>}
			</section>
		</div>
	)
}

export default Inventory;
