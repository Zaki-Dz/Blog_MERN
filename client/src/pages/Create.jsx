import styled from 'styled-components'
import Header from '../components/Header'
import { useState } from 'react'

const Create = () => {
	const [title, setTitle] = useState('')
	const [text, setText] = useState('')

	const handleTitle = (e) => {
		setTitle(e.target.value)
	}

	const handleText = (e) => {
		setText(e.target.value)
	}

	const handlaSubmit = (e) => {
		e.preventDefault()

		if (title && text) {
			fetch('http://localhost:3000/create', {
				method: 'POST',
				body: JSON.stringify({ title, text, date: '02 May 2023' }),
				headers: { 'Content-type': 'application/json; charset=UTF-8' },
			})
				.then((response) => response.json())
				.then((data) => console.log(data))
		} else {
			console.log('empty')
		}
	}

	return (
		<>
			<Header />

			<SContainer>
				<form onSubmit={handlaSubmit}>
					<label>Title</label>
					<input type='text' value={title} onChange={handleTitle} />

					<label>Content</label>
					<textarea value={text} onChange={handleText} />

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
