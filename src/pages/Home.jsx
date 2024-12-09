// import React from 'react'
// import Navbar from '../components/Navbar'
// import pigeonhire from '../assets/pigeonhire.png'
// // import './Home.css'
// import { Link } from 'react-router-dom'


// const Home = () => {

//   return (
//     <>
//     {/* <Navbar/> */}
//     <div className="font-questrial"> {/* Wrapper div */}



//             {/* <div className='w-[1500px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-8'> */}

//             <p className='text-3xl text-gray-400 md:text-4xl lg:text-6xl font-bold mt-8 md:mt-16 slide-from-top'>
//               Henry Eyo .
//             </p>
//             <p className='text-3xl md:text-4xl lg:text-6xl font-bold mt-4 md:mt-4 slide-from-top'>
//               Fullstack Developer
//             </p>
            
//             <div className='mt-32'> {/* Added spacing for paragraphs */}
//               <p className='text-xl md:text-2xl lg:text-4xl slide-from-left'>
//                 Featured Projects
//               </p>

//             </div>


//         <div className='mt-16'>
//         <div className='flex gap-x-4 '>
//                     <Link to='/casestudy' className='w-full sm:w-auto'>
//                       <button className='w-full bg-gray-400 text-white text-lg px-6 md:px-9 py-2 md:py-3 rounded-2xl transition-colors'>
//                         Web Design
//                       </button>
//                     </Link>
//                     <Link to='https://www.pigeonhire.com/' className='w-full sm:w-auto'>
//                       <button className='w-full bg-gray-400 text-white text-lg px-6 md:px-9 py-2 md:py-3 rounded-2xl hover:text-white transition-colors'>
//                         Visit website
//                       </button>
//                     </Link>
//                   </div>
//                   <p className='font-bold text-4xl mt-9'>Pigeonhire</p>
//                     <p className='text-xl md:text-2xl lg:text-2xl mt-9'>
//                       Business directory to secure partnerships in Communities
//                     </p>

//             <div className='rounded-2xl p-4 md:p-8 lg:p-16 bg-gray-50 mt-4 shadow-xl slide-from-right w-[500px]'>

//                 <div className=''>
//                   <img 
//                     src={pigeonhire} 
//                     className='shadow-xl rounded-lg'
//                     alt="Pigeonhire preview"
//                   />
//                 </div>

//               </div>
           
//             </div>


//         {/* </div> */}
      

//     </div>
  
//     </>
//   )
// }

// export default Home

import React, { useState } from 'react'
import pigeonhire from '../assets/pigeonhire.png'
import './Home.css'
import Navbar from '../components/Navbar'
import { BsToggle2Off,BsToggle2On, BsMoon,BsSun} from "react-icons/bs";

const Home = () => {
  const [isdark, setIsDark] = useState(false);

  const handleIsDark = () => {
    setIsDark(prev => !prev)
  }



  return (
    <div className={` ${isdark ? 'bg-black' : 'bg-white'} overflow-y-auto h-screen`}>
      <Navbar />
      <div className='px-64'>
      <div className='flex justify-center items-center  gap-x-4'>{isdark ? <div onClick={handleIsDark}><BsToggle2Off color='gray' size={35} /></div> : <div onClick={handleIsDark}><BsToggle2On color='gray' size={35} /></div>}  {isdark ? <BsSun size={20} color='white'/> : <BsMoon size={20}/>}</div>  
        <p className='font-bold text-6xl text-gray-400 mt-32'>Henry Eyo .</p>
        <p className={`font-bold text-6xl mt-4 ${isdark ? 'text-white' : 'text-black'}`}>Full stack Developer</p>

        <p className='font-bold text-6xl text-gray-300 mt-32'>Featured Projects</p>

        <div className='mt-12'>
          <div className='flex gap-x-4'>
            <button className='bg-gray-400 text-white text-lg px-6 py-2 rounded-lg'>Case Study</button>
            <button className='bg-gray-400 text-white text-lg px-9 py-2 rounded-lg'>Website</button>
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