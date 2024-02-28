import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className='flex justify-between items-center h-16 bg-none p-5'>
        <span>Logo</span>
        <ul className='flex gap-5 items-center'>
            <Link to='/' className='active__link'>Home</Link>
            <Link to='investment_plans'>Investment Plans</Link>
            <Link to='analytics'>Analytics</Link>
            <Link to='legal_info'>Legal Info</Link>
            <Link to='about'>About</Link>
        </ul>
    </nav>
  )
}
