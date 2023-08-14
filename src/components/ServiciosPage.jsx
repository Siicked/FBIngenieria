import React from 'react'
import servicios from '../assets/servicios.jpg'
import {LiaHandshake} from 'react-icons/lia'

const ServiciosPage = () => {

  let count1 = 0;
  let count2= 0;
  let count3= 0;
  let project = setInterval(projectDone, 50)
  let clients = setInterval(clientsDone, 30)
  let trabajos = setInterval(trabajosDone, 0.00000001)
  function projectDone() {
    count1++;
    document.querySelector("#numero1").innerHTML = 
    count1;
    if(count1 === 28){
      clearInterval(project)
    }
  }
  function clientsDone() {
    count2++;
    document.querySelector("#numero2").innerHTML = 
    count2;
    if(count2 === 50){
      clearInterval(clients)
    }}
    function trabajosDone() {
      count3++;
      document.querySelector("#numero3").innerHTML = 
      count3;
      if(count3 === 200){
        clearInterval(trabajos)
      }}
  return (
    <div>
      <div className='grid grid-cols-1 xl:grid-cols-2 '>
      <div className='grid col-span-1  '>
        <img className='border border-spacing-3 w-full border-slate-900   ' src={servicios} alt="" />
      </div>
        <div className='bg-[#2A2B33] grid justify-center  py-28 hover:bg-red-600 ease-in duration-300 col-span-1 content-center'>
          <h1 className='text-[35px] tracking-wider font-[exo] xl:text-[60px] text-[#ffffff] text-center'>Servicios y Obras</h1>
          <p className='text-center text-[#ffffffc7] text-[15px] xl:text-[19px] xl:text-justify font-[exo] tracking-widest pt-2 xl:px-20'>A través de años de dedicación en ingeniería y electricidad, hemos mejorado vidas de manera constante. Nuestros productos encarnan la excelencia y ofrecen soluciones confiables. Nuestra sólida trayectoria respalda nuestra promesa de calidad y excelencia. Cada proyecto es un testimonio de nuestro compromiso con la innovación y la satisfacción del cliente.</p>
        </div>
      </div>
      <div className='grid grid-cols-1 justify-items-center xl:mt-10 mb-28 gap-20 xl:grid-cols-6 content-center items-center '>
        <div className='grid justify-items-center bg-red-500 pb-28 pt-12 xl:h-96 xl:w-96 px-12 xl:col-start-2'>
          <LiaHandshake className='text-[100px] text-white' />
          <p className='text-center text-[20px] font-[exo] text-[#ffffff] tracking-wide'>Nuestra empresa se encuentra satisfecha con estos números, ya que reflejan el camino positivo que hemos recorrido con orgullo.</p>
        </div>
        <div className='grid justify-items-center px-10'>
          <h1 id='numero1' className='text-[70px] font-[exo] text-[#FF4141]'>26</h1>
          <p className='text-[20px] font-[exo]'>Años</p>
          <p className='text-center font-[exo] text-[#545454] tracking-wide pt-6 xl:pt-0'>Con una experiencia consolidada en el sector de la ingeniería y la electricidad, nos mantenemos actualizados para ofrecer siempre el mejor servicio.</p>
        </div>
        <div className='grid justify-items-center px-10'>
          <h1 id='numero2' className='text-[70px] font-[exo] text-[#FF4141]'>30</h1>
          <p className='text-[20px] font-[exo]'>Marcas</p>
          <p className='text-center font-[exo] text-[#545454] tracking-wide pt-6 xl:pt-0'>Nuestra clientela deposita su confianza en nosotros al proveernos de sus productos, lo que nos impulsa a mantener un extenso catálogo de insumos.</p>
        </div>
        <div className='grid justify-items-center xl:pb-16   px-10'>
        <h1 id='numero3' className='text-[70px] font-[exo] text-[#FF4141]'>500</h1>
          <p className='text-[20px] font-[exo]'>Clientes</p>
          <p className='text-center text-[15px] text-[#545454] tracking-wide font-[exo] pt-6 xl:pt-0  '>Nos enorgullece que nos acompañen año tras año, con muchos de ellos desde nuestros comienzos.  </p>
        </div>
      </div>
      
    </div>
  )
  }
  


export default ServiciosPage 