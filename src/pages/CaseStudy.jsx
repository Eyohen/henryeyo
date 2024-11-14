// import React from 'react'
// import Navbar from '../components/Navbar'
// import pigeonhire from '../assets/pigeonhire.png'
// import pigeonpricing from '../assets/pigeonpricing.png'
// import pigeonfaq from '../assets/pigeonfaq.png'


// const CaseStudy = () => {
//   return (
//     <div>
//         <Navbar/>

//         <div className='mt-[185px] px-48'>
        
//         <p className=''>WEB APPLICATION</p>
//         <p className='font-bold text-5xl pt-4'>Business directory to secure partnerships in Communities</p>


// <div className='flex justify-center gap-x-32 pt-24'>
//         <div>
//         <p className='text-xl'>COMPANY</p>
//         <p className='font-bold text-2xl'>Pigeonhire</p>
//         </div>

//         <div>
//         <p className='text-xl'>ROLE</p>
//         <p className='font-bold text-2xl'>Fullstack Engineer</p>
//         </div>

//         <div>
//         <p className='text-xl'>EXPERTISE</p>
//         <p className='font-bold text-2xl'>Fullstack development</p>
//         </div>
//         </div>

        
//         <div className='rounded-2xl px-16 py-24 bg-green-100  mx-auto mt-16 shadow-xl'>


//         <div className='flex justify-center gap-x-4'>
//             <img src={pigeonhire} className='w-[500px] object-cover transition-all duration-500 ease-in-out transform hover:w-[850px]' />

//             <img src={pigeonpricing} className='w-[500px] object-cover transition-all duration-500 ease-in-out transform hover:w-[850px]'/>

//             <img src={pigeonfaq} className='w-[500px] object-cover transition-all duration-500 ease-in-out transform hover:w-[850px]'/>
//             </div>


//         </div>



//         </div>

//         <div className='mb-12'></div>
        
//         </div>
//   )
// }

// export default CaseStudy

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import pigeonhire from '../assets/pigeonhire.png';
import pigeonpricing from '../assets/pigeonpricing.png';
import pigeonfaq from '../assets/pigeonfaq.png';

const CaseStudy = () => {

  const [frame1, setFrame1] = useState(true)
  const [frame2, setFrame2] = useState(false)
  const [frame3, setFrame3] = useState(false)


  const handleFrame1 = () => {
  
      setFrame1(true)
      setFrame2(false)
      setFrame3(false)
  
  }

  const handleFrame2 = () => {

      setFrame2(true)
      setFrame1(false)
      setFrame3(false)
    
  }

  const handleFrame3 = () => {
  
      setFrame3(true)
      setFrame1(false)
      setFrame2(false)
  
  }


  return (
    <div>
      <Navbar/>

      <div className='mt-[185px] px-48'>
        <p className=''>WEB APPLICATION</p>
        <p className='font-bold text-5xl pt-4'>Business directory to secure partnerships in Communities</p>

        <div className='flex justify-center gap-x-32 pt-24'>
          <div>
            <p className='text-xl'>COMPANY</p>
            <p className='font-bold text-2xl'>Pigeonhire</p>
          </div>

          <div>
            <p className='text-xl'>ROLE</p>
            <p className='font-bold text-2xl'>Fullstack Engineer</p>
          </div>

          <div>
            <p className='text-xl'>EXPERTISE</p>
            <p className='font-bold text-2xl'>Fullstack development</p>
          </div>
        </div>
        
        <div className='rounded-2xl px-16 py-24 bg-gray-100 mx-auto mt-16 shadow-xl overflow-hidden'>

          {frame1 && <div className='relative w-[1500px] mx-auto overflow-hidden'>
              <img 
                src={pigeonhire} 
                className='w-full h-full object-cover'
              />
            </div>  

            } 
{frame2 && <div className='relative w-[1500px] mx-auto overflow-hidden mt-6'>
              <img 
                src={pigeonpricing} 
                className='w-full h-full object-cover'
              />
            </div> }

            {frame3 &&  <div className='relative w-[1500px] mx-auto overflow-hidden mt-6'>
              <img 
                src={pigeonfaq} 
                className='w-full h-full object-cover'
              />
            </div> }

<div className='flex gap-x-6 justify-center mt-9'>

                  <div onClick={handleFrame1} className={`cursor-pointer transition-opacity duration-200 ${frame1 ? 'opacity-100 border-2 border-black rounded-md' : 'opacity-40'}`}>
              <img 
                src={pigeonhire} 
                className='object-cover w-[150px] h-[120px] rounded-md'
              />
            </div>

                  <div onClick={handleFrame2} className={`cursor-pointer transition-opacity duration-200 ${frame2 ? 'opacity-100 border-2 border-black rounded-md' : 'opacity-40'}`}>
              <img 
                src={pigeonpricing} 
                className='object-cover w-[150px] h-[120px] rounded-md'
              />
            </div>
            
                  <div onClick={handleFrame3} className={`cursor-pointer transition-opacity duration-200 ${frame3 ? 'opacity-100 border-2 border-black rounded-md' : 'opacity-40'}`}>
              <img 
                src={pigeonfaq} 
                className='object-cover w-[150px] h-[120px] rounded-md'
              />
            </div>
   </div>
 
        </div>


{/* project description */}
        <p className='mt-24 font-bold text-5xl'>Project Description</p>

        <p className='font-medium text-2xl mt-16 max-w-[900px]'>Our client, a leading technology company, aimed to revolutionize scheduling processes worldwide by introducing the world's first AI-powered scheduling app.</p>




      </div>

      <div className='mb-64'></div>
    </div>
  );
};

export default CaseStudy;

