import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
export default function Navbar() {
  return (
    <div className='bg-slate-800 p-3 flex flex-wrap  justify-between space-y-2'>
        <div className='flex  w-[200px] md:w-[300px] p-1  rounded bg-gray-700 items-center'>
            <SearchIcon fontSize="small" className='' />
            <input type="text" placeholder='Search' className='bg-transparent ps-2 text-xs font-medium placeholder-white ' />
        </div>
        <div className="flex space-x-3">
            <EmailOutlinedIcon fontSize="large" className='bg-gray-700 rounded-full p-1.5 ' />
            <SettingsOutlinedIcon fontSize="large" className='bg-gray-700 rounded-full p-1.5 ' />
            <NotificationsOutlinedIcon fontSize="large" className='bg-gray-700 rounded-full p-1.5 ' />
            <img src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" width="35px" alt="" />
        </div>

    </div>
  )
}
