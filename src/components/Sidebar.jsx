import React from 'react'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className='flex flex-col gap-3 pt-4 w-36 h-full bg-black text-white'>

       <Link scroll={false} href={"/dashboard/profile"}>Profile</Link> 
       <Link scroll={false} href={"/dashboard"}>Dashboard</Link> 
    </div>
  )
}

export default Sidebar