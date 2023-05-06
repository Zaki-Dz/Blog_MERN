import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Blog from '../components/Blog'
import Header from '../components/Header'

const Home = () => {
	const [blogs, setBlogs] = useState([])

	useEffect(() => {
		fetch('http://localhost:3000/blog')
			.then((res) => res.json())
			.then((data) => setBlogs(data))
	}, [blogs])

	return (
		<>
			<Header />

			<SMain>
				<div className='top'>
					{blogs.length != 0 &&
						blogs.map(({ _id, date, title, text }) => <Blog id={_id} date={date} title={title} text={text} />)}
				</div>
			</SMain>
		</>
	)
}

export default Home

const SMain = styled.main`
	padding: 1rem 3rem;

	.top {
		display: grid;
		gap: 1rem;
		grid-template-columns: 1fr 1fr;
	}
`
