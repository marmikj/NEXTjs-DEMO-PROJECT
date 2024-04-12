'use client'
import { useSelectedLayoutSegment, useSelectedLayoutSegments } from 'next/navigation'
import React from 'react'

const LayoutSegment = () => {
    const layout = useSelectedLayoutSegment()
    const layouts = useSelectedLayoutSegments()
    console.log(layout,"adas")
    console.log(layouts,"asdd")
    return (
    <div>path</div>
  )
}

export default LayoutSegment