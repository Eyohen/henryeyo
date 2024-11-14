// import React from 'react'
// import Navbar from '../components/Navbar'
// import pigeonhire from '../assets/pigeonhire.png'
// import './Home.css'
// import { Link } from 'react-router-dom'

// const Home = () => {
//   return (
//     <>
//         <Navbar/>
 
//     <div className='bg-white min-h-[100vh] mt-[85px] font-questrial'>


//         {/* <p className='text-3xl font-semibold flex justify-center items-center h-[100vh]'>Home</p> */}
//         <div className='px-24 pt-4'>

//             <p className='text-center pt-4 text-2xl'>Hi I'm Henry Eyo</p>

//         <p className='text-6xl font-bold pt-32 slide-from-top'>Build your dream site in days </p>
//         <p className='text-4xl mt-5 slide-from-left'>See how we've turned ideas into reality. Dive into the stories of </p>
//         <p className='text-4xl text-gray-400 mt-3 slide-from-right'>successful product designs that make a difference.</p>



//         <div className='rounded-2xl px-16 py-16 bg-green-100 w-[1500px] h-[500px] mx-auto mt-16 shadow-xl'>

// <div className='flex gap-x-[80px]'>

//             <div className=''><img src={pigeonhire} className='w-[1300px] shadow-xl'/></div>


// <div>
//             <p className='font-bold text-xl'>Pigeonhire</p>


//             <p className='font-bold text-xl pt-16'>WEB APPLICATION</p>
//             <p className='font-bold text-5xl pt-4'>Business directory to secure partnerships in Communities</p>

// <div className='flex gap-x-6 pt-9'>
//             <Link to={'/casestudy'}><button className='bg-green-500 text-white text-lg px-9 py-4 rounded-2xl'>Case Study</button></Link>
//             <Link to={'https://www.pigeonhire.com/'}><button className='border-2 border-green-500 text-green-500 text-lg px-9 py-4 rounded-2xl'>Visit website</button></Link>
//             </div>

//             </div>


//             </div>

//         </div>

//         </div>
        
        
//         </div>
//         </>
//   )
// }

// export default Home

import React from 'react'
import Navbar from '../components/Navbar'
import pigeonhire from '../assets/pigeonhire.png'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className='bg-white min-h-screen mt-[85px] font-questrial'>
        <div className='container mx-auto px-4 md:px-8 lg:px-16 xl:px-24'>
          <p className='text-center pt-4 text-xl md:text-2xl'>Hi I'm Henry Eyo</p>

          <p className='text-3xl md:text-4xl lg:text-6xl font-bold pt-12 md:pt-32 slide-from-top'>
            Build your dream site in days
          </p>
          
          <p className='text-xl md:text-2xl lg:text-4xl mt-4 md:mt-5 slide-from-left'>
            See how we've turned ideas into reality. Dive into the stories of
          </p>
          
          <p className='text-xl md:text-2xl lg:text-4xl text-gray-400 mt-2 md:mt-3 slide-from-right'>
            successful product designs that make a difference.
          </p>

          <div className='rounded-2xl p-4 md:p-8 lg:p-16 bg-green-100 w-full mt-8 md:mt-16 shadow-xl overflow-hidden slide-from-right'>
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-x-[80px]'>
              <div className='w-full lg:w-3/5'>
                <img 
                  src={pigeonhire} 
                  className='w-full h-auto shadow-xl rounded-lg'
                  alt="Pigeonhire preview"
                />
              </div>

              <div className='w-full lg:w-2/5'>
                <p className='font-bold text-xl'>Pigeonhire</p>

                <p className='font-bold text-xl pt-8 lg:pt-16'>WEB APPLICATION</p>
                <p className='font-bold text-2xl md:text-3xl lg:text-5xl pt-4'>
                  Business directory to secure partnerships in Communities
                </p>

                <div className='flex flex-col sm:flex-row gap-4 sm:gap-x-6 pt-6 md:pt-9'>
                  <Link to='/casestudy'>
                    <button className='w-full sm:w-auto bg-green-500 text-white text-lg px-6 md:px-9 py-3 md:py-4 rounded-2xl hover:bg-green-600 transition-colors'>
                      Case Study
                    </button>
                  </Link>
                  <Link to='https://www.pigeonhire.com/'>
                    <button className='w-full sm:w-auto border-2 border-green-500 text-green-500 text-lg px-6 md:px-9 py-3 md:py-4 rounded-2xl hover:bg-green-50 transition-colors'>
                      Visit website
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mb-12'></div>
      </div>
    </>
  )
}

export default Home