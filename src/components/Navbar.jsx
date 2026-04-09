import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/RecipeLogo.png"

const Navbar = () => {
  return (
    <div className=' flex justify-between  px-5 py-5'>
        <Link to='/'>
            <img src={logo} alt="logo" className='w-32 h-32' />
        </Link>

        <div className='flex gap-5 items-start py-3'>
            <Link to='/' className='bg-purple-800 rounded text-white font-semibold px-3 py-2 active:scale-95'>Search</Link>
            <Link to='/Favourites' className='bg-purple-800 rounded text-white font-semibold px-3 py-2 active:scale-95'>Favourites</Link>
        </div>
    </div>
  )
}

export default Navbar