import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

const Path = () => {
    const pathname=usePathname()
    const serachparam= useSearchParams()
    console.log(pathname,"path")
    console.log(serachparam,'serachparam')
  return (
    <div>path</div>
  )
}

export default Path