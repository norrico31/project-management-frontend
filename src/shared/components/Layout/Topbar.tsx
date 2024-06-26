import React from 'react'
import { MdMenu, MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { useThemeCtx } from '../../contexts/DarkMode'

export default function Topbar({ onClick }: { onClick: () => void }) {
    const { theme, toggleTheme } = useThemeCtx()
    return (
        <header className='w-100 p-4 bg-white dark:bg-gray-900 dark:text-white shadow-sm flex justify-between'>
            <div

                onClick={onClick}
            >

                <MdMenu size={25} className='cursor-pointer' />
            </div>
            <div className='flex'>
                <div onClick={toggleTheme} className='cursor-pointer' >
                    {theme ?
                        <MdOutlineLightMode size={25} />
                        :
                        <MdOutlineDarkMode size={25} />
                    }
                </div>
            </div>
        </header>
    )
}
