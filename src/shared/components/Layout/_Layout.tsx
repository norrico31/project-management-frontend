import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';
import Topbar from './Topbar'
import Sidebar from './Sidebar'

export default function Layout() {
    const isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
    const [open, setOpen] = useState(!isTabletMid)

    const toggleSidebar = () => setOpen(!open)
    const sidebarMargin = open ? 'ml-64' : 'ml-0'
    const isResponsive = `${!isTabletMid ? '' : 'sm:'}${sidebarMargin}`
    console.log(isResponsive)
    return (
        <section className='flex h-full'>
            <Sidebar open={open} onClick={toggleSidebar} />
            <section className="flex flex-col flex-1 bg-white dark:bg-gray-900 dark:text-white">
                <main className={`${isResponsive} transition-all`}>
                    <div className={`transition-all h-screen`}>
                        <Topbar onClick={toggleSidebar} />
                        <div className='rounded-md dark:bg-white/5 p-5 m-2'>
                            <Outlet />
                        </div>
                    </div>
                </main>
            </section>
        </section>
    )
}
