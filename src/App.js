import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'

export default function App() {
  return (
    <div className='bg-slate-950 text-white'>
      <div className="flex">
        <div className="w-20">
        <Sidebar/>
        </div>
        <div className="w-11/12 h-full bg-slate-950">
        <Navbar/>
        <Dashboard/>
        </div>
      </div>
    </div>
  )
}
