const express = require('express')
const app = express()
const _PORT = 3000

const cors = require('cors')
app.use(cors())
app.use(express.json())

const mongoose = require('mongoose')

require('dotenv').config({
	path: './dev.env',
})

const username = 'zaki'
const password = process.env.PASSWORD
const database = 'blogdb'

mongoose.connect(
	`mongodb+srv://${username}:${password}@cluster0.iztihz0.mongodb.net/${database}?retryWrites=true&w=majority`
)

const blogModel = require('./models/Blog')

app.get('/blog', async (req, res) => {
	const blogs = await blogModel.find()

	res.json(blogs)
})

app.get('/blog/:id', async (req, res) => {
	const id = req.params.id
	const blog = await blogModel.findById(id)

	res.json(blog)
})

app.post('/create', async (req, res) => {
	console.log(req.body)

	const blog = new blogModel(req.body)

	await blog.save()

	res.json(blog)
})

app.post('/delete', async (req, res) => {
	const id = req.body.id
	const blog = await blogModel.findById(id)

	blog.deleteOne()
})

app.get('/', (req, res) => {
	res.send('clear')
})

app.listen(_PORT, () => {
	console.log('Server running on port 3000')
})
