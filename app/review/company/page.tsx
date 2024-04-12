"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  
    const router=useRouter()
  return (
    <div>
        <h1>US Comapany</h1>
        <button onClick={()=>router.push('/')}>home</button>
    </div>
  )
}

export default page