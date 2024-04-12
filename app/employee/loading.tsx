import React, { Suspense } from 'react'

const loading = () => {
  return (
    <Suspense fallback={<p>loading ....</p>}></Suspense>
   
  )
}

export default loading