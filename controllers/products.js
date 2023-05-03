const Product = require('../models/Product');


const getAllProducts = async function(req, res){
	try {
		const products = await Product.find({}); 
		res.status(200).json({products})
	} catch (error) {
		res.status(500).json({msg: error})
	}
}

const createProduct = async function(req, res) {
	try {
		const product = await Product.create(req.body); 
		res.status(201).json({product})
	} catch (error) {
		res.status(500).json({msg: error})
	}
}

const getProduct = async function(req, res){
	try {
		const {id} = req.params; 
		const product = await Product.findOne({_id: id})
		if (!product){
			return res.status(404).json({msg: `No product found with id ${id}`})
		}
		res.status(200).json({product})
	} catch (error) {
		res.status(500).json({msg: error})
	}
}

const updateProduct = async function(req, res) {
	try {
		const {id} = req.params; 
		const data = req.body; 
		const product = await Product.findOneAndUpdate({_id: id}, data, {new: true, runValidators: true})
		if (!product){
			return res.status(404).json({msg: `No product found with id ${id}`})
		}
		res.status(200).json({product})
	} catch (error) {
		res.status(500).json({msg: error})
	}
}

const deleteProduct = async function (req, res){
	try {
		const {id} = req.params;
		const product = await Product.findOneAndDelete({_id: id});
		if (!product){
			res.status(404).json({msg: `No product found with id ${id}`})
		}
		res.status(200).json({product})
	} catch (error) {
		res.status(500).json({msg: error})
	}
}


module.exports = {createProduct, getAllProducts, getProduct, updateProduct, deleteProduct};