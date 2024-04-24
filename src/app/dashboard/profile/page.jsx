import React from 'react'
import Link from "next/link";

const page = () => {
  return (
    <Link   prefetch={true} href={"/" }>Profile</Link>  
  )
}

export default page