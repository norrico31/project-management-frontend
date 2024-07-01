import { Outlet } from 'react-router-dom'
import Header from './Header';

export default function Layout() {
    return (
        <section className="dark:bg-gray-900 dark:text-white">
            <main className={`transition-all h-screen`}>
                <Header />
                <div className='mt-8 rounded-md bg-white dark:bg-white/5 p-5 m-2 min-h-[830px] overflow-auto'>
                    <Outlet />
                </div>
            </main>
        </section>
    )
}
