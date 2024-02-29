import React from 'react'

export default function HowItWorks() {
  return (
    <div>
        <h2 className='text-blue-400 text-5xl text-center'>How it works</h2>
        <div className='grid grid-cols-4 gap-10 p-10 h-56'>
          <div className='bg-blue-400 text-white p-3 rounded'>
            Register
          </div>
          <div className='bg-blue-400 text-white p-3 rounded'>
            Choose investment category
          </div>
          <div className='bg-blue-400 text-white p-3 rounded'>
            choose investment plan
          </div>
          <div className='bg-blue-400 text-white p-3 rounded'>
            Start investing
          </div>
        </div>
    </div>
  )
}
