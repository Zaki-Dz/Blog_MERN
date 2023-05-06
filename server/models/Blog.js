const { Schema, model } = require('mongoose')

const blogSchema = new Schema({
	title: {
		type: String,
	},
	text: {
		type: String,
	},
	date: {
		type: String,
	},
})

const BlogModel = model('blog', blogSchema)

module.exports = BlogModel
