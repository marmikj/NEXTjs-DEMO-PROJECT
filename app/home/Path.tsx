'use client'
import { useParams, usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

const Path = () => {
    const pathname=usePathname()
    // const quaryparam= useSearchParams()
    const params = useParams()
    // console.log(pathname,"path")
    // console.log(serachparam,'serachparam')
    // console.log(quaryparam.toString(),"toString")
    console.log({params ,pathname},"params")
  return (
    <div>path</div>
  )
}

export default Path