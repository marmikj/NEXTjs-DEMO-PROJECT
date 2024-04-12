import React from 'react'
import LayoutSegment from './LayoutSegment'
const HomeLayout = ({children } :any) => {
  return (
    <div>
        <LayoutSegment/>
        {children}
        
        </div>
  )
}

export default HomeLayout