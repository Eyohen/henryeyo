import React, { useState } from 'react'
import pigeonhire from '../assets/pigeonhire.png'
import './Home.css'
import Navbar from '../components/Navbar'
import { BsToggle2Off,BsToggle2On, BsMoon,BsSun} from "react-icons/bs";
import { Link } from 'react-router-dom';

const Home = () => {
  const [isdark, setIsDark] = useState(true);

  const handleIsDark = () => {
    setIsDark(prev => !prev)
  }



  return (
    <div className={` ${isdark ? 'bg-black' : 'bg-white'} overflow-y-auto h-screen`}>
      <Navbar />
      <div className='px-6 md:px-64'>
      <div className='flex justify-center items-center  gap-x-4'>{isdark ? <div onClick={handleIsDark}><BsToggle2Off color='gray' size={35} /></div> : <div onClick={handleIsDark}><BsToggle2On color='gray' size={35} /></div>}  {isdark ? <BsSun size={20} color='white'/> : <BsMoon size={20}/>}</div>  
        <p className='font-bold text-6xl text-gray-400 mt-32 slide-from-top'>Henry Eyo .</p>
        <p className={`font-bold text-6xl mt-4 slide-from-top ${isdark ? 'text-white' : 'text-black'}`}>Full stack Developer</p>

        <p className='font-bold text-6xl text-gray-300 mt-16 slide-from-left'>Featured Projects</p>

        <div className='mt-12 slide-from-left'>
          <div className='flex gap-x-4'>
            <Link to={'/casestudy'}><button className='bg-gray-400 text-white text-lg px-6 py-2 rounded-lg'>Case Study</button></Link>
            <Link to='https://www.pigeonhire.com/'><button className='bg-gray-400 text-white text-lg px-9 py-2 rounded-lg'>Website</button></Link>
          </div>
          <p className={`text-4xl font-bold mt-6 ${isdark ? 'text-white' : 'text-black'}`}>Pigeonhire</p>
          <p className={`mt-6 font-thin text-xl ${isdark ? 'text-white' : 'text-black'}`}>Business directory to secure partnerships in Communities</p>

          <div className='bg-gray-50 px-12 py-10 mt-8 rounded-xl'>
            <img 
              src={pigeonhire} 
              alt="Project Pigeonhire" 
              className='w-full h-auto object-cover mb-4'
            />
      
          </div>
        </div>
      </div>

      <div className='mb-32'></div>
    </div>
  )
}

export default Home
