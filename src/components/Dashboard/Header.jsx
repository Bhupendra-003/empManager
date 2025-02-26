import React from 'react'
import { HeartHandshake, Settings, Mail, BellRingIcon } from 'lucide-react'
function Header() {
    return (
        <div className='p-4 border-1 gap-2 flex justify-between items-center border-zinc-300'>
            <div className='flex w-64 gap-4 items-center'>
                <HeartHandshake size={40} color='darkgreen' />
                <p className='text-2xl font-bold'>StaffX</p>
            </div>
            <div className='flex justify-between w-full text-xl'>
                <p>Hello Bhupi</p>
                <div className='flex gap-6 items-center'>
                    <Mail size={20} />
                    <BellRingIcon size={20} />
                    <Settings size={20} />
                </div>
            </div>
            <div className='ml-8'>
                <div className='w-10 h-10 bg-zinc-300 rounded-full'>

                </div>
            </div>
        </div>
    )
}

export default Header
