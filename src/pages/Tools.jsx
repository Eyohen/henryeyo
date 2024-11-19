// import React from 'react'
// import Navbar from '../components/Navbar'
// import ToolCard from '../components/ToolCard';
// import { SiGooglemeet, SiReact, SiFigma, SiNodedotjs, SiPostman, SiTrello } from "react-icons/si";
// import './Tools.css'  // Import the CSS file

// const Tools = () => {
//   return (
//     <>
//  <Navbar />
//     <div className='bg-[#F2F3F4] min-h-[100vh] mt-[85px]'>

//         <p className='font-bold text-5xl pt-16 text-center page-title'>The tools I use everyday for effective service</p>
//         <div className='flex justify-center mt-24'>
//             <div className='grid grid-cols-3 gap-6'>    
//                 <div className='tool-card'>
//                     <ToolCard Icon={SiFigma} title={'Figma'} message={'UI/UX Design & Prototyping'} />
//                 </div>
//                 <div className='tool-card'>
//                     <ToolCard Icon={SiGooglemeet} title={'Google Meet'} message={'Communication'} />
//                 </div>
//                 <div className='tool-card'>
//                     <ToolCard Icon={SiReact} title={'React'} message={'Frontend Development'} />
//                 </div>
//                 <div className='tool-card'>
//                     <ToolCard Icon={SiNodedotjs} title={'Node.js'} message={'Backend Development'} />
//                 </div>
//                 <div className='tool-card'>
//                     <ToolCard Icon={SiPostman} title={'Postman'} message={'Testing Apis'} />
//                 </div>
//                 <div className='tool-card'>
//                     <ToolCard Icon={SiTrello} title={'Trello'} message={'Project Management tool'} />
//                 </div>
//             </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Tools

import React from 'react';
import Navbar from '../components/Navbar';
import ToolCard from '../components/ToolCard';
import { SiGooglemeet, SiReact, SiFigma, SiNodedotjs, SiPostman, SiTrello } from "react-icons/si";
import './Tools.css';

const Tools = () => {
  const tools = [
    { Icon: SiFigma, title: 'Figma', message: 'UI/UX Design & Prototyping' },
    { Icon: SiGooglemeet, title: 'Google Meet', message: 'Communication' },
    { Icon: SiReact, title: 'React', message: 'Frontend Development' },
    { Icon: SiNodedotjs, title: 'Node.js', message: 'Backend Development' },
    { Icon: SiPostman, title: 'Postman', message: 'Testing Apis' },
    { Icon: SiTrello, title: 'Trello', message: 'Project Management tool' }
  ];

  return (
    <>
      <Navbar />
      <div className='bg-[#F2F3F4] min-h-screen mt-[85px] px-4 sm:px-6 md:px-8 lg:px-12 pb-12'>
        <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl pt-8 md:pt-16 text-center page-title max-w-4xl mx-auto leading-tight'>
          The tools I use everyday for effective service
        </h1>

        <div className='mt-12 md:mt-24 max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8'>    
            {tools.map((tool, index) => (
              <div key={tool.title} className='tool-card'>
                <ToolCard 
                  Icon={tool.Icon} 
                  title={tool.title} 
                  message={tool.message}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;