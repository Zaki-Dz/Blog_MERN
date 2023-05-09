import styled from 'styled-components'

const LoadingBlog = () => {
	return <SLoading />
}

export default LoadingBlog

const SLoading = styled.div`
	border-radius: 1rem;
	min-height: 320px;
	animation: animation 1s linear infinite;

	&:nth-child(1) {
		grid-row: 1 / 3;
		flex-direction: column;
	}

	@keyframes animation {
		0% {
			background-color: #eee;
		}

		50% {
			background-color: #ddd;
		}

		100% {
			background-color: #eee;
		}
	}
`
