const mongoose = require('mongoose'); 

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'must provide a name'],
		trim: true,
		maxlength: [20, 'name can not be more than 20 characters']
	}, 
	price: {
		type: Number, 
		required: [true, 'must provide a price'],
		maxlength: [4, 'price cannot be more than 4 characters']
	},
	quantity: {
		type: Number, 
		default: 1
	}
})

module.exports = mongoose.model('Product', ProductSchema);