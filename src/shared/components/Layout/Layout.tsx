import { useState } from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import { useMediaQuery } from 'react-responsive';

export default function Layout() {
    const isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
    const [open, setOpen] = useState(isTabletMid ? false : true);

    return (
        <div className='relative'>
            <Topbar onClick={() => setOpen(!open)} />
            <Sidebar
                isTabletMid={isTabletMid}
                open={open}
                setOpen={setOpen}
            />
        </div>
    )
}
