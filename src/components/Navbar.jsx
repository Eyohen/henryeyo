import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 right-0 py-4 bg-[#F2F3F4]'>

        <div className='flex justify-between px-24 items-center'>
            <div>
            <Link to={'/'}><p className='font-bold text-4xl'>Henry</p></Link>
        </div>

        <div className='flex gap-x-9'>
        <Link to={'/'}><p className='font-medium text-2xl'>Work</p></Link>
        <p className='font-medium text-2xl'>About</p>
        <Link to={'/tools'}><p className='font-medium text-2xl'>Tools</p></Link>
        </div>

        <div>
        <Link to={'/contact'}><button className='bg-black text-white px-9 py-2 rounded-2xl'>Contact</button></Link>
        </div>
        
        </div>

    </div>
  )
}

export default Navbar