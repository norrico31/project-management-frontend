import { ReactNode } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { MdOutlineSettings } from "react-icons/md"
import { TbSettingsCog } from "react-icons/tb";

function HeadingSettings() {
    const { pathname } = useLocation()
    return <h1 className="heading-1">Settings - {pathname.includes('admin') ? 'Admin' : 'System'}</h1>
}

const tabList = [
    {
        to: 'system',
        icon: MdOutlineSettings,
    },
    {
        to: 'admin',
        icon: TbSettingsCog,
    },
]

function TabSettings() {
    return <ul className="flex-column space-y space-y-4 text-sm font-medium md:me-2 mb-4">
        {tabList.map((tab) => (
            <li key={tab.to}>
                <NavLink to={`/settings/${tab.to}`} className={({ isActive }) => `${isActive ? 'bg-gray-300 text-gray-900 dark:bg-gray-400 dark:text-gray-800' : ''} inline-flex bg-gray-50 items-center px-4 py-3 rounded-md active hover:text-gray-900 hover:bg-gray-100 w-full dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`} aria-current="page">
                    {<tab.icon size={24} className="w-10 h-4 me-2 text-gray-900 dark:text-gray-200" />}
                    {tab.to[0].toUpperCase() + tab.to.slice(1)} Settings
                </NavLink>
            </li>
        ))}
        {/* <li >
            <NavLink to="/settings/admin" className={({ isActive }) => `${isActive ? 'bg-gray-300 text-gray-900 dark:bg-gray-400 dark:text-gray-800' : ''} inline-flex bg-gray-50 items-center px-4 py-3 rounded-md active hover:text-gray-900 hover:bg-gray-100 w-full dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`} >
                <svg className="w-10 h-4 me-2 text-gray-500 dark:active:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                Admin Settings
            </NavLink>
        </li> */}
    </ul>
}

function ContentSettings({ children }: { children: ReactNode }) {
    return <div
        className="md:flex">
        <TabSettings />
        <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
            {children}
        </div>
    </div >
}

export default function SystemSettings() {
    return (
        <div>
            <HeadingSettings />
            <ContentSettings>
                <Outlet />
            </ContentSettings>
        </div>
    )
}
