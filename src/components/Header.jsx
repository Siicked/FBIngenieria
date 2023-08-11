import React, {useState} from 'react'
import {FiMenu} from 'react-icons/fi'
import {TfiClose} from 'react-icons/tfi'
import fbfb from '../assets/fbfb.png'
import { Link } from 'react-router-dom'

const Header = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

return (
    <div className='bg-[#0c151E]  h-[130px] w-full top-0  sticky z-30 drop-shadow-lg font-mono m-0 p-0 box-border'>
        <div className=' flex justify-evenly  items-center w-full h-full'>
            <Link to='/'><img className='max-h-24 bg-gray-100 max-w-16 rounded-3xl relative' src={fbfb} /></Link>
            <div className='flex justify-center '>
                <ul className='hidden md:flex gap-[3vw] ml-12 mt-2 text-base cursor-pointer'>
        <li className='hover:underline text-gray-400 hover:text-red-600   underline-offset-[4px] hover:scale-105 active:text-blue-800'><Link to='/'>Inicio</Link></li>
        <li className='hover:underline hover:text-red-600   underline-offset-[4px] hover:scale-105 text-gray-400 active:text-blue-800'><Link to='/servicios'>Servicios</Link></li>
        <li className='hover:underline text-gray-400 hover:text-red-600   underline-offset-[4px] hover:scale-105 active:text-blue-800'><Link to='/contacto'>Contacto</Link></li>
        </ul>
                </div>
                <div className='md:hidden sm:justify-between' onClick={handleClick}>
                    {!nav ? <FiMenu className='w-16 text-slate-400'/> : <TfiClose className='w-16 text-slate-400'/> }
                </div>
            </div>
            <ul className={!nav ? 'hidden' : 'absolute bg-slate-700 w-full px-8 text-gray-400 font-mono text-[20px] mb-2 pb-4   '}>
        <li className='hover:underline border-b-2 w-full pt-5 border-slate-900 active:text-blue-800 cursor-pointer'><Link to='/'>Inicio</Link></li>
        <li className='hover:underline border-b-2 w-full pt-5 border-slate-900 active:text-blue-800 cursor-pointer'><Link to='/servicios'>Servicios</Link></li>
        <li className='hover:underline border-b-2 w-full pt-5 border-slate-900 active:text-blue-800 cursor-pointer'><Link to='/contacto'>Contacto</Link></li>
            </ul>
    </div>
  )
}

export default Header