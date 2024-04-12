import React from 'react'

const companylayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div style={{border:'1px dashed' ,color:'blueviolet'}}>
        <nav>
            [employee List]
        </nav>
        {children}
    </div>
  )
}

export default companylayout