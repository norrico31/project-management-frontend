import { Routes, Route } from 'react-router-dom'
import Layout from './shared/components/Layout/Layout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

export default function App() {
	return (
		<>
			<Routes>
				<Layout>
					<Route path='/' element={<Dashboard />} />
				</Layout>
				<Route path='/login' element={<Login />} />
			</Routes>
		</>
	)
}
