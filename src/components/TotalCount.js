import React from 'react'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function TotalCount({ name, total, percent }) {
    return (<>

        <div className='bg-slate-800 w-full md:w-44 my-2 lg:my-0 p-3 rounded-md flex flex-col  justify-between'>
            <LocalMallIcon fontSize='large' className='text-blue-200 bg-blue-800 rounded-md p-2' />
            <p className='text-sm' >  Total Order</p>
            <div className="flex justify-between items-end">
                <h1 className='text-2xl font-bold' >75</h1>
                <h3 className='text-green-600 font-bold text-sm' ><ArrowDropUpIcon />3%</h3>
            </div>
        </div>

        <div className='bg-slate-800 w-full md:w-44 my-2 lg:my-0 p-3 rounded-md flex flex-col  justify-between'>
            <LocalMallIcon fontSize='large' className='text-green-200 bg-green-800 rounded-md p-2' />
            <p className='text-sm' >  Total Order</p>
            <div className="flex justify-between items-end">
                <h1 className='text-2xl font-bold' >75</h1>
                <h3 className='text-red-600 font-bold text-sm' ><ArrowDropDownIcon />3%</h3>
            </div>
        </div>

        <div className='bg-slate-800 w-full md:w-44 my-2 lg:my-0 p-3 rounded-md flex flex-col  justify-between'>
            <LocalMallIcon fontSize='large' className='text-red-200 bg-red-800 rounded-md p-2' />
            <p className='text-sm' >  Total Order</p>
            <div className="flex justify-between items-end">
                <h1 className='text-2xl font-bold' >75</h1>
                <h3 className='text-green-600 font-bold text-sm' ><ArrowDropUpIcon />3%</h3>
            </div>
        </div>

        <div className='bg-slate-800 w-full md:w-44 my-2 lg:my-0 p-3 rounded-md flex flex-col  justify-between'>
            <LocalMallIcon fontSize='large' className='text-pink-200 bg-pink-800 rounded-md p-2' />
            <p className='text-sm' >  Total Order</p>
            <div className="flex justify-between items-end">
                <h1 className='text-2xl font-bold' >75</h1>
                <h3 className='text-red-600 font-bold text-sm' ><ArrowDropDownIcon />3%</h3>
            </div>
        </div>
    </>
    )
}
