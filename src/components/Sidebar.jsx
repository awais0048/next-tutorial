import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className='flex flex-col px-3 pt-3 bg-blue-950 w-36 h-full text-white'>
      <h1 className='text-lg text-center'>Online Shop</h1>
      <div className='flex flex-col text-center text-lg pt-8 '>
        <Link prefetch={true} className='group hover:bg-gray-400 rounded-lg relative flex items-center gap-2.5 px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4' scroll={false} href='/dashboard'>Dashboard</Link>
        <Link prefetch={true} className='group hover:bg-gray-400 rounded-lg relative flex items-center gap-2.5 px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4' scroll={false} href='/dashboard/profile'>Profile</Link>
      </div>
    </div>
  );
};

export default Sidebar;
