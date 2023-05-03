const express = require('express'); 
const connectDB = require('./db/connect');
require('dotenv').config();
const products = require('./routes/products');

const app = express(); 
const path = require('path');

const start = async function() {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(process.env.PORT || 5000,'0.0.0.0',function(){
			console.log(`Listening on port 5000`)
		}); 
	} catch (error) {
		console.log(error)
	}
}

start();

// middleware 
app.use(express.static('client/build'))
app.use(express.json())

// routes 
app.use('/api/v1/products', products)

app.get('/*', function(req, res){
	res.sendFile(path.join(__dirname, 'client/build', index.html))
})

