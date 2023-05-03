import './Product.css'

const Product = ({product}) => {
	return (
		<div className='product'>
			<img src='/placeholder.png' alt='placeholder'></img>
			<h3 className='product-name'>{product.name}</h3>
			<p className='product-price'>{`$ ${product.price}`}</p>
			<p> Quantity: {product.quantity}</p>
		</div>
	)
}

export default Product; 