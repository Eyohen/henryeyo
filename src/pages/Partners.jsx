// import React from 'react'

// const Partners = () => {
//   return (
//     <div>


//         <div className='flex justify-center items-center h-[100vh] gap-x-4'>
//         <p className='border rounded-md py-2 px-3 shadow-lg w-[110px] flex justify-center font'>Pigeonhire</p>
//         <p className='border rounded-md py-2 px-3 shadow-lg w-[110px] flex justify-center font'>Amari</p>
//         <p className='border rounded-md py-2 px-3 shadow-lg w-[110px] flex justify-center font'>SolarPaddy</p>
//         <p className='bg-black rounded-full p-9 w-6 h-6 text-white flex justify-center items-center'>LOL</p>
//         <p className='border rounded-md py-2 px-3 shadow-lg w-[110px] flex justify-center font'>Mend</p>
//         <p className='border rounded-md py-2 px-3 shadow-lg w-[110px] flex justify-center font'>TPN</p>
//     </div>

//     </div>
//   )
// }

// export default Partners


import React from 'react'
import './Partners.css'

const Partners = () => {
  return (
    <div className='flex justify-center items-center min-h-[100vh]'>
      <div className='orbit-system relative'>
        {/* Center LOL element */}
        <div className='center-element absolute bounce-animation'>
          <p className='bg-black rounded-full p-9 w-6 h-6 text-white flex justify-center items-center'>
            LOL
          </p>
        </div>
        
        {/* Orbiting partners */}
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
    </div>
  )
}

export default Partners