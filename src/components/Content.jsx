import React from 'react'
import XDLOLXD from '../assets/XDLOLDX.jpg'

const Content = () => {
  return (
    <div className='bg-white w-full mt-6 h-full xl:grid xl:grid-cols-4  xl:pt-8 '>
            <div className=' pb-5 xl:col-start-2 pt-5 '>
              <div className='xl:flex   text-left xl:mt-14 '>
            <span className='text-[38px] xl:pr-6 font-[exo] font-[700]  flex justify-center xl:translate-x-3 text-red-500 '>FB</span><span className='text-[38px]  font-[700] xl:pr-6 font-[exo]   flex justify-center '>Ingeniería</span> <span className='text-[38px] xl:pr-6 font-[exo] font-[700]  flex justify-center xl:-translate-x-3 '>2023</span>
            </div>
            <p className='text-[18px] font-[exo]   pt-4 text-red-500 items-center flex justify-center text-left xl:text-left px-16 xl:px-4 tracking-wide'>Nuestro stock prioriza las marcas líderes del mercado, asegurando la mayor calidad a nuestros clientes tanto en productos como en servicios.</p>
            <p className='text-[18px] font-[exo] mt-4 pt-3  tracking-wide  text-left xl:text-left px-16 xl:px-4 '>Realizamos trabajos varios, como instalación de cámaras y alarmas, instalaciones eléctricas, trabajos de refrigeración, diseño y pintura, colocación de durlock, trabajos de plomería y albañilería, poda y soluciones de gas.</p>
            <p className='text-[18px] font-[exo]   pt-4 text-red-500 items-center flex justify-center text-left xl:text-left px-16 xl:px-4 tracking-wide'>Puedes solicitar nuestros productos a través de nuestras redes, vía email o por nuestro Whatsapp!</p>
    

            
            </div>
            <div className='flex xl:-translate-x-56 justify-center xl:gap-12 gap-2  xl:col-span-2 '>
            <img className='xl:h-full-full  rounded-xl pt-2 xl:h-[450px] h-[350px]  ' src={XDLOLXD} alt="Ingenieria y seguridad" /> 
            
          

        </div>
            </div>
                  
  )
}

export default Content