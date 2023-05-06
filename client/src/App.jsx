import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Create from './pages/Create'
import List from './pages/List'
import './App.css'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/blog' element={<Blog />} />
			<Route path='/create' element={<Create />} />
			<Route path='/list' element={<List />} />
		</Routes>
	)
}

export default App
