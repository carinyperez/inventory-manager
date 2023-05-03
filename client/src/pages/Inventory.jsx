import {useState, useEffect} from 'react';
import axios from 'axios'; 
import './Inventory.css';
import EditProduct from '../components/EditProduct';
import CreateProduct from '../components/CreateProduct';

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
		<div className='inventory'>
			<section>
			    <h1>Edit your inventory</h1>
				{data && data.map(product => <EditProduct key={product._id}product={product}/>)}
			</section>
			<section>
			    <h1>Create new product</h1>
				<CreateProduct/>
			</section>
			{error && <p className='error'>{error}</p>}
		</div>
	)
}

export default Inventory;
