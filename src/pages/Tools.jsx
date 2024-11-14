// import React from 'react'
// import Navbar from '../components/Navbar'

// import ToolCard from '../components/ToolCard';
// import { SiGooglemeet, SiReact, SiFigma, SiNodedotjs,SiPostman,SiTrello } from "react-icons/si";

// const Tools = () => {
//   return (
//     <div className='bg-[#F2F3F4] min-h-[100vh]'>
//         <Navbar />
//         <p className='font-bold text-5xl text-center pt-48'>The tools I use everyday for effective service</p>

// <div className='flex justify-center mt-24'>
//         <div className='grid grid-cols-3 gap-6 '>    
//         <ToolCard Icon={SiFigma} title={'Figma'} message={'UI/UX Design & Prototyping'} />
//         <ToolCard Icon={SiGooglemeet}  title={'Google Meet'} message={'Communication'} />
//         <ToolCard   Icon={SiReact}
//             title={'React'} 
//             message={'Frontend Development'}  />
//         <ToolCard Icon={SiNodedotjs}
//             title={'Node.js'} 
//             message={'Backend Development'}  />
//         <ToolCard Icon={SiPostman} title={'Postman'} 
//             message={'Testing Apis'} />
//         <ToolCard Icon={SiTrello} title={'Trello'} 
//             message={'Project Management tool'} />
//         </div>

//         </div>
        
//         </div>
//   )
// }

// export default Tools



import React from 'react'
import Navbar from '../components/Navbar'
import ToolCard from '../components/ToolCard';
import { SiGooglemeet, SiReact, SiFigma, SiNodedotjs, SiPostman, SiTrello } from "react-icons/si";
import './Tools.css'  // Import the CSS file

const Tools = () => {
  return (
    <>
 <Navbar />
    <div className='bg-[#F2F3F4] min-h-[100vh] mt-[85px]'>

        <p className='font-bold text-5xl pt-16 text-center page-title'>The tools I use everyday for effective service</p>
        <div className='flex justify-center mt-24'>
            <div className='grid grid-cols-3 gap-6'>    
                <div className='tool-card'>
                    <ToolCard Icon={SiFigma} title={'Figma'} message={'UI/UX Design & Prototyping'} />
                </div>
                <div className='tool-card'>
                    <ToolCard Icon={SiGooglemeet} title={'Google Meet'} message={'Communication'} />
                </div>
                <div className='tool-card'>
                    <ToolCard Icon={SiReact} title={'React'} message={'Frontend Development'} />
                </div>
                <div className='tool-card'>
                    <ToolCard Icon={SiNodedotjs} title={'Node.js'} message={'Backend Development'} />
                </div>
                <div className='tool-card'>
                    <ToolCard Icon={SiPostman} title={'Postman'} message={'Testing Apis'} />
                </div>
                <div className='tool-card'>
                    <ToolCard Icon={SiTrello} title={'Trello'} message={'Project Management tool'} />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Tools