import { useState } from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import { useMediaQuery } from 'react-responsive';

export default function Layout() {
    const isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
    const [open, setOpen] = useState(isTabletMid ? false : true);

    return (
        <div className='flex h-full'>
            <Sidebar
                isTabletMid={isTabletMid}
                open={open}
                setOpen={setOpen}
            />
            <div className="flex flex-col flex-1">
                <Topbar onClick={() => setOpen(!open)} />
                <div className="h-full p-5">
                    <h1>ha</h1>
                </div>

            </div>
        </div>
    )
}
