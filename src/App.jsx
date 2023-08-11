import React from 'react';
import Header from './components/Header';
import Images from './components/Images';
import Mini from './components/Mini';
import Content from './components/Content';
import Biografia from './components/Biografia';
import Marcas from './components/Marcas';
import Presupuesto from './components/Presupuesto';
import Footer from './components/Footer';
import MiniFooter from './components/minifooter';



const App = () => {
  return (
    <div>
    <Mini />
    <Header />
    <Images />
    <Content />
    <Biografia />
    <Marcas />
    <Presupuesto />
    <Footer />
    <MiniFooter />
    </div>
  )
}

export default App