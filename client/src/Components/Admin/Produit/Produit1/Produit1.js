import React, { useEffect, useState } from 'react'
import Nav1 from '../../Nav/Nav1'
import "./Produit1.css"
import Pizza from "../../../Users/Images/Pizza.jpg"
import { FaPenToSquare } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Admentre from '../Admentre/Admentre';
import Admdesserts from '../Admdesserts/Admdesserts';
import Admplats from '../Admplats/Admplats';
import Admpizza from '../Admpizza/Admpizza';
import Admnboisson from '../Admboissons/Admnboisson';



function Produit1({Toggle}) {
  const location = useLocation();
  const navigate = useNavigate();

  // state
  const [modal, setModal ] = useState(false);
  const [data, setData] = useState(
    {
      categorie: "",
      nom: "",
      description:"",
      prix: "",
    }
  )
  const [image, setImage] = useState(null)

  // action
  const toggleModal = () => {
    setModal(!modal);
    navigate("/produits");
  }
    if(modal){
      document.body.classList.add("active-modal")
    } else {
      document.body.classList.remove("active-modal")
    }

    const toggleRetour = () => {
      setModal(false);
    }
  
  const handleChange = (e) => {
    setData({...data, [e.target.id]: e.target.value})
  }
  const chargeImage = (e) => {
    setImage(e.target.files[0])
  }
  // teste
  const [test, setTest] = useState(false)
  const handleSend = (e) => {
    e.preventDefault();
    const img = new FormData()
    img.append('file', image)
    Object.entries(data).forEach(([key, value]) => {
      img.append(key, value)
    })
    console.log(img)
    axios.post("http://localhost:8081/addMenu", img)
    .then(() => {
      console.log("sucess")
      setTest(!test)
      window.location.reload();

    }, [location])
    .catch(()=>{
      console.error("erreur", e)
    })
  }


  return (
    <div className='px-3'> 
        <Nav1 Toggle={Toggle}/>
        <div className='BorderProduit1'>
          <div className='' style={{display:"flex"}}>
            <h2 style={{padding:"2%", paddingLeft:"5%"}}>List des Nouriture</h2>
            <button className='btn btn-success ' 
              onClick={toggleModal} 
              style={{marginLeft:"40%",color:"white", width:'120px', height:"50px", marginTop:"2%"}}
              >
                Ajout
             </button>
          </div>
          {modal && (         
            <div className='ModalAjout'>
                  <form onSubmit={handleSend}>
                    <h2 className='text-center'> Ajouter des nouriture  </h2>
                    <div className='mb-2'>
                      <label>Categorie</label>
                        <select className="form-control" id='categorie' onChange={handleChange}>
                          <option disabled selected>Who shot first?</option>
                          <option value="Plats">Plats principaux</option>
                          <option value="Desserts">Desserts</option>
                          <option value="Entre">Entre</option>
                          <option value="Pizza">Pizza</option>
                          <option value="Boissons">Boissons</option>
                        </select>
                        <label htmlFor=''>Photo nouriture</label>
                        <input type='file' className='form-control' onChange={chargeImage} required/>
                        {/* <button className='btn btn-white'>Upload</button> */}
                        <br/>
                        <label htmlFor=''>Nom</label>
                        <input
                            type='text'
                            placeholder='Entrer Nom'
                            className='form-control'
                            id='nom'
                            value={data.nom}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Description</label>
                        <input
                            type='text'
                            placeholder='Entrer description'
                            className='form-control'
                            id='description'
                            value={data.description}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Prix</label>
                        <input
                            type='number'
                            placeholder='Entrer le prix'
                            className='form-control'
                            id='prix'
                            value={data.prix}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <br/>
                    <button
                    style={{color:"white"}} className='btn btn-info me-2'>Submit</button>
                    <button to={"/produits"} 
                    onClick={toggleRetour}
                    style={{backgroundColor:"red", color:"white"}}
                    className='btn btn-danger me-2'
                    >Retour</button>
                    </form>  
            </div>
          )}
          
            <h6 style={{paddingLeft:"2%"}}>I - CATEGORIES ENTRE</h6>
            <div style={{padding:"1.5%"}}>
              <Admentre/>
            </div>
            
            <h6 style={{paddingLeft:"2%"}}>II - PLATS PRINCIPAUX</h6>
            <div style={{padding:"1.5%"}}>
                  <Admplats/>
            </div>

            <h6 style={{paddingLeft:"2%"}}>III - PIZZA</h6>
            <div style={{padding:"1.5%"}}>
              <Admpizza/>
            </div>

            <h6 style={{paddingLeft:"2%"}}>IV - DESSERTS</h6>
            <div style={{padding:"1.5%"}}>
              <Admdesserts/>
            </div>

            <h6 style={{paddingLeft:"2%"}}>V - BOISSONS</h6>
            <div style={{padding:"1.5%"}}>
              <Admnboisson/>
            </div>
        </div>
    </div>
  )
}

export default Produit1

