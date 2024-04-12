import { Inter, Roboto_Mono, Teko } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import profilepic from '@/images/download (4).jpeg'

// const inter = Inter({
//     weight: '600',
//     subsets:['latin'],
//     display:'swap'
// })
// const teko = Teko({
//     weight: '600',
//     subsets:['latin'],
//     display:'swap'
// })
export const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap',
  })


const rootlayout = ({ children }:{children:React.ReactNode}) => {
   
    return (
        <div style={{ border: '1px solid black' }} className={roboto_mono.className}>
            <h2>review layout</h2>
            <ul>
                <Link href='/employee'>employee</Link>
            </ul>
            <div>
                {children}
            </div>
            <div style={{border:'3px solid black', width:'300px'}}>
            <Image src={profilepic} alt='no image'></Image>
            </div>
        </div>
    
    )
}

export default rootlayout