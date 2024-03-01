import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import SignUp from './SignUp';
import { useStateContext } from '../contexts/ContextProvider';
import {InvestIllustrator} from "../assets/logo"


export default function Hero() {
    const [showSignUp, setShowSignUp] = useState(false);
    const {user} = useStateContext();

  return (
    <div className='h-[calc(100dvh-4rem)] p-5 relative bg-gradient-to-r from-blue-50 via-neutral-50 to-white'>
        <div className='absolute flex flex-col w-1/3 gap-3 p-8 top-20 text-wrap'>
            <h1 className='text-[4rem] font-bold text-blue-500'>
                UthruMe Investment
            </h1>
            <p className='mb-3 text-gray-700'>
                Welcome to Uthrume Investment - Your Partner in Financial Growth. Our expert team is dedicated to maximizing your investment potential. Take the first step towards financial security and growth by entrusting your investments to us. Start investing with confidence today.
            </p>
            <div className='flex gap-3'>
                {
                    !user ?
                <button onClick={()=>{setShowSignUp(prev=>!prev)}} className="w-48 text-xl text-white bg-blue-400 rounded h-14">
                    Sign Up
                </button>
                :
                <button onClick={()=>{setShowSignUp(prev=>!prev)}} className="w-48 text-xl text-white bg-blue-400 rounded h-14">
                    Start Investing
                </button>
                }
                <Link to="about">
                    <button className="w-48 text-xl text-gray-700 transition-all rounded h-14 hover:ring-1">
                        Know More...
                    </button>
                </Link>
            </div>
        </div>
        <div className='absolute right-0 top-20'>
            <img src={InvestIllustrator} alt="" />
        </div>
        {showSignUp && <SignUp setShowSignUp={setShowSignUp} />}
    </div>
  )
}
