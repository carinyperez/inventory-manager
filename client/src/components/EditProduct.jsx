import axios from 'axios';
import {useState} from 'react';
import './EditProduct.css';

const EditProduct = ({product}) => {
	const id = product._id; 
	const [name, setName] = useState(product.name);
	const [price, setPrice] = useState(product.price);
	const [quantity, setQuantity] = useState(product.quantity);
	const [error, setError] = useState('')

	const editProduct = async(e) => {
		try {
			e.preventDefault()
			await axios.patch(`/api/v1/products/${id}`, {name, price, quantity}); 
		} catch (error) {
			setError(error.message);
			setTimeout(() => {
				setError('')
			}, 1000)
		}
	}

	return (
		<div className='edit-product'>
			<form onSubmit={editProduct}>
				<label htmlFor='name'>Name</label>
				<input type ='text' name='name' defaultValue={product.name} onChange={(e) => setName(e.target.value)}/>

				<label htmlFor='price'>Price</label>
				<input type='text' name='price' defaultValue={product.price} onChange={(e) => setPrice(e.target.value)}/>
				
				<label htmlFor='quantity'>Quantity</label>
				<input type='text' name='quantity' defaultValue={product.quantity} onChange={(e) => setQuantity(e.target.value)}/>
				<button type='submit'>Save</button>
			</form>
			{error && <p className='error'>{error}</p>}
		</div>
	)
}

export default EditProduct; 