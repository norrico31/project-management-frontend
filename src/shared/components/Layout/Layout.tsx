import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from './Topbar'
import Sidebar from './Sidebar'


export default function Layout() {
    const [open, setOpen] = useState(window.innerWidth >= 768)
    return (
        <section className='flex h-full'>
            <Sidebar open={open} onClick={() => setOpen(!open)} />
            <section className="flex flex-col flex-1 bg-white dark:bg-gray-900 dark:text-white">
                <main className="transition-all">
                    <div className={`sm:ml-${open ? '64' : '0'} transition-all h-screen`}>
                        <Topbar onClick={() => setOpen(!open)} />
                        <div className='rounded-md dark:bg-white/5 p-5 m-2'>
                            <Outlet />
                        </div>
                    </div>
                </main>
            </section>
        </section>
    )
}
