import React from 'react'

const ToolCard = ({Icon, title, message}) => {
  return (
    <div className='bg-white px-6 py-6 w-[400px] rounded-xl'>
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