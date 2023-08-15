import React from 'react'
import nashe from "/nashe.jpeg"

const Biografia = () => {
  return (
    <div className='w-full h-full   xl:h-[30vw]  pt-16 xl:text-center text-center   '>
        <img className='w-full h-[140vw] xl:h-full brightness-50 contrast-50 drop-shadow-sm grayscale ' src={nashe} alt="Alarmas" />
        <div className=' xl:-translate-y-[22vw] -translate-y-[120vw] text-center tracking-widest '>
        <h1 className='text-[#ffffff] xl:text-[45px] font-[Exo] font-medium text-center text-[30px] px-10 '>FB Ingeniería y Electricidad</h1>
        <p className='text-[#ffffff] xl:text-[20px] font-[exo] font-extrabold pt-5 text-center  text-[18px] px-10 '>Somos una empresa que se especializa en instalaciones eléctricas <br /> y servicios de ingeniería, con una garantía de calidad para asegurar  <br />la comodidad de nuestros clientes. </p>
        </div>
        <div className='xl:-translate-y-[21vw] xl:pt-2 text-center -translate-y-[80vw] px-10  tracking-widest'>
            <p className='text-[#ffffff] xl:text-[20px] font-[exo] font-extrabold text-center px-10 max-sm:hidden'>Contamos con un depósito seguro de nuestros productos, personal capacitado, <br />diversos vehículos para trabajar en tu domicilio, una larga trayectoria <br /> y la mejor atención al cliente.</p>

            
        </div>
    </div>
  )
}

export default Biografia