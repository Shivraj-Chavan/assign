import React from 'react';

export default function Table() {
  return (
    <div className='bg-slate-800 p-4 rounded-e-md m-4'>
      <h3 className='text-white mb-4'>Recent Orders</h3>
      <div className='overflow-x-auto'>
        <table className='table-auto w-full text-center text-white' cellPadding="10px">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Order No.</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='flex items-center p-2'>
                <img src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" width="25px" alt="" />
                <h2 className='ps-3'>Wade Warren</h2>
              </td>
              <td>45455</td>
              <td>$124.00</td>
              <td>
                <span className='bg-green-900 text-green-500 py-1 px-3 rounded-2xl text-xs font-bold'>Delivered</span>
              </td>
            </tr>
            <tr className='border-b'>
              <td className='flex items-center p-2'>
                <img src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" width="25px" alt="" />
                <h2 className='ps-3'>Wade Warren</h2>
              </td>
              <td>45455</td>
              <td>$124.00</td>
              <td>
                <span className='bg-green-900 text-green-500 py-1 px-3 rounded-2xl text-xs font-bold'>Delivered</span>
              </td>
            </tr>
            <tr className='border-b'>
              <td className='flex items-center p-2'>
                <img src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" width="25px" alt="" />
                <h2 className='ps-3'>Wade Warren</h2>
              </td>
              <td>45455</td>
              <td>$124.00</td>
              <td>
                <span className='bg-red-700 text-red-300 py-1 px-3 rounded-2xl text-xs font-bold'>Cancelled</span>
              </td>
            </tr>
            <tr className='border-b'>
              <td className='flex items-center p-2'>
                <img src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" width="25px" alt="" />
                <h2 className='ps-3'>Wade Warren</h2>
              </td>
              <td>45455</td>
              <td>$124.00</td>
              <td>
                <span className='bg-red-700 text-red-300 py-1 px-3 rounded-2xl text-xs font-bold'>Pending</span>
              </td>
            </tr>
            <tr className='border-b'>
              <td className='flex items-center p-2'>
                <img src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" width="25px" alt="" />
                <h2 className='ps-3'>Wade Warren</h2>
              </td>
              <td>45455</td>
              <td>$124.00</td>
              <td>
                <span className='bg-green-900 text-green-500 py-1 px-3 rounded-2xl text-xs font-bold'>Delivered</span>
              </td>
            </tr>
            <tr className='border-b'>
              <td className='flex items-center p-2'>
                <img src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" width="25px" alt="" />
                <h2 className='ps-3'>Wade Warren</h2>
              </td>
              <td>45455</td>
              <td>$124.00</td>
              <td>
                <span className='bg-green-900 text-green-500 py-1 px-3 rounded-2xl text-xs font-bold'>Delivered</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
