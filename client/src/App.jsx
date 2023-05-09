import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Create from './pages/Create'
import List from './pages/List'
import './App.css'

const App = () => {
	return (
		<SkeletonTheme>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/create' element={<Create />} />
				<Route path='/list' element={<List />} />
			</Routes>
		</SkeletonTheme>
	)
}

export default App
