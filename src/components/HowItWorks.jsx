import React from 'react'
import { FiArrowDown, FiArrowLeft, FiArrowRight } from 'react-icons/fi'

export default function HowItWorks() {
  return (
    <div className='h-auto p-5 bg-red-10'>
        <h2 className='my-3 text-3xl text-blue-400'>How it works</h2>
        
        <div className='grid grid-cols-2 gap-20 p-20'>

          <div className='relative p-5 text-white bg-blue-400 rounded-md h-52'>
            {/* step 1 */}
            <span className='absolute flex items-center justify-center w-16 h-16 text-xl text-blue-400 -translate-x-1/2 bg-white rounded-full shadow-xl inset-x-1/2 -top-8 shadow-blue-400'>1</span>
            <h1 className='mb-2 font-bold'>Register</h1>
            <p className='text-white/80'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat distinctio ipsum numquam mollitia obcaecati nulla vel provident ducimus quisquam odit?
            </p>
            <FiArrowRight className='absolute text-3xl text-blue-400 -right-14 top-1/2' />
          </div>

          <div className='relative p-5 text-white bg-blue-400 rounded-md h-52'>
            {/* step 2 */}
            <span className='absolute flex items-center justify-center w-16 h-16 text-xl text-blue-400 -translate-x-1/2 bg-white rounded-full shadow-xl inset-x-1/2 -top-8 shadow-blue-400'>2</span>
          <h1 className='mb-2 font-bold'>Choose Investment Category</h1>
            <p className='text-white/80'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat distinctio ipsum numquam mollitia obcaecati nulla vel provident ducimus quisquam odit?
            </p>
            <FiArrowDown className='absolute text-3xl text-blue-400 -bottom-10 left-1/2' />
          </div>

          <div className='relative p-5 text-white bg-blue-400 rounded-md h-52'>
            {/* step 4 */}
            <span className='absolute flex items-center justify-center w-16 h-16 text-xl text-blue-400 -translate-x-1/2 bg-white rounded-full shadow-xl inset-x-1/2 -top-8 shadow-blue-400'>4</span>
          <h1 className='mb-2 font-bold'>Invest</h1>
            <p className='text-white/80'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat distinctio ipsum numquam mollitia obcaecati nulla vel provident ducimus quisquam odit?
            </p>
          </div>

          <div className='relative p-5 text-white bg-blue-400 rounded-md h-52'>
            {/* step 3 */}
            <span className='absolute flex items-center justify-center w-16 h-16 text-xl text-blue-400 -translate-x-1/2 bg-white rounded-full shadow-xl inset-x-1/2 -top-8 shadow-blue-400'>3</span>
          <h1 className='mb-2 font-bold'>Choose Investment Plan</h1>
            <p className='text-white/80'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat distinctio ipsum numquam mollitia obcaecati nulla vel provident ducimus quisquam odit?
            </p>
            <FiArrowLeft className='absolute text-3xl text-blue-400 -left-14 top-1/2' />
          </div>
        </div>
    </div>
  )
}
