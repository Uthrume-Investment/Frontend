import React,{useState} from 'react'
import { FiX } from 'react-icons/fi';
import axiosClient from '../AxiosClient';
import { useStateContext } from '../contexts/ContextProvider';
import { Navigate } from 'react-router-dom';

export default function Login({setShowLogin}) {
    const [userData,setUserData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const {setUser,setToken} = useStateContext();






























    
    const handleSignIn = (event) =>{
        event.preventDefault();
        axiosClient.post('/api/login')
        .then((data)=>{
            const user = data.user;
            const token = data.token;

            setToken(token);
            setUser(user);

            <Navigate to="/" />

        })
        .catch((error)=>{
            
        })
    }

  return (
    <form onSubmit={handleSignIn} className='absolute flex flex-col justify-evenly inset-0 z-10 w-1/3 m-auto bg-white rounded-md h-[35rem] p-10 custom__shadow'>
        <button 
        type='button' 
        className='absolute flex items-center justify-center w-10 h-10 text-3xl text-blue-400 transition-all rounded-full right-5 top-5 hover:bg-blue-50/50'
        onClick={()=>{setShowLogin(false)}}
        >
            <FiX />
        </button>
        <label className='flex flex-col justify-evenly'>
            <p className='text-gray-700'>Email</p>
            <input onChange={(e)=>{setUserData({...userData,email: e.target.value})}} className='w-full h-12 p-2 text-blue-400 rounded bg-blue-50 focus:outline-none' type="email" required />
        </label>
        <label className='flex flex-col justify-evenly'>
            <p className='text-gray-700'>Password</p>
            <input onChange={(e)=>{setUserData({...userData,password: e.target.value})}} className='w-full h-12 p-2 text-blue-400 rounded bg-blue-50 focus:outline-none' type="password" required />
        </label>
        <label className='flex flex-col justify-evenly'>
            <p className='text-gray-700'>Confirm Password</p>
            <input onChange={(e)=>{setUserData({...userData,confirmPassword: e.target.value})}} className='w-full h-12 p-2 text-blue-400 rounded bg-blue-50 focus:outline-none' type="password" required />
        </label>
        <button type='submit' className='h-12 text-xl text-white bg-blue-400 rounded-md'>Submit</button>
    </form>
  )
}
