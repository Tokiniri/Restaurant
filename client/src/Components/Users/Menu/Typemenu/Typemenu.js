import React from 'react'
import "./Typemenu.css"
import { FaPizzaSlice } from "react-icons/fa6";
import { FaCocktail } from "react-icons/fa";
import { FaBowlRice } from "react-icons/fa6";
import { GiFruitBowl } from "react-icons/gi";
import { IoFastFood } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from "react-router-dom";





function Typemenu() {
  return (
    <div  className='Lestypemenu'>
      <div data-aos="fade-down-left" className='Texttype'>
        <span style={{fontFamily:"cursive", fontSize:"1.5rem", color:"#bf5700", margin:"35%"}}>*** Type des Menus disponible ***</span>
      </div>
      <div className='divtypemenuG'>
        <div className='part1'>
          <Link data-aos="zoom-out-up" to={"/clientre"} className='buttin1'>
            <IoFastFood style={{width:"50px", height:"50px"}} /> <br/>
            ENTRE 
          </Link>
          <Link data-aos="zoom-out-up" to={"/cliplats"} className='buttin1' style={{marginLeft:"2%"}}>
          <FaBowlRice style={{width:"50px", height:"50px", marginLeft:"30%"}}/> <br/>
            PLATS PRINCIPAUX
          </Link>
          <Link data-aos="zoom-out-up" to={"/clidesserts"} className='buttin1' style={{marginLeft:"2%"}}>
          <GiFruitBowl style={{width:"50px", height:"50px"}}/> <br/>
            DESSERTS
          </Link>
        </div>
        <div className='part1'>
        <Link data-aos="zoom-out-up" to={"/clipizza"} className='buttin1' style={{marginLeft:"15%",marginTop:"2%" }}>
            <FaPizzaSlice style={{width:"50px", height:"50px", marginLeft:"2%"}}/> <br/>
            PIZZA
          </Link>
          <Link data-aos="zoom-out-up" to={"/cliboissons"} className='buttin1' style={{marginLeft:"10%",marginTop:"2%"  }}>
          <FaCocktail style={{width:"50px", height:"50px",  marginLeft:"20%"}}/> <br/>
          BOISSONS

          </Link>
        </div>
      </div>
    </div>
  )
}

export default Typemenu