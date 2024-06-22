import React from 'react'
import "./Menuhome.css"
import { BsArrowRight } from "react-icons/bs";
import Menuslide from '../Menuslide/Menuslide';
import { Link } from "react-router-dom"


const Menuhome = () => {
  return (
    <div className='fontmenunumero1'>
        <div className='demifontnumero1'>
            <h2 className='text-center' style={{ fontWeight: 'bold', color:"red", fontSize:"2rem", fontFamily: 'Arial, sans-serif', marginBottom: '10px', paddingTop: '2%' }}>NOS MENUS</h2>
            <p className='text-white text-center' style={{paddingBottom:"5%", paddingLeft:"5%", paddingRight:"5%", fontSize:"1.25rem"}}>Nos points de vente vous proposent différents produits fait maison (Pizza, Pommes frites, Hamburger, Sandwich,
                Assiette Kebab, Soupe Tamatave, Plats rapides, Assiette Big love, Jus naturel, Glaces, Yaourt)</p>
        </div>
        <div className='demifontnumero2'>
                <Menuslide/>
        </div>
        <div className='text-center d-flex align-items-center justify-content-center'>
        <Link to={"/Menu"} className="buttonvoirsakafo" >
                 VOIR TOUT <BsArrowRight style={{ marginLeft: '45%' }} />
            </Link>     
        </div>
    </div>
  )
}

export default Menuhome
