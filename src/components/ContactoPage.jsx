import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import {FaHome, FaPhone, FaEnvelope} from 'react-icons/fa'
import { Formik } from 'formik'
import { useState } from 'react'


const ContactoPage = () => {
const [formularioEnviado, cambiarFormularioEnviado] = useState(false)

  return (
    <div>
    <div className='grid grid-cols-1 xl:grid-cols-5 xl:mt-28 xl:mb-28 justify-items-center  gap-4 mt-6 px-16 h-full'>
      <div className='grid xl:col-start-2 justify-items-center h-full '>
        <FaHome className='text-[70px] text-red-500 ' />
        <h1 className='text-[#777777] text-[21px] font-[exo] font-light pt-6'>NOS ENCONTRAMOS EN</h1>
        <p className='text-center text-[#7A7A7A] text-[15px] font-[exo] pt-6'>Atención al cliente</p>
        <p className='text-center text-[#7A7A7A] text-[15px] font-[exo] tracking-wide pt-1'>Lunes a viernes de 8:30hs a 19:30hs</p>
        <p className='text-center text-[#7A7A7A] text-[15px] font-[exo] tracking-wide '>Lunes a viernes de 10:30hs a 18:30hs</p>
        <p className='text-center text-[#FF4141] text-[15px] font-[exo] pt-4'>Bv. Pellegrini 3375 - CP:3400 <br /> San Justo, Santa Fe <br />Argentina</p>
      </div>
      <div className='grid justify-items-center pt-4 xl:col-span-1 h-full'>
        <FaPhone className='text-[70px] text-red-500' />
        <h2 className='text-[#777777] text-[21px] font-[exo] font-light pt-6'>LLAMANOS</h2>
        <p className='text-center text-[#7A7A7A] text-[15px] font-[exo] tracking-wide  pt-6'>¡Nuestro equipo administrativo está <br />listo para atender tus peticiones con gusto!</p>
        <p className='font-[exo] text-[15px] pt-4 text-[#7A7A7A]'>Administración y Ventas</p>
        <p className='font-[exo] text-[15px] pt-1 text-[#FF4141]'>+54 (3498) 521587</p>
        <p className='font-[exo] text-[15px] pt-4 text-[#7A7A7A]'>Whatsapp</p>
        <p className='font-[exo] text-[15px] pt-1 text-[#FF4141]'>+54 (3498) 521587</p>
      </div>
      <div className='grid justify-items-center pt-4 mb-16 xl:col-span-1  '>
        <FaEnvelope className='text-[70px] text-red-500' />
        <h3 className='text-center text-[#7A7A7A] text-[21px] font-[exo] pt-6'>ESCRIBINOS</h3>
        <p className='text-center text-[#7A7A7A] text-[15px] font-[exo] tracking-wide pt-1 px-4'>Estamos aquí para ayudarte <br /> con cualquier consulta sobre <br /> productos, stock, entregas y más.  <br />¡Contáctanos!</p>
        <a target='_blank' href="mailto:fbingenieriasj@gmail.com"><p className='font-[exo] font-extrabold text-[15px] text-[#FF4141] pt-6 hover:text-black'>fbingenieriasj@gmail.com</p></a>
      </div>
      </div>
      
          
        
        <div>
        <iframe className='w-full border  border-spacing-6 border-blue-800' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3427.372859868259!2d-60.60606925153223!3d-30.79217646635558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x944ad7ca7b5070a7%3A0x885120081436021e!2sFB%20Ingenieria!5e0!3m2!1ses!2sar!4v1691559665386!5m2!1ses!2sar" width="1500" height="400" ></iframe>
        </div>
      </div>

  )
}

export default ContactoPage