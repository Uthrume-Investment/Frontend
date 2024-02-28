import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import SignUp from './SignUp';

export default function Hero() {
    const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className='h-[calc(100dvh-4rem)] p-5 relative bg-gradient-to-r from-blue-50 via-neutral-50 to-white'>
        <div className='flex flex-col gap-3  absolute top-1/4 w-1/3 text-wrap'>
            <h1 className='text-[4rem] font-bold text-blue-500'>
                UthroughMe Investment
            </h1>
            <p className='text-gray-700'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste aliquam quia numquam mollitia enim distinctio possimus nostrum aut reprehenderit praesentium.
            </p>
            <div className='flex gap-3'>
                <button onClick={()=>{setShowSignUp(prev=>!prev)}} className="w-48 h-14 rounded text-xl bg-blue-400 text-white">
                    Sign Up
                </button>
                <Link to="about">
                    <button className="w-48 h-14 rounded text-xl text-gray-700 hover:ring-1 transition-all">
                        Know More...
                    </button>
                </Link>
            </div>
        </div>
        {showSignUp && <SignUp />}
    </div>
  )
}
