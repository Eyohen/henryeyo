import React from 'react'
import Navbar from '../components/Navbar'
import pigeonhire from '../assets/pigeonhire.png'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <Navbar/>
 
    <div className='bg-white min-h-[100vh] mt-[85px] font-questrial'>


        {/* <p className='text-3xl font-semibold flex justify-center items-center h-[100vh]'>Home</p> */}
        <div className='px-24 pt-4'>

            <p className='text-center pt-4 text-2xl'>Hi I'm Henry Eyo</p>

        <p className='text-6xl font-bold pt-32 slide-from-top'>Build your dream site in days </p>
        <p className='text-4xl mt-5 slide-from-left'>See how we've turned ideas into reality. Dive into the stories of </p>
        <p className='text-4xl text-gray-400 mt-3 slide-from-right'>successful product designs that make a difference.</p>



        <div className='rounded-2xl px-16 py-16 bg-green-100 w-[1500px] h-[500px] mx-auto mt-16 shadow-xl'>

<div className='flex gap-x-[80px]'>

            <div className=''><img src={pigeonhire} className='w-[1300px] shadow-xl'/></div>


<div>
            <p className='font-bold text-xl'>Pigeonhire</p>


            <p className='font-bold text-xl pt-16'>WEB APPLICATION</p>
            <p className='font-bold text-5xl pt-4'>Business directory to secure partnerships in Communities</p>

<div className='flex gap-x-6 pt-9'>
            <Link to={'/casestudy'}><button className='bg-green-500 text-white text-lg px-9 py-4 rounded-2xl'>Case Study</button></Link>
            <Link to={'https://www.pigeonhire.com/'}><button className='border-2 border-green-500 text-green-500 text-lg px-9 py-4 rounded-2xl'>Visit website</button></Link>
            </div>

            </div>


            </div>

        </div>



        {/* <div className='flex justify-center mt-32'>
            <div>
            <div className='orbit-system relative'>

        <div className='center-element absolute bounce-animation'>
          <p className='bg-black rounded-full p-9 w-6 h-6 text-white flex justify-center items-center'>
            LOL
          </p>
        </div>
        

        <p className='partner partner-1 border rounded-md py-2 px-3 shadow-lg w-[110px] flex justify-center font bg-white'>
          Pigeonhire
        </p>
        <p className='partner partner-2 border rounded-md py-2 px-3 shadow-lg w-[110px] flex justify-center font bg-white'>
          Amari
        </p>
        <p className='partner partner-3 border rounded-md py-2 px-3 shadow-lg w-[110px] flex justify-center font bg-white'>
          SolarPaddy
        </p>
        <p className='partner partner-4 border rounded-md py-2 px-3 shadow-lg w-[110px] flex justify-center font bg-white'>
          Mend
        </p>
        <p className='partner partner-5 border rounded-md py-2 px-3 shadow-lg w-[110px] flex justify-center font bg-white'>
          TPN
        </p>
      </div>


        <p className='font-bold text-4xl text-center'>Niggas we've worked for</p>
        <p className='text-xl text-center max-w-[550px] mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

        </div>
        </div>  */}











        </div>
        
        
        </div>
        </>
  )
}

export default Home