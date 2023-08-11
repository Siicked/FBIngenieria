import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import {FaHome, FaPhone, FaEnvelope} from 'react-icons/fa'
import { Formik } from 'formik'
import { useState } from 'react'

emailjs.init('user__q59ep2z4MrfeVpCp');

const ContactoPage = () => {
const [formularioEnviado, cambiarFormularioEnviado] = useState(false)

const form = useRef();

const sendEmail = (e) => {

  emailjs.sendForm('service_bojdfka', 'template_mcv4lm7', form.current, '_q59ep2z4MrfeVpCp')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};

  return (
    <div>
    <div className='grid grid-cols-1 xl:grid-cols-5 xl:mt-28 xl:mb-28   gap-4 mt-6 px-16 h-full'>
      <div className='grid xl:col-start-2 justify-items-center h-full'>
        <FaHome className='text-[70px] text-red-500 ' />
        <h1 className='text-[#777777] text-[21px] font-[exo] font-light pt-6'>NOS ENCONTRAMOS EN</h1>
        <p className='text-center text-[#7A7A7A] text-[15px] font-[exo] pt-6'>Atención al cliente</p>
        <p className='text-center text-[#7A7A7A] text-[15px] font-[exo] tracking-wide pt-1'>Lunes a viernes de 8:30hs a 19:30hs</p>
        <p className='text-center text-[#7A7A7A] text-[15px] font-[exo] tracking-wide '>Lunes a viernes de 10:30hs a 18:30hs</p>
        <p className='text-center text-[#FF4141] text-[15px] font-[exo] pt-4'>Bv. Pellegrini 3375 - CP:3400 <br /> San Justo, Santa Fe <br />Argentina</p>
      </div>
      <div className='grid justify-items-center pt-4 xl:col-span-1 h-full'>
        <FaPhone className='text-[70px] text-red-500' />
        <h1 className='text-[#777777] text-[21px] font-[exo] font-light pt-6'>LLAMANOS</h1>
        <p className='text-center text-[#7A7A7A] text-[15px] font-[exo] tracking-wide  pt-6'>¡Nuestro equipo administrativo está <br />listo para atender tus peticiones con gusto!</p>
        <p className='font-[exo] text-[15px] pt-4 text-[#7A7A7A]'>Administración y Ventas</p>
        <p className='font-[exo] text-[15px] pt-1 text-[#FF4141]'>+54 (3498) 521587</p>
        <p className='font-[exo] text-[15px] pt-4 text-[#7A7A7A]'>Whatsapp</p>
        <p className='font-[exo] text-[15px] pt-1 text-[#FF4141]'>+54 (3498) 521587</p>
      </div>
      <div className='grid justify-items-center pt-4 mb-16 xl:col-span-1'>
        <FaEnvelope className='text-[70px] text-red-500' />
        <h1 className='text-center text-[#7A7A7A] text-[21px] font-[exo] pt-6'>ESCRIBINOS</h1>
        <p className='text-center text-[#7A7A7A] text-[15px] font-[exo] tracking-wide pt-1 px-4'>Estamos aquí para ayudarte <br /> con cualquier consulta sobre <br /> productos, stock, entregas y más.  <br />¡Contáctanos!</p>
        <a target='_blank' href="mailto:fbingeniriasj@gmail.com"><p className='font-[exo] font-extrabold text-[15px] text-[#FF4141] pt-6'>fbingeniriasj@gmail.com</p></a>
      </div>
      </div>
      <div className='bg-[url(./src/assets/nashe.jpeg)] w-full h-full bg-repeat-x xl:grid xl:grid-cols-1 '>
        <div className='bg-[#ffffffCf] h-full  px-10  justify-items-center '>
        <h1 className='text-[#FF4141] text-center text-[40px] font-[exo] pt-4'>ESCRIBINOS</h1>
        <p className='text-center text-[#494949] text-[16px] font-[exo] pt-6'>Mediante este canal, podrás pedir una atención detallada para tus necesidades. <br />Completa el formulario con tus datos y te contactaremos pronto para  <br />brindarte la información que buscas.</p>
        <div/>

          
            <Formik
            initialValues={{
                nombre: '',
                correo: '',
                asunto: '',
                phone: '',
                mensaje: ''
            }}
              validate={(valores) => {
                let errores = {}

                if(!valores.nombre){
                  errores.nombre= 'Completa este campo!'
                } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                  errores.nombre = 'El nombre solo puede contener letras y espacios'
                }
                if(!valores.asunto){
                  errores.asunto= 'Completa este campo !'
                } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.asunto)){

                }
                if(!valores.mensaje){
                  errores.mensaje= 'Completa este campo !'
                } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.mensaje)){

                }
                if(!valores.phone){
                  errores.phone= 'Completa este campo !'
                } else if(!/^[0-9\s]+$/.test(valores.phone)){
                  errores.phone = 'El teléfono solo puede tener números.'
                }
                if(!valores.correo){
                  errores.correo = 'Completa este campo !'
                } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                  errores.correo = 'Incluye un signo "@" en la direccion de correo electronico'
                }
                return errores

              }}
              onSubmit={(valores, {resetForm}) => {
                resetForm();
                cambiarFormularioEnviado(true);
                sendEmail();
                setTimeout(() => cambiarFormularioEnviado(false), 4000)
	  
    
  
                
                


              }
              }
            >
              {({handleSubmit, errors,  values, handleChange, handleBlur, touched, form}) => (

            <form ref={form} className='mt-10 w-full h-full  mb-10   items-center'  id='formulario ' onSubmit={handleSubmit} >
              <div className='xl:grid xl:grid-cols-1 xl:justify-items-center w-full '>
                <div>
        <input className='h-[42px] bg-[#ffffff] py-4 px-4 w-[80vw] xl:w-[15vw] border border-slate-200 shadow-xl ' 
        name='nombre' 
        onChange={handleChange} 
        onBlur={handleBlur}      
        type="name" 
        value={values.nombre}    
        placeholder='Nombre' />
        {touched.nombre && errors.nombre && <div className='font-[exo] text-[14px] text-justify pl-2 text-red-600 pt-2'>{errors.nombre}</div>}
        </div>
        <div>
          <input className='h-[42px] bg-[#ffffff] py-4 px-4 xl:w-[15vw]  w-[80vw] border border-slate-200 shadow-xl mt-4 block' 
        name='correo' 
        value={values.correo} 
        onBlur={handleBlur} 
        onChange={handleChange}        
        placeholder='E-Mail' />
        
        {touched.correo && errors.correo && <div className='font-[exo] text-[14px] text-justify pl-2 text-red-600 pt-2'>{errors.correo}</div>}
        </div>
        
        <div>
            <input className='h-[42px] bg-[#ffffff] py-4 px-4 w-[80vw] xl:w-[15vw] border border-slate-200 shadow-xl mt-4 block' 
        type="phone" 
        name='phone' 
        value={values.phone} 
        onChange={handleChange} 
        onBlur={handleBlur}  
        placeholder='Teléfono' />
        {touched.phone && errors.phone && <div className='font-[exo] text-justify pl-2 text-[14px] text-red-600 pt-2'>{errors.phone}</div>}
        </div>
        
                <div>
        <input className='h-[42px] bg-[#ffffff] py-4 px-4 w-[80vw] xl:w-[15vw] border border-slate-200 shadow-xl mt-4' 
        type="asunto" 
        name='asunto' 
        value={values.asunto} 
        onChange={handleChange} 
        onBlur={handleBlur}       
        placeholder='Asunto' />
        {touched.asunto && errors.asunto && <div className='font-[exo] text-justify pl-2 text-[14px] text-red-600 pt-2'>{errors.asunto}</div>}
              </div>

        <div>
        <textarea placeholder='Mensaje' 
        name='mensaje' 
        value={values.mensaje} 
        onChange={handleChange} 
        onBlur={handleBlur}     
        className='h-[100px] w-[80vw] border border-slate-200 shadow-xl mt-4 pt-1 px-4 xl:w-[30vw]'></textarea>
        {touched.mensaje && errors.mensaje && <div className='font-[exo] text-justify pl-2 text-[14px] text-red-600 pt-2'>{errors.mensaje}</div>}
        </div>

        <div className='flex justify-center pr-4 pt-8 pb-6'>
          <button type='submit' value='send'  className='text-[#ffffff] font-bold text-[18px] rounded-sm font-[exo] bg-[#FF4141] py-3 px-16 hover:bg-red-900'>ENVIAR</button>
          </div>
          {formularioEnviado && <p className='font-[exo] text-[16px]  text-green-500 text-center pt-2'>Formulario enviado con exito</p>}
          </div>
          
          </form>
          
            )}
          </Formik>
          </div>
          
        </div>
        <div>
        <iframe className='w-full border  border-spacing-6 border-blue-800' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3427.372859868259!2d-60.60606925153223!3d-30.79217646635558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x944ad7ca7b5070a7%3A0x885120081436021e!2sFB%20Ingenieria!5e0!3m2!1ses!2sar!4v1691559665386!5m2!1ses!2sar" width="1500" height="400" ></iframe>
        </div>
      </div>

  )
}

export default ContactoPage