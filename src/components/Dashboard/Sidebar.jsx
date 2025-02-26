import React from 'react'
import { House, BadgeDollarSign, CircleUser, HelpCircle, CalendarCheck2, ListCheck, Settings, BriefcaseBusiness } from 'lucide-react'

function Sidebar() {
    return (
        <div className='w-56 h-screen border-r-1 border-zinc-300 px-4 cursor-default '>
            <h2 className='py-6 w-full px-4 font-bold text-zinc-500 text-sm'>GENERAL</h2>
            <div>
                <div className='flex gap-4 hover:bg-[#e1f7ef] hover:text-green-800 rounded-lg items-center p-2 pl-4'>
                    <House size={20} />
                    <p>Overview</p>
                </div>
                <div className='flex gap-4 hover:bg-[#e1f7ef] hover:text-green-800 rounded-lg items-center p-2 pl-4'>
                    <BadgeDollarSign size={20} />
                    <p>Payroll</p>
                </div>
                <div className='flex gap-4 hover:bg-[#e1f7ef] hover:text-green-800 rounded-lg items-center p-2 pl-4'>
                <CalendarCheck2 size={20} />
                    <p>Attendance</p>
                </div>
            </div>
            <h2 className='py-6 w-full px-4 font-bold text-zinc-500 text-sm'>Management</h2>
            <div>
                <div className='flex gap-4 hover:bg-[#e1f7ef] hover:text-green-800 rounded-lg items-center p-2 pl-4'>
                    <BriefcaseBusiness size={20} />
                    <p>Tasks</p>
                </div>
                <div className='flex gap-4 hover:bg-[#e1f7ef] hover:text-green-800 rounded-lg items-center p-2 pl-4'>
                    <ListCheck size={20} />
                    <p>Todo</p>
                </div>
            </div>
            <h2 className='py-6 w-full px-4 font-bold text-zinc-500 text-sm'>SUPPORT</h2>
            <div>
                <div className='flex gap-4 hover:bg-[#e1f7ef] hover:text-green-800 rounded-lg items-center p-2 pl-4'>
                    <HelpCircle size={20} />
                    <p>Help Center</p>
                </div>
                <div className='flex gap-4 hover:bg-[#e1f7ef] hover:text-green-800 rounded-lg items-center p-2 pl-4'>
                    <Settings size={20} />
                    <p>Settings</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
