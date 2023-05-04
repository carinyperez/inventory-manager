const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async function(req, res){
	try {
		// SMTP config
		const transporter = nodemailer.createTransport({
			host: 'smtp.ethereal.email',
			port: 587,
			auth: {
				user: 'odessa.bayer@ethereal.email',
				pass: `${process.env.ETHEREAL_PASS}`
			}
		});
		let info = await transporter.sendMail({
			from: 'odessa.bayer@ethereal.email',
			to: "odessa.bayer@ethereal.email", // Test email address
			subject: "Out of stock",
			text: "Product out of stock",
		  });
		res.status(200).json({info})
	} catch (error) {
		res.status(500).json({msg: error})
	}
}

module.exports = sendEmail;