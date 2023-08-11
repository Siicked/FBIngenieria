import React from 'react'
import pdf01 from '../assets/pdf01.png'
import {FiMail, FiFacebook, FiInstagram} from 'react-icons/fi'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {RiWhatsappFill} from 'react-icons/ri'
import imagencontent from '../assets/imagencontent.jpeg'
import content2 from '../assets/content2.jpeg'
import pintado from '../assets/pintado.jpeg'
import techitonashe from '../assets/techito nashe.png'
import pueslatocas from '../assets/pueslatocas.png'
import XDLOLXD from '../assets/XDLOLDX.jpg'

const Content = () => {
  return (
    <div className='bg-white w-full mt-6 h-full xl:grid xl:grid-cols-4  xl:pt-8 '>
            <div className=' pb-5 xl:col-start-2 pt-5 '>
              <div className='xl:flex   text-left xl:mt-14 '>
            <span className='text-[38px] xl:pr-6 font-[exo] font-[700]  flex justify-center xl:translate-x-3 text-red-500 '>Catálogo</span><span className='text-[38px]  font-[700] xl:pr-6 font-[exo]   flex justify-center '>Online</span> <span className='text-[38px] xl:pr-6 font-[exo] font-[700]  flex justify-center xl:-translate-x-3 '>2023</span>
            </div>
            <p className='text-[18px] font-[exo]   pt-4 text-red-500 items-center flex justify-center text-left xl:text-left px-16 xl:px-4 tracking-wide'>Nuestro stock prioriza las marcas líderes del mercado, asegurando la mayor calidad a nuestros clientes tanto en productos como en servicios.</p>
            <p className='text-[18px] font-[exo] mt-4 pt-3  tracking-wide  text-left xl:text-left px-16 xl:px-4 '>Realizamos trabajos varios, como instalación de cámaras y alarmas, instalaciones eléctricas, trabajos de refrigeración, diseño y pintura, colocación de durlock, trabajos de plomería y albañilería, poda y soluciones de gas.</p>
    

            
            </div>
            <div className='flex xl:-translate-x-56 justify-center xl:gap-12 gap-2  xl:col-span-2 '>
            <img className='xl:h-full-full  rounded-xl pt-2 xl:h-[450px] h-[350px]  ' src={XDLOLXD} alt="" /> 
            
          

        </div>
            </div>
                  
  )
}

export default Content