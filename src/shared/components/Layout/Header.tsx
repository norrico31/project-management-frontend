import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useThemeCtx } from '../../contexts/DarkMode'
import { NavLink } from 'react-router-dom';

const user = {
	name: 'Tom Cook',
	email: 'tom@example.com',
	imageUrl:
		'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
	{ name: 'Projects', to: '/' },
	{ name: 'Settings', to: '/settings' },
]
const userNavigation = [
	{ name: 'Your Profile', to: '#' },
	{ name: 'Settings', to: '#' },
	{ name: 'Sign out', to: '#' },
]

const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ')

function ButtonDarkmode() {
	const { theme, toggleTheme } = useThemeCtx()
	return (
		<button onClick={toggleTheme} className="inline-flex transition items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
			<span className="sr-only">Toggle dark mode</span>
			{theme ?
				<MdOutlineLightMode className="h-6 w-6 text-white-500" aria-hidden="true" />
				:
				<MdOutlineDarkMode className="h-6 w-6 text-white-500" aria-hidden="true" />
			}
		</button>
	)
}

export default function Header() {
	return <Disclosure as="nav" className="bg-gray-50 dark:bg-gray-800 dark:text-white shadow-sm">
		{() => (
			<>
				<div className="mx-auto  px-4 sm:px-6 lg:px-8">
					<div className="flex h-16 items-center justify-between">
						<div className="flex items-center">
							<div className="flex-shrink-0">
								Bricksoft
							</div>
						</div>
						<div>
							<div className="ml-4 flex items-center md:ml-6">
								<div className='mr-5'>
									<div className="ml-10 flex items-baseline space-x-4">
										{navigation.map((item) => (
											<NavLink
												key={item.name}
												to={item.to}
												className={({ isActive }) => classNames(
													isActive
														? 'bg-gray-900 text-white'
														: 'text-gray-300 hover:bg-gray-700 hover:text-white',
													'rounded-md px-3 py-2 text-sm font-medium',
												)}
												aria-current={item.to ? 'page' : undefined}
											>
												{item.name}
											</NavLink>
										))}
									</div>
								</div>
								<ButtonDarkmode />
								<Menu as="div" className="relative ml-3">
									<div>
										<MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
											<span className="absolute -inset-1.5" />
											<span className="sr-only">Open user menu</span>
											<img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
										</MenuButton>
									</div>
									<MenuItems
										transition
										className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
									>
										{userNavigation.map((item) => (
											<MenuItem key={item.name}>
												{({ focus }) => (
													<a
														href={item.to}
														className={classNames(
															focus ? 'bg-gray-100' : '',
															'block px-4 py-2 text-sm text-gray-700',
														)}
													>
														{item.name}
													</a>
												)}
											</MenuItem>
										))}
									</MenuItems>
								</Menu>
							</div>
						</div>
					</div>
				</div>
				<DisclosurePanel>
					<div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
						{navigation.map((item) => (
							<DisclosureButton
								key={item.name}
								as="a"
								href={item.to}
								className={classNames(
									item.to ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
									'block rounded-md px-3 py-2 text-base font-medium',
								)}
								aria-current={item.to ? 'page' : undefined}
							>
								{item.name}
							</DisclosureButton>
						))}
					</div>
					<div className="border-t border-gray-700 pb-3 pt-4">
						<div className="flex items-center px-5">
							<div className="flex-shrink-0">
								<img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
							</div>
							<div className="ml-3">
								<div className="text-base font-medium leading-none text-white">{user.name}</div>
								<div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
							</div>
							<button
								type="button"
								className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
							>
								<span className="absolute -inset-1.5" />
								<span className="sr-only">View notifications</span>
							</button>
						</div>
						<div className="mt-3 space-y-1 px-2">
							{userNavigation.map((item) => (
								<DisclosureButton
									key={item.name}
									as="a"
									href={item.to}
									className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
								>
									{item.name}
								</DisclosureButton>
							))}
						</div>
					</div>
				</DisclosurePanel>
			</>
		)}
	</Disclosure>
}
