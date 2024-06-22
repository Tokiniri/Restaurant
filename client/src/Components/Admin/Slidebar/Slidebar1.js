import React, { useState } from 'react'
import { FaHouse } from "react-icons/fa6";
import { BsSpeedometer2 } from "react-icons/bs";
import { HiOutlineTableCells } from "react-icons/hi2";
import { FaRegClipboard } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { BiPowerOff } from "react-icons/bi";
import { RiProductHuntLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import { PiWarningOctagonBold } from "react-icons/pi";
import "./Slidebar.css"

function Slidebar() {
    const [modal, setModal ] = useState(false);
    const toggleModal = () => {
      setModal(!modal)
    }
      if(modal){
        document.body.classList.add("active-modal")
      } else {
        document.body.classList.remove("active-modal")
      }

  return (

        <div className='bg-transparent sidebar p-2'>
            <div className='m-2'>
                <span style={{color:"white", fontFamily:"cursive", fontSize:"1.2rem", marginLeft:"50px"}}>Admin</span>
            </div>
                <hr className='text-dark'/>
            <div className='list-group list-group-flush text-white'>
                <Link to={"/home"} className='list-group-item list-group-item-action py-2 my-1'>
                    <FaHouse className=' fs-5 me-3'/>
                    <span>Home</span>                
                </Link>
                <Link to={"/Admin"} className='list-group-item list-group-item-action py-2 my-1 '>
                    <BsSpeedometer2 className=' fs-5 me-3'/>
                    <span >Dashboard</span>
                </Link>
                <Link to={"/produit"} className='list-group-item list-group-item-action py-2 my-1'>
                    <RiProductHuntLine className=' fs-5 me-3'/><span>  Produit</span>                
                </Link>
                <Link to={"/produits"} className='list-group-item list-group-item-action py-2 my-1'>
                    <HiOutlineTableCells className=' fs-5 me-3'/><span> List Produit</span>                
                </Link>
                <a className='list-group-item list-group-item-action py-2 my-1'>
                    <FaRegClipboard className=' fs-5 me-3'/><span >Report</span>                
                </a>
                <Link to={"/clientss"} className='list-group-item list-group-item-action py-2 my-1'>
                    <IoPeople className=' fs-5 me-3'/><span >Client</span>                
                </Link>
                <Link onClick={toggleModal} className='list-group-item list-group-item-action py-2 my-1'>
                    <BiPowerOff className=' fs-5 me-3'/><span >Logout</span>                
                </Link>
            </div>  
            {modal && (         
            <div className='ModalLougot'> 
                <span className='TextLougot'> Deconnexion </span>
                <PiWarningOctagonBold style={{color:"yellow", width:"100px", height:"100px", marginLeft:"15%"}}/>
                <button onClick={toggleModal} className='btn btn-success'>Annuler</button>                    
                <Link  to={"/"} style={{marginLeft:"2%"}} className='btn btn-danger'>Logout</Link>
            </div>
          )}
              
        </div>              
    )
}

export default Slidebar
