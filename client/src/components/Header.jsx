import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
	const navigate = useNavigate()

	const handleLink = (path) => {
		navigate(path)
	}

	return (
		<SHeader>
			<h1 className='logo' onClick={() => handleLink('/')}>
				Logo
			</h1>

			<div className='search'>
				<span>🔍</span>

				<input type='text' placeholder='Search...' />
			</div>

			<div className='menu'>
				<button onClick={() => handleLink('/')}>Home</button>

				<button onClick={() => handleLink('/create')}>Create</button>

				<button onClick={() => handleLink('/list')}>List</button>
			</div>
		</SHeader>
	)
}

export default Header

const SHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 3rem;

	.logo {
		color: #001f45;
		cursor: pointer;
		flex: 1;
	}

	.search {
		border-bottom: 2px solid #001f45;
		display: flex;
		align-items: center;
		flex: 1;

		input {
			border: none;
			background-color: transparent;
			padding: 0.5rem 1rem;
			outline: none;
		}
	}

	.menu {
		display: flex;
		align-items: center;
		justify-content: end;
		gap: 1rem;
		flex: 1;

		button {
			border: 1px solid #001f45;
			padding: 0.5rem 1rem;
			background-color: white;
			cursor: pointer;

			&:nth-child(1) {
				background-color: #001f45;
				color: white;
			}
		}
	}
`
