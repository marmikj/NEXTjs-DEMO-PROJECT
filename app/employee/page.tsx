"use client"
import React, { useEffect } from 'react'

const page = () => {
  async function getData() {
    const res = await fetch('https://dummyjson.com/carts' ,{next:{revalidate:8000}})
    const data = res.json()
    console.log(data)
  }
  useEffect(() => {
    getData();
  }, [])

  return (
    <div style={{ color: 'darkgreen' }}>
      <h3>employee of company</h3>
      <div>
      </div>
    </div>
  )
}

export default page