import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Blog = ({ id, date, title, text, img }) => {
	const navigate = useNavigate()

	const handleLink = () => {
		navigate('/blog', { state: { id: id } })
	}

	return (
		<SBlog>
			<img src={'http://localhost:3000/' + img} />

			<div className='content'>
				<span className='date'>{date}</span>

				<h2 className='title'>{title}</h2>

				<p className='paragraph'>{text.length > 100 ? text.substring(0, 120) + '...' : text}</p>

				<button onClick={handleLink}>Read more</button>
			</div>
		</SBlog>
	)
}

export default Blog

const SBlog = styled.div`
	border: 2px solid #001f45;
	border-radius: 1rem;
	padding: 1rem;
	display: flex;
	align-items: start;
	gap: 1rem;

	&:nth-child(1) {
		grid-row: 1 / 3;
		flex-direction: column;

		img {
			border-radius: 1rem 1rem 0 0;
			max-height: 350px;
		}
	}

	img {
		background-color: #001f45;
		width: 100%;
		max-height: 250px;
		object-fit: cover;
		border-radius: 1rem 0 0 1rem;
	}

	.content {
		display: flex;
		align-items: start;
		gap: 1rem;
		flex-direction: column;
		height: 100%;

		.title {
			color: #001f45;
		}

		p {
			letter-spacing: 1px;
			font-size: 0.8rem;
		}

		button {
			background: linear-gradient(to right, #6313c8, #0079df);
			color: white;
			border: none;
			border-radius: 1rem;
			padding: 0.5rem 1rem;
			margin-top: auto;
			cursor: pointer;
		}
	}
`
