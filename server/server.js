const express = require('express')
const app = express()
const _PORT = 3000

const cors = require('cors')
app.use(cors())
app.use(express.json({ limit: '50mb' }))
app.use('/uploads', express.static(__dirname + '/uploads'))

const mongoose = require('mongoose')

const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const fs = require('fs')

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

app.post('/create', upload.single('img'), async (req, res) => {
	const { path, originalname } = req.file
	const parts = originalname.split('.')
	const ext = parts[parts.length - 1]

	const newPath = path + '.' + ext

	fs.renameSync(path, newPath)

	const data = { ...req.body, img: newPath }

	const blog = new blogModel(data)
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
