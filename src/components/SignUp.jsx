import React,{useState} from 'react'
import { FiX } from 'react-icons/fi';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import { auth } from '../utils/firebase';

export default function SignUp({setShowSignUp}) {
    const [stage,setStage] = useState(0);
    const [selectedBtn,setSelectedBtn] = useState(null);
    const [userData,setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: ''
    });
    const [investmentType,setInvestmentType] = useState({
        name: ''
    });
    const {setToken, setUser} = useStateContext();
    
    const handleSignUp = async(event) =>{
        event.preventDefault();


    }

    return (
            stage == 0 ? 
            <form className='absolute flex flex-col justify-evenly inset-0 z-10 w-1/3 m-auto bg-white rounded-md h-[35rem] p-10 custom__shadow'>
                <button 
                type='button' 
                className='absolute flex items-center justify-center w-10 h-10 text-3xl text-blue-400 transition-all rounded-full right-5 top-5 hover:bg-blue-50/50'
                onClick={()=>{setShowSignUp(false)}}
              >
                  <FiX />
              </button>
                <h2>Choose Investment Persona</h2>
                <div className='flex items-center justify-evenly'>
                <button 
                onClick={(e) => {
                    if (selectedBtn !== 0) {
                        setSelectedBtn(0);
                        setInvestmentType({ name: "investor" });
                    }
                }}
                type='button' 
                className={`w-24 h-12 rounded-full ring-1 ring-blue-100 ${selectedBtn === 0 && 'bg-blue-400 text-white'}`}
                >
                Investor
                </button>
                <button 
                onClick={() => {
                    if (selectedBtn !== 1) {
                        setSelectedBtn(1);
                        setInvestmentType({ name: 'start up' });
                    }
                }}
                type='button'
                className={`w-24 h-12 rounded-full ring-1 ring-blue-100 ${selectedBtn === 1 && 'bg-blue-400 text-white'}`} 
                >
                Start Up
                </button>
                </div>
                {
                    investmentType.name &&
                    <button type='button' onClick={()=>{setStage(1)}} className='w-24 h-12 text-white bg-blue-400 rounded'>Next</button>
                }
            </form>
            :
            <form onSubmit={handleSignUp} className='absolute flex flex-col justify-evenly inset-0 z-10 w-1/3 m-auto bg-white rounded-md h-[35rem] p-10 custom__shadow'>
              <button 
              type='button' 
              className='absolute flex items-center justify-center w-10 h-10 text-3xl text-blue-400 transition-all rounded-full right-5 top-5 hover:bg-blue-50/50'
              onClick={()=>{setShowSignUp(false)}}
              >
                  <FiX />
              </button>
              <h1 className='text-4xl text-center text-blue-400'>Sign Up</h1>
              <label className='flex flex-col justify-evenly'>
                  <p className='text-gray-700'>First Name</p>
                  <input onChange={(e)=>{setUserData({...userData,firstName: e.target.value})}} className='w-full h-12 p-2 text-blue-400 rounded bg-blue-50 focus:outline-none' type="text" />
              </label>
              <label className='flex flex-col justify-evenly'>
                  <p className='text-gray-700'>Last Name</p>
                  <input onChange={(e)=>{setUserData({...userData,lastName: e.target.value})}} className='w-full h-12 p-2 text-blue-400 rounded bg-blue-50 focus:outline-none' type="text" />
              </label>
              <label className='flex flex-col justify-evenly'>
                  <p className='text-gray-700'>Email</p>
                  <input onChange={(e)=>{setUserData({...userData,email: e.target.value})}} className='w-full h-12 p-2 text-blue-400 rounded bg-blue-50 focus:outline-none' type="email" />
              </label>
              <label className='flex flex-col justify-evenly'>
                  <p className='text-gray-700'>Phone Number</p>
                  <input onChange={(e)=>{setUserData({...userData,phoneNumber: e.target.value})}} className='w-full h-12 p-2 text-blue-400 rounded bg-blue-50 focus:outline-none' type="tel" />
              </label>
              <label className='flex flex-col justify-evenly'>
                  <p className='text-gray-700'>Password</p>
                  <input onChange={(e)=>{setUserData({...userData,password: e.target.value})}} className='w-full h-12 p-2 text-blue-400 rounded bg-blue-50 focus:outline-none' type="password" />
              </label>
              <button type='submit' className='h-12 text-xl text-white bg-blue-400 rounded-md'>Submit</button>
            </form>
    );
}
