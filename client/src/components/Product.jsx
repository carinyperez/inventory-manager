import './Product.css';
import axios from 'axios';
import {useState} from 'react';

const Product = ({product}) => {
	const [text, setText] = useState('Add to cart'); 
	const [error, setError] = useState('');

	const sendEmail = async () => {
		try {
			const res = await axios('/email'); 
			if (res.status === 200){
				setText('Out of stock')
			}
		} catch (error) {
			setError(error.message)
			setTimeout(() => {
				setError('')
			}, 1000)
		}
	}

	const editProduct = async() => {
		try {
			const {name, price} = product; 
			const id = product._id; 
			const quantity = 0; 
			const res = await axios.patch(`/api/v1/products/${id}`, {name, price, quantity});
			console.log(res);
		} catch (error) {
			setError(error.message);
			setTimeout(() => {
				setError('')
			}, 1000)
		}
	}

	const addToCart = () => {
		sendEmail()
		editProduct(); 
	}

	return (
		<div className='product'>
			<section>
				<img src='/placeholder.png' alt='placeholder'></img>
				<h3 className='product-name'>{product.name}</h3>
				<p className='product-price'>{`$ ${product.price}`}</p>
				<p>Qty: {product.quantity} </p>
				{
					(product.quantity === 0) ? 
					<button className='out-of-stock'>Out of stock</button> : 
					<button onClick={(e) => addToCart()} className='add-to-cart'>{text}</button>
				}
			</section>
			<section>
				{error && <p className='error'>{error}</p>}
			</section>
		</div>
	)
}

export default Product; 