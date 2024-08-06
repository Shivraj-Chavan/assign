import React from 'react'
import TotalCount from './TotalCount'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ProgressDoughnut from './ProgressDoughnut';
import Goal from './Goal';
import Table from './Table';
import CustomerFeedBack from './CustomerFeedBack';
import graph from '../asset/graph.png'
export default function Dashboard() {
  return (
    <div className='min-h-screen p-4'>
        <h2 className='font-bold text-xl p-4'>Dashboard</h2>
        <div className="flex flex-wrap">
            <div className="w-full md:w-8/12   ">
                <div className="flex justify-center md:space-x-4 flex-wrap">
                <TotalCount/>
                </div>
            </div>
            <div className="w-full md:w-4/12 ">
                <div className="bg-slate-800 rounded-md p-3 flex">
                    <div>
                        <p className='text-xs font-bold'>Net Profit</p>
                        <h1 className='font-bold text-4xl py-3'>$ 6759.25</h1>
                        <h3 className='text-green-600 font-bold text-sm' ><ArrowDropUpIcon/>3%</h3>
                    </div>
                    <div>
                        <ProgressDoughnut/>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-8/12">
                <div className="bg-slate-800 m-4 p-3 rounded-md">
                <h3 className='py-2 font-bold' >Activity</h3>
                <img src={graph} alt="" />
                </div>
            </div>
            <div className="w-full md:w-4/12">
            <Goal/>
            </div>
            <div className="w-full md:w-8/12">
                <Table/>
            </div>
            <div className="w-full md:w-4/12">
                <CustomerFeedBack/>
            </div>
        </div>
    </div>
  )
}
