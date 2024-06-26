import { lazy, ReactNode, Suspense } from "react";
import {
	createBrowserRouter,
} from "react-router-dom";

import Layout from './components/Layout/Layout';

const Login = lazy(() => import('../pages/Login'))
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Backlogs = lazy(() => import('../pages/Backlogs'))

const Statuses = lazy(() => import('../pages/system-settings/Statuses'))
const Devices = lazy(() => import('../pages/system-settings/Devices'))
const IssueTypes = lazy(() => import('../pages/system-settings/IssueTypes'))
const Schedules = lazy(() => import('../pages/system-settings/Schedules'))
const SeverityTypes = lazy(() => import('../pages/system-settings/SeverityTypes'))

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
			{
				path: "system-settings",
				// element: <PromiseComponent element={<Backlogs />} />,
				children: [
					{
						path: "statuses",
						element: <PromiseComponent element={<Statuses />} />,
					},
					{
						path: "devices",
						element: <PromiseComponent element={<Devices />} />,
					},
					{
						path: "issue-types",
						element: <PromiseComponent element={<IssueTypes />} />,
					},
					{
						path: "schedules",
						element: <PromiseComponent element={<Schedules />} />,
					},
					{
						path: "severity-types",
						element: <PromiseComponent element={<SeverityTypes />} />,
					},
				]
			},
		],
	},
	{
		path: '/login',
		element: <PromiseComponent element={<Login />} />,
	},
]);