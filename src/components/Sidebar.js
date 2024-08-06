import React from 'react'
import WidgetsIcon from '@mui/icons-material/Widgets';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalMallIcon from '@mui/icons-material/LocalMall';
export default function Sidebar() {
  return (
    <div className='bg-slate-800  min-h-full  py-3  text-center '>
        <WidgetsIcon fontSize="large" className='text-blue-500' />
        <div className='pt-5 flex flex-col space-y-4'>
        <Link className='border-l-4 border-blue-500 block py-2 text-blue-500'><HomeIcon fontSize="large" /></Link>
       <Link className='block py-2'><AssessmentIcon/></Link>
       <Link className='block py-2'><AssignmentTurnedInIcon/></Link>
       <Link className='block py-2'><AccountBalanceWalletIcon/></Link>
       <Link className='block py-2'><LocalMallIcon/></Link>
        </div>
    </div>
  )
}
