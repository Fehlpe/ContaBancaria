import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'

function AppRoutes(): JSX.Element {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default AppRoutes
