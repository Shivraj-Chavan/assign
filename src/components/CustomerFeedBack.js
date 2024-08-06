import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
export default function CustomerFeedBack() {
  return (
    <div className='bg-slate-800 my-4 p-3 px-4 rounded-md'>
        <h2 className='font-bold text-xl' >Customer's Feedback</h2>
        <div className='border-b-2 py-3'>
            <div className="flex items-center">
            <img src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" width="35px" alt="" />
            <p className='ps-3 font-bold'>Jenny Wilson</p>
            </div>
            <div className="flex  py-2">
                <StarRateIcon className='text-yellow-400' />
                <StarRateIcon className='text-yellow-400' />
                <StarRateIcon className='text-yellow-400' />
                <StarRateIcon className='text-yellow-400' />
                <StarRateIcon className='text-slate-100' />
            </div>
            <p className='text-sm' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae asperiores fugiat dicta voluptatibus labore, a cumque animi accusantium culpa suscipit?</p>
        </div>
        <div className='border-b-2 py-3'>
            <div className="flex items-center">
            <img src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" width="35px" alt="" />
            <p className='ps-3 font-bold'>Dianne Rusell</p>
            </div>
            <div className="flex  py-2">
                <StarRateIcon className='text-yellow-400' />
                <StarRateIcon className='text-yellow-400' />
                <StarRateIcon className='text-yellow-400' />
                <StarRateIcon className='text-yellow-400' />
                <StarRateIcon className='text-yellow-400' />
            </div>
            <p className='text-sm' >Lorem ipsum  labore, a cumque animi accusantium culpa suscipit?</p>
        </div>
        <div className='border-b-2 py-3'>
            <div className="flex items-center">
            <img src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" width="35px" alt="" />
            <p className='ps-3 font-bold'>Jenny Wilson</p>
            </div>
            <div className="flex  py-2">
                <StarRateIcon className='text-yellow-400' />
                <StarRateIcon className='text-yellow-400' />
                <StarRateIcon className='text-yellow-400' />
                <StarRateIcon className='text-yellow-400' />
                <StarRateIcon className='text-slate-100' />
            </div>
            <p className='text-sm' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae asperiores fugiat dicta voluptatibus labore, a cumque animi accusantium culpa suscipit?</p>
        </div>
    </div>
  )
}
