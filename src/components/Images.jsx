import React, {useState} from 'react'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import {RxDotFilled} from 'react-icons/rx'
import './Ministlye.css'



const Images = () => {
  const Slides = [{
    src: '/imagen1234.jpg',
  },
  {
    src: '/foto.jpeg',
  },

  {
    src: '/nashe.jpeg',
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
    <div className='w-full h-[750px] xl:w-full relative'>
      <div style={{backgroundImage: `url(${Slides[currentIndex].src})`}} className='w-full flex h-full relative bg-center bg-cover transition-all hover:saturate-100  ease-linear  duration-1000  drop-shadow '>
    </div>
    <div className='absolute -translate-y-96 duration-300 transition ease-in-out hover:scale-125  left-4 font-extrabold text-9xl text-red-700 cursor-pointer'>
      <FaAngleLeft onClick={prevSlide} size={65} />
    </div>
    <div className='absolute -translate-y-96 right-4 duration-300 transition ease-in-out hover:scale-125  font-extrabold text-9xl text-red-700 cursor-pointer  '>
      <FaAngleRight onClick={nextSlide} size={65} />
    </div>
    <div className='flex -translate-y-11 cursor-pointer justify-center py-2'>
      {Slides.map((slide, slideIndex) => (
        <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-4xl'><RxDotFilled className='text-white hover:text-red-500'/></div>
      ))}
    </div>
    </div>
  )
}

export default Images