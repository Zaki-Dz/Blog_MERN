const { Schema, model } = require('mongoose')

const blogSchema = new Schema({
	title: String,
	text: String,
	date: String,
	img: String,
})

const BlogModel = model('blog', blogSchema)

module.exports = BlogModel
