import React from 'react'
import type { Metadata } from 'next';


const page = () => {
  const metadata: Metadata = {
    title: 'review page',
    description: 'this is a review page'

  };
  async function submitData(formdata:FormData){
    'use server'
    const rawData ={
      userName:formdata.get('userName'),
    }
  }

  return (
    
      <form action={submitData}>
      <input type='text' name='userName'/>
      <button type='submit'>submit</button>
      </form>
    
  )
}

export default page