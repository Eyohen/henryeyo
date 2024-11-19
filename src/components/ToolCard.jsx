import React from 'react'

const ToolCard = ({Icon, title, message}) => {
  return (
    <div className='bg-white px-6 py-6 md:p-8 rounded-xl'>
    <div className='flex gap-x-4'>


    <div className='bg-gray-300 px-3 py-3 w-[80px] rounded-xl'>{Icon && <Icon size={40} />}</div>

    <div>
    <p className='text-3xl font-medium'>{title}</p>
    <p className='text-xl'>{message}</p>
    </div>

    </div>
</div>
    
  )
}

export default ToolCard

// import React from 'react';

// const ToolCard = ({ Icon, title, message }) => {
//   return (
//     <div className="bg-white rounded-xl p-6 md:p-8 h-full">
//       <div className="flex flex-col items-center text-center space-y-4">
//         <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-gray-100">
//           <Icon className="w-6 h-6 md:w-8 md:h-8 text-gray-700" />
//         </div>
//         <h3 className="text-lg md:text-xl font-semibold text-gray-800">
//           {title}
//         </h3>
//         <p className="text-sm md:text-base text-gray-600">
//           {message}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ToolCard;