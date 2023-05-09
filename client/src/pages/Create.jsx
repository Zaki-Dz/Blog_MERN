import styled from 'styled-components'
import Header from '../components/Header'
import { useState } from 'react'

const Create = () => {
	const [title, setTitle] = useState('')
	const [text, setText] = useState('')
	const [img, setImg] = useState('')

	const handleTitle = (e) => {
		setTitle(e.target.value)
	}

	const handleText = (e) => {
		setText(e.target.value)
	}

	const handleImg = (e) => {
		setImg(e.target.files[0])
	}

	const handlaSubmit = (e) => {
		e.preventDefault()

		if (title && text) {
			const data = new FormData()

			data.set('title', title)
			data.set('text', text)
			data.set('date', Date())
			data.set('img', img)

			setTitle('')
			setText('')
			setImg('')

			fetch('http://localhost:3000/create', {
				method: 'POST',
				body: data,
			})
				.then((response) => response.json())
				.then((data) => console.log(data))
		} else {
			alert('Empty')
		}
	}

	return (
		<>
			<Header />

			<SContainer>
				<form onSubmit={handlaSubmit}>
					<input type='text' placeholder='Title' value={title} onChange={handleTitle} />

					<textarea value={text} placeholder='Description...' onChange={handleText} />

					<label>Image</label>
					<input type='file' onChange={handleImg} />

					<button type='submit'>Create</button>
				</form>
			</SContainer>
		</>
	)
}

export default Create

const SContainer = styled.main`
	padding: 1rem 3rem;

	form {
		max-width: 500px;
		margin-inline: auto;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 2rem;
		border: 2px solid #002045;

		input,
		textarea {
			padding: 0.5rem 1rem;
			border: 1px solid #002045;
		}

		textarea {
			min-height: 300px;
			resize: none;
		}

		button {
			padding: 0.5rem 1rem;
			border: 1px solid #002045;
			background-color: #002045;
			color: white;
			cursor: pointer;
		}
	}
`
