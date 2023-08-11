import React from 'react'

const Presupuesto = () => {
  return (
    <div className='h-full w-full bg-[#EAEAEA] pb-10  xl:mt-44 xl:py-20 xl:grid xl:grid-cols-5 xl:justify-evenly'>
        <div className='  pl-6 pt-6 xl:pt-2 gap-x-3 xl:text-left text-left xl col-start-2 col-span-2'>
            <span className='font-[exo] text-[45px] '>Solicita tu </span><span className='font-[exo] text-[45px] text-red-600'>Presupuesto</span>
            <p className='font-[exo] text-[#666666] font-medium text-left xl:text-left'>A través de esta vía, puedes requerir una estimación completa acorde a tus necesidades.
            <br />Nuestro Sector de admninistrativo se pondrá en contacto contigo <br />en el menor tiempo posible para suministrarte
<br />los datos que necesitas.</p>
            <div className='flex justify-stretch gap-2 pt-12'>
            <a target='_blank' href="mailto:fbingeniriasj@gmail.com"><span className='font-[exo] text-[14px] text-[#EC1C24] hover:text-[black] cursor-pointer'>fbingenieria@hotmail.com</span></a>
            <span className='text-[#666666] text-[14px]'>///</span><span className='font-[exo] text-[14px] '>+54 (3498)-521587</span>
            </div>
        </div>
        <div className='pt-1 xl:translate-y-16 xl:translate-x-16  text-left pl-6 xl:col-start-4  '>
            <a target='_blank' href="https://wa.me/3498444508?text=Hola! Quería consultar el precio de un producto"><button className='rounded-sm py-2 xl:py-3 text-[18px] font-[exo] font-extrabold shadow-xl bg-[#383838] text-white px-12 hover:bg-red-600 duration-300 transition ease-in-out  hover:scale-110'>SOLICITAR PRESUPUESTO</button></a>
            </div>
    </div>
  )
}

export default Presupuesto