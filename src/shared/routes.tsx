import { lazy, ReactNode, Suspense } from "react";
import {
	createBrowserRouter,
} from "react-router-dom";

import Layout from './components/Layout/Layout';

const Dashboard = lazy(() => import('../pages/Dashboard'))
const Backlogs = lazy(() => import('../pages/Backlogs'))
const Login = lazy(() => import('../pages/Login'))

function PromiseComponent({ element }: { element: ReactNode }) {
	return <Suspense fallback={<div />}>{element}</Suspense>
}

export const routes = createBrowserRouter([
	{
		path: "/",
		// loader: rootLoader,
		element: <Layout />,
		children: [
			{
				path: "",
				element: <PromiseComponent element={<Dashboard />} />,
				// loader: teamLoader,
			},
			{
				path: "backlogs",
				element: <PromiseComponent element={<Backlogs />} />,
			},
		],
	},
	{
		path: '/login',
		element: <PromiseComponent element={<Login />} />,
	},
]);