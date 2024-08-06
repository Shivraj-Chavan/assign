import React from 'react'

import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
export default function Goal() {
  return (
    <div className=' bg-slate-800 p-3 my-6 md:my-4 md:py-8 rounded-md'>
    <div className="flex justify-between items-center">
        <div className='flex items-center'>
            <div className='p-4 bg-red-400 rounded-full'>
                <ModeStandbyIcon fontSize='large' className=' rounded-full' />
            </div>
            <h3 className='text-xl ps-3'>Goals</h3>
        </div>

        <div className='bg-slate-600 rounded-full' >
        <KeyboardArrowRightIcon fontSize='large'/>
        </div>
        
        </div>
    <div className="flex my-3 justify-between items-center">
        <div className='flex items-center'>
            <div className='p-4 bg-blue-900 text-blue-300 rounded-full'>
                <LunchDiningIcon fontSize='large' className=' rounded-full' />
            </div>
            <h3 className='text-xl ps-3'>Goals</h3>
        </div>

        <div className='bg-slate-600 rounded-full' >
        <KeyboardArrowRightIcon fontSize='large'/>
        </div>
        </div>
    <div className="flex my-3 justify-between items-center">
        <div className='flex items-center'>
            <div className='p-4 bg-green-900 text-green-300 rounded-full'>
                <RoomServiceIcon fontSize='large' className=' rounded-full' />
            </div>
            <h3 className='text-xl ps-3'>Goals</h3>
        </div>
        
        <div className='bg-slate-600 rounded-full' >
        <KeyboardArrowRightIcon fontSize='large'/>
        </div>
    </div>
    </div>
  )
}
