import { RouterProvider } from 'react-router-dom'
import { routes } from './shared/routes'
import { useThemeCtx } from './shared/contexts/DarkMode'

export default function App() {
	const { theme } = useThemeCtx()
	return (
		<div className={`${theme ? 'dark' : ''}`}>
			{/* ADD CONTEXTS HERE */}
			<RouterProvider router={routes} />
		</div>
	)
}
