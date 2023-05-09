import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'

const Blog = () => {
	const location = useLocation()
	const [blog, setBlog] = useState({})

	const id = location.state.id

	fetch('http://localhost:3000/blog/' + id)
		.then((res) => res.json())
		.then((data) => setBlog(data))

	return (
		<main>
			<Header />

			<SBlog>
				<h1>{blog.title}</h1>

				<div className='content'>
					<img src={'http://localhost:3000/' + blog.img} />

					<div className='text'>
						<p>{blog.text}</p>

						<span>{blog.date}</span>
					</div>
				</div>
			</SBlog>
		</main>
	)
}

export default Blog

const SBlog = styled.div`
	padding: 1rem 3rem;

	h1 {
		padding-bottom: 2rem;
		color: #002045;
	}

	.content {
		position: relative;
		height: 600px;
		overflow: hidden;
		clip-path: polygon(50px 0, 100% 0, 100% 100%, 0 100%, 0 50px);
		border: 2px solid #002045;

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 50px;
			height: 50px;
			background-color: #002045;
		}

		img {
			width: 100%;
		}

		.text {
			position: absolute;
			bottom: 1rem;
			left: 1rem;
			max-width: 50%;
			color: white;
			background-color: #002045aa;
			padding: 1rem;
			display: flex;
			flex-direction: column;
			align-items: start;
			gap: 2rem;

			span {
				position: relative;

				&::before {
					content: '';
					position: absolute;
					top: -1rem;
					left: 0;
					width: 100%;
					height: 2px;
					background-color: white;
				}

				&::after {
					content: '';
					position: absolute;
					top: -1rem;
					left: 50%;
					transform: translate(-50%, calc(-50% + 1px));
					width: 10px;
					height: 10px;
					border-radius: 50%;
					background-color: white;
				}
			}
		}
	}
`
