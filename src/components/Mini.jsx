import React from 'react'

const Mini = () => {
  return (
    <div className='bg-[#242B33] md:h-12 h-16 drop-shadow-lg font-mono flex justify-evenly pt-2 max-md:hidden relative '>
        <div className=' text-slate-300 pt-3 md:pt-1 gap-[10px] pl-4'>
          <span className='text-[#7a7a7a]'>FB Ingenieria  | </span>
            <a target='_blank' href="mailto:fbingeniriasj@gmail.com"><span className='text-red-700 text-[14px] hover:text-white cursor-pointer font-[Exo]  pl-1 '>fbingeniriasj@gmail.com </span> </a>
        </div>
        <div className='pt-1'>
          <span className='font-[exo] text-[12px] text-[#ffffff] '>Administracion y ventas  (3498)-444508</span>
        </div>
    </div>
  )
}

export default Mini