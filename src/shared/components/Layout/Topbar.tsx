import React from 'react'
import { MdMenu } from 'react-icons/md'

export default function Topbar({ onClick }: { onClick: () => void }) {
    return (
        <header
            onClick={onClick}
            style={{ outline: '1px solid red', padding: '10px' }}
        >
            <MdMenu size={25} />
        </header>
    )
}
