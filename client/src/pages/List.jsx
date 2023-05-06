import styled from 'styled-components'
import Header from '../components/Header'
import { useEffect, useState } from 'react'

const List = () => {
	const [blogs, setBlogs] = useState([])

	useEffect(() => {
		fetch('http://localhost:3000/blog')
			.then((res) => res.json())
			.then((data) => setBlogs(data))
	}, [blogs])

	const handleDelete = (id) => {
		fetch('http://localhost:3000/delete', {
			method: 'POST',
			body: JSON.stringify({ id }),
			headers: { 'Content-type': 'application/json; charset=UTF-8' },
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
	}

	return (
		<>
			<Header />

			<SMain>
				<div className='blogs'>
					{blogs.length != 0 &&
						blogs.map(({ _id, title, text }) => {
							return (
								<div className='blog'>
									<img src='https://picsum.photos/1000' />

									<div className='content'>
										<h3>{title}</h3>

										<p>{text}</p>
									</div>

									<button onClick={() => handleDelete(_id)}>Delete</button>
								</div>
							)
						})}
				</div>
			</SMain>
		</>
	)
}

export default List

const SMain = styled.main`
	padding: 1rem 3rem;

	.blogs {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;

		.blog {
			padding: 1rem 2rem 1rem calc(200px + 2rem);
			border: 1px solid #002045;
			position: relative;
			display: flex;
			align-items: center;

			img {
				position: absolute;
				left: 0;
				top: 0;
				width: 200px;
				height: 100%;
				background-color: #002045;
			}

			.content {
				display: flex;
				flex-direction: column;
				gap: 1rem;
				margin-right: 1rem;
				color: #002045;
			}

			button {
				padding: 0.5rem 1rem;
				border: 1px solid #002045;
				background-color: transparent;
				cursor: pointer;
			}
		}
	}
`
