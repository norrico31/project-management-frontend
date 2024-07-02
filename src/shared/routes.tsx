import { lazy, ReactNode, Suspense } from "react";
import {
	createBrowserRouter,
} from "react-router-dom";

import Layout from './components/Layout/Layout';
import { Loading } from "./components";

const Login = lazy(() => import('../pages/Login'))
const ProjectsLists = lazy(() => import('../pages/projects/ProjectLists'))
const Settings = lazy(() => import('../pages/Settings'))
const SystemSettings = lazy(() => import('../pages/system-settings/SystemSettings'))
const AdminSettings = lazy(() => import('../pages/admin-settings/AdminSettings'))
const Backlogs = lazy(() => import('../pages/Backlogs'))
const Profile = lazy(() => import('../pages/Profile'))

const Statuses = lazy(() => import('../pages/system-settings/Statuses'))
const Devices = lazy(() => import('../pages/system-settings/Devices'))
const IssueTypes = lazy(() => import('../pages/system-settings/IssueTypes'))
const Schedules = lazy(() => import('../pages/system-settings/Schedules'))
const SeverityTypes = lazy(() => import('../pages/system-settings/SeverityTypes'))

function PromiseComponent({ element }: { element: ReactNode }) {
	return <Suspense fallback={<Loading />}>{element}</Suspense>
}

export const routes = createBrowserRouter([
	{
		path: "/",
		// loader: rootLoader,
		element: <Layout />,
		children: [
			{
				path: "",
				element: <PromiseComponent element={<ProjectsLists />} />,
				// loader: teamLoader,
			},
			{
				path: "me",
				element: <PromiseComponent element={<Profile />} />,
			},
			{
				path: "settings",
				element: <PromiseComponent element={<Settings />} />,
				children: [
					{
						path: "system",
						element: <PromiseComponent element={<SystemSettings />} />,
					},
					{
						path: "admin",
						element: <PromiseComponent element={<AdminSettings />} />,
					},
				]
			},
			// {
			// 	path: "backlogs",
			// 	element: <PromiseComponent element={<Backlogs />} />,
			// },
			// {
			// 	path: "system-settings",
			// 	element: <PromiseComponent element={<SystemSettings />} />,
			// 	children: [
			// 		{
			// 			path: "statuses",
			// 			element: <PromiseComponent element={<Statuses />} />,
			// 		},
			// 		{
			// 			path: "devices",
			// 			element: <PromiseComponent element={<Devices />} />,
			// 		},
			// 		{
			// 			path: "issue-types",
			// 			element: <PromiseComponent element={<IssueTypes />} />,
			// 		},
			// 		{
			// 			path: "schedules",
			// 			element: <PromiseComponent element={<Schedules />} />,
			// 		},
			// 		{
			// 			path: "severity-types",
			// 			element: <PromiseComponent element={<SeverityTypes />} />,
			// 		},
			// 	]
			// },
			// {
			// 	path: "admin-settings",
			// 	element: <PromiseComponent element={<AdminSettings />} />,
			// 	children: [
			// 		{
			// 			path: "statuses",
			// 			element: <PromiseComponent element={<Statuses />} />,
			// 		},
			// 		{
			// 			path: "devices",
			// 			element: <PromiseComponent element={<Devices />} />,
			// 		},
			// 		{
			// 			path: "issue-types",
			// 			element: <PromiseComponent element={<IssueTypes />} />,
			// 		},
			// 		{
			// 			path: "schedules",
			// 			element: <PromiseComponent element={<Schedules />} />,
			// 		},
			// 		{
			// 			path: "severity-types",
			// 			element: <PromiseComponent element={<SeverityTypes />} />,
			// 		},
			// 	]
			// },
		],
	},
	{
		path: '/login',
		element: <PromiseComponent element={<Login />} />,
	},
]);