import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import Slidehome from '../Slidehome/Slidehome'
import Fonthome from '../Fonthome/Fonthome'
import Menuhome from '../Menuhome/Menuhome'
import Footer from '../Footer/Footer'
import About from './About'

const Acceuil = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  return (
    <div>
      <NavBar size={5}/>
      <Slidehome/>
      <Fonthome/>
      <Menuhome/>
      <About/>
      <Footer/>
    </div>
  )
}

export default Acceuil
