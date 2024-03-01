import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider';
import Login from './Login';
import {logo} from "../assets/logo.js";

export default function NavBar() {
  const [showLogin,setShowLogin] = useState(false);
  const {user,token} = useStateContext();
  const location = useLocation();
  
  return (
    <nav className='flex items-center justify-between h-16 p-5 bg-none'>
        <span>
          <img src={logo} alt="" />
        </span>
        <ul className='flex items-center gap-5'>
            <Link to='/' className={`${location.pathname === '/' && 'active__link'}`}>Home</Link>
            <Link to='investment_plans' className={`${location.pathname === '/investment_plans' && 'active__link'}`}>Investment Plans</Link>
            <Link to='analytics' className={`${location.pathname === '/analytics' && 'active__link'} pointer-events-none opacity-50 cursor-not-allowed`}>Analytics</Link>
            <Link to='legal_info' className={`${location.pathname === '/legal_info' && 'active__link'}`}>Legal Info</Link>
            <Link to='about' className={`${location.pathname === '/about' && 'active__link'}`}>About</Link>
            {
              ( token && user) ?
              <Link to="/dashboard">Dashboard</Link>
              :
              <button onClick={()=>{setShowLogin(prev => !prev)}} className="px-2 py-1 transition-all rounded hover:bg-blue-400 hover:text-white ring-1 ring-blue-400">Login</button>
            }
            {
              showLogin && <Login setShowLogin={setShowLogin} />
            }
        </ul>
    </nav>
  )
}
