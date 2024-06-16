import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function Layout() {
    const isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
    const [open, setOpen] = useState(isTabletMid ? false : true);
    return (
        <section className='flex h-full'>
            <Sidebar
                isTabletMid={isTabletMid}
                open={open}
                setOpen={setOpen}
            />
            <section className="flex flex-col flex-1 bg-white dark:bg-neutral-900 dark:text-white">
                <Topbar onClick={() => setOpen(!open)} />
                <main className=" h-full p-5 ">
                    <div className='rounded-md dark:bg-white/5 h-full p-5 '>
                        <Outlet />
                    </div>
                </main>
            </section>
        </section>
    )
}
