import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contacto from './pages/Contacto.jsx'
import Servicios from './pages/Servicios.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/contacto' element={<Contacto />} />
      <Route path= '/servicios' element={<Servicios />} />
    </Routes>
    </BrowserRouter>,
)
