import React from 'react'
import { MdMenu } from 'react-icons/md'

export default function Topbar({ onClick }: { onClick: () => void }) {
    return (
        <header className='w-100 p-4 bg-white dark:bg-neutral-900 dark:text-white shadow-sm'>
            <div
                onClick={onClick}
            >

                <MdMenu size={25} />
            </div>
        </header>
    )
}
