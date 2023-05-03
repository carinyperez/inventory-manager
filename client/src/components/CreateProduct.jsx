import axios from 'axios';
import {useState} from 'react';
import './CreateProduct.css';

const CreateProduct = () => {
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [quantity, setQuantity] = useState('');
	const [error, setError] = useState('');
	
	const createProduct = async(e) => {
		try {	
			await axios.post('/api/v1/products', {name, price, quantity});
		} catch (error) {
			setError(error.message);
		}
	}

	return (
		<div className='create-product'>
			<form onSubmit={createProduct}>
				<label htmlFor='name'>Name</label>
				<input type ='text' name='name' onChange={(e) => setName(e.target.value)} required/>

				<label htmlFor='price'>Price</label>
				<input type='text' name='price' onChange={(e) => setPrice(e.target.value)} required/>
				
				<label htmlFor='quantity'>Quantity</label>
				<input type='text' name='quantity'  onChange={(e) => setQuantity(e.target.value)} required/>
				<button type='submit'>Save</button>
			</form>
			{error && <p className='error'>{error}</p>}
		</div>
	)
}

export default CreateProduct; 