import React from 'react'
import Navbar from '../components/Navbar'

const Contact = () => {
  return (
    <div>
        <Navbar />

<div className='flex justify-center items-center h-[100vh]'>
<div className='px-6 pt-[150px] w-[1000px] mx-auto'>
        <p className='font-medium text-xl'>SEND ME A MESSAGE</p>
        <p className='font-bold text-6xl max-w-[900px] mt-3'>Send me a message and i'll get back to you within an hour</p>

        <div className='border border-xl bg-gray-200 rounded-xl px-9 py-9 mt-6'>

            <p className='text-lg'>Name</p>
            <input className='w-full px-3 py-2 rounded-md' placeholder='John Doe' />

            <p className='mt-6 text-lg'>Email</p>
            <input className='w-full px-3 py-2 rounded-md' placeholder='johndoe@gmail.com' />

            <p className='text-lg mt-6'>Message</p>
            <textarea className='w-full h-[200px] px-3 py-2 rounded-md' placeholder='Let me Know what you have in mind' />

            <div>
            <button className='bg-black rounded-lg text-white w-full py-3 mt-2'>Send Message</button>
            </div>

        </div>
        </div>

        </div>

        </div>
  )
}

export default Contact