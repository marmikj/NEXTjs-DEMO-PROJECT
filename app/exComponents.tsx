'use client'
import { useSelectedLayoutSegment } from 'next/navigation'
import React from 'react'

const exComponents = () => {
    const segment = useSelectedLayoutSegment()
    return <p>Active segment: {segment}</p>
}

export default exComponents