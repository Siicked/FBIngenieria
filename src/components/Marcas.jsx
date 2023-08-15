import React, {useState} from 'react'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import cobrhil from '../assets/cobrhil.png'
import Dahua from '../assets/Dahua.jpg'
import genrod from '../assets/genrod.png'
import sica from '../assets/sica.png'
import x28 from '../assets/x28.png'


const Marcas = () => {

const Slides = [
  {
    url: 'https://http2.mlstatic.com/D_NQ_NP_660874-MLA45104037049_032021-O.webp'
  },
  {
    url: 'https://www.alessi.com.ar/articulos/imgs/000617%20%204.jpg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Dahua.jpg'
  },
  {
    url: 'https://www.sorianex.ar/wp-content/uploads/2017/12/sica_logo.jpg'
  },
  {
    url: 'https://www.dipromas.com.ar/themes/likable/likable/images/marca_tbcin.png'
  },
]

const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? Slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === Slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };



  return (
    <div className='h-full xl:h-full w-full text-center grid-cols-1  '>
      <div className='-translate-y-[130px] text-center xl:translate-y-12 justify-center  '>
        <span className='xl:text-[45px] text-[30px] font-[exo]'>Nuestras</span><span className='xl:text-[45px] text-[30px] font-[exo] text-red-600 pl-2 '>Marcas</span>
        <p className='text-[18px] font-[exo] text-center px-10 text-[#434242] tracking-widest'>Representamos a destacadas marcas en el mercado electrico, ofreciendo un amplio y variado inventario de artículos <br /> proporcionándote opciones cuidadosamente seleccionadas.</p>
  <div className='  justify-center xl:gap-x-44 text-center mt-12 h-[50px] w-full grid grid-cols-5 justify-items-center items-center xl:flex'>
    <img className='xl:w-[150px] xl:h-[100px] ' src={cobrhil} alt="cobrhil" />
    <img className='xl:w-[100px] xl:h-[80px]' src={Dahua} alt="Dahua" />
    <img className='xl:w-[80px] xl:h-[50px]' src={x28} alt="x28" />
    <img className='xl:w-[80px] xl:h-[40px]' src={genrod} alt="genrod" />
    <img className='xl:w-[80px] xl:h-[40px]' src={sica} alt="sica" />
  </div>
      </div>
      <div className='w-full h-[280px] hidden'>
      <div style={{backgroundImage: `url(${Slides[currentIndex].url})`}} className='w-[190px] h-[70px] flex translate-x-[38vw] -translate-y-20  bg-center bg-cover transition-all   ease-linear  duration-1000 imagenes xl:translate-x-0 xl:translate-y-0'>
      </div>
      <div className='absolute -translate-y-32 left-40 font-extrabold text-9xl text-red-700 cursor-pointer'>
      <FaAngleLeft  onClick={prevSlide} size={30} />
    </div>
    <div className='absolute -translate-y-32 right-40  font-extrabold text-9xl text-red-700 cursor-pointer  '>
      <FaAngleRight onClick={nextSlide} size={30} />
    </div>
      </div>
    </div>
    
  )
}
export default Marcas