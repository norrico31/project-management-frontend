import { RouterProvider } from 'react-router-dom'
import { routes } from './shared/routes'

export default function App() {
	return (
		<>
			{/* ADD CONTEXTS HERE */}
			<RouterProvider router={routes} />
		</>
	)
}
