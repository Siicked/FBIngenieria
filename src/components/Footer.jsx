import React from 'react'
import {RiWhatsappFill, RiInstagramFill, RiFacebookCircleFill, RiMailFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='bg-[#1a1b27] grid grid-cols-1 xl:grid-cols-5 xl:pt-2 pt-12 gap-9 text-white w-full h-full items-baseline '>
        <div className='col-start-1 xl:col-start-2  xl:pt-2 mx-10  '>
        <h1 className='text-[30px] text-white font-[exo] text-center'>FB Ingenieria</h1>
        <p className='font-[exo] text-[15px] text-center  -tracking-tighter text-[#ffffff] pt-4 '>Nos destacamos como una empresa con una sólida trayectoria en trabajos de ingeniería, electricidad y una variedad de otros servicios. Estamos ubicados en Bv. Pellegrini 3375, San Justo, Santa Fe, Argentina. </p>
        </div>
        <div className='col-start-1 text-center xl:col-start-3 xl:mt-0  '>
          <h2 className='text-[30px] text-white font-[exo]  '>Nuestra empresa</h2>
          <nav className='   text-center list-none cursor-pointer  font-[13px] font-[exo] text-[#FFFFFFD4] '>
            <li className='pt-2 hover:text-red-600 underline  underline-offset-[4px] hover:decoration-red-500 hover:scale-105'><Link to='/'>Inicio</Link></li>
            <li className='pt-4 hover:text-red-600 underline  underline-offset-[4px] hover:scale-105'><Link to='/servicios'>Servicios</Link></li>
            <li className='pt-4 hover:text-red-600 underline  underline-offset-[4px] hover:scale-105'><Link to='/contacto'>Contacto</Link></li>
          </nav>
        </div>
        <div className='col-start-1 xl:pb-12 xl:col-start-4   xl:mt-20    '>
          <h3 className='text-[30px] text-white font-[exo] text-center '>Nuestras redes</h3>
          <p className='font-[exo] text-[15px]  -tracking-tighter text-center pt-6 xl:pt-3  '>Contáctanos directamente o  <br />mantente informado sobre <br />nuestras últimas actualizaciones.</p>
          <div className='xl:flex xl:justify-evenly justify-center gap-6 pb-6 md:gap-0 pt-8 grid sm:grid-cols-2 md:grid-cols-1 place-items-center'>
          <a target='_blank' href="https://wa.me/3498444508?text=Hola !"><RiWhatsappFill className='h-[50px] w-[100px] cursor-pointer hover:text-red-500 hover:scale-110 ' /></a>
          <a target='_blank' href="https://www.instagram.com/fb.ingenieria/"><RiInstagramFill className='h-[50px] w-[100px] cursor-pointer hover:text-red-500 hover:scale-110'/></a>
          <a target='_blank' href="https://www.facebook.com/people/FB-Ingenieria-San-Justo-SF/100063824280776/?paipv=0&eav=AfYiJuNzHLFxGYkiGSGiW7A7OQQ4RlJkr-8d6xabpwxnhk1EmeEtYNlyGxU9Bo12JKw&_rdr "><RiFacebookCircleFill className='h-[50px] w-[100px] cursor-pointer hover:text-red-500 hover:scale-110' /></a>
          <a target='_blank' href="mailto:fbingeniriasj@gmail.com"><RiMailFill className='h-[50px] w-[100px] cursor-pointer hover:text-red-500 hover:scale-110' /></a>
          </div>

        </div>
    </div>
  )
}

export default Footer