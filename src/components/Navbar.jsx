// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div className='py-4 bg-[#F2F3F4]'>

//         <div className='flex justify-between px-24 items-center'>
//             <div>
//             <Link to={'/'}><p className='font-bold text-4xl'>Henry</p></Link>
//         </div>

//         <div className='flex gap-x-9'>
//         <Link to={'/'}><p className='font-medium text-2xl'>Work</p></Link>
//         <p className='font-medium text-2xl'>About</p>
//         <Link to={'/tools'}><p className='font-medium text-2xl'>Tools</p></Link>
//         </div>

//         <div>
//         <Link to={'/contact'}><button className='bg-black text-white px-9 py-2 rounded-2xl'>Contact</button></Link>
//         </div>
        
//         </div>

//     </div>
//   )
// }

// export default Navbar

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='py-4 bg-[#F2F3F4] relative'>
      <div className='container mx-auto px-4 md:px-24'>
        <div className='flex justify-between items-center'>
          <Link to='/'>
            <p className='font-bold text-3xl md:text-4xl'>Henry</p>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className='md:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className='hidden md:flex gap-x-9'>
            <Link to='/'><p className='font-medium text-xl md:text-2xl'>Work</p></Link>
            <p className='font-medium text-xl md:text-2xl'>About</p>
            <Link to='/tools'><p className='font-medium text-xl md:text-2xl'>Tools</p></Link>
          </div>

          <div className='hidden md:block'>
            <Link to='/contact'>
              <button className='bg-black text-white px-6 md:px-9 py-2 rounded-2xl hover:bg-gray-800'>
                Contact
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden absolute top-full left-0 right-0 bg-white py-4 px-4 shadow-lg z-50'>
            <div className='flex flex-col gap-y-4'>
              <Link to='/' onClick={() => setIsMenuOpen(false)}>
                <p className='font-medium text-xl'>Work</p>
              </Link>
              <p className='font-medium text-xl'>About</p>
              <Link to='/tools' onClick={() => setIsMenuOpen(false)}>
                <p className='font-medium text-xl'>Tools</p>
              </Link>
              <Link to='/contact' onClick={() => setIsMenuOpen(false)}>
                <button className='bg-black text-white px-6 py-2 rounded-2xl w-full hover:bg-gray-800'>
                  Contact
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar