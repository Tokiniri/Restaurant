import React from 'react'
import Nav1 from '../../Nav/Nav1'
import "./ProduitClients.css"
import Pizza from "../../../Users/Images/Pizza.jpg"
import Entresary from "../../../Users/Images/Entresary.jpg"
import Platssary from "../../../Users/Images/Platssary.jpg"
import Dessertssary from "../../../Users/Images/Dessertssary.jpg"
import Boissonssary from "../../../Users/Images/Boissonssary.jpg"
import { Link } from 'react-router-dom'


function ProduitClients({Toggle}) {
  return (
    <div>
        <Nav1 Toggle={Toggle}/>
        <div className='ProduitDispo'>
        <div className='m-2'>
            <span style={{color:"blue", fontFamily:"cursive", fontSize:"1.4rem", marginLeft:"40%"}}>Les Produits disponibles </span>
        </div>
        <div className='DivCard' style={{display:'flex'}}>
            <div className="card" style={{marginLeft:"3%"}}>
                <div className="image">
                    <img className='sary' src={Entresary} alt="PIZZA" />
                </div>
                    <div className="content">
                        <a href="#">
                            <span className="title">
                                Categorie entré <br/>
                                
                            </span>
                        </a>
                        <Link to={"/entre"} className="action" href="#">
                            ENTRE
                            <span aria-hidden="true">
                            →
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="card" style={{marginLeft:"3%"}}>
                <div className="image">
                    <img className='sary' src={Platssary} alt="PIZZA" />
                </div>
                    <div className="content">
                        <a href="#">
                            <span className="title">
                            Plats principaux  <br/>
                            </span>
                        </a>
                        <Link to={"/plats"} className="action" href="#">
                            PLATS
                            <span aria-hidden="true">
                            →
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="card" style={{marginLeft:"3%"}}>
                <div className="image">
                    <img className='sary' src={Dessertssary} alt="PIZZA" />
                </div>
                    <div className="content">
                        <a href="#">
                            <span className="title">
                            Categorie Desserts <br/>
                            </span>
                        </a>
                        <Link to={"/desserts"} className="action" href="#">
                            DESSERTS
                            <span aria-hidden="true">
                            →
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='DivCard' style={{display:'flex', marginTop:'2%' }}>
            <div className="card" style={{marginLeft:"3%"}}>
                <div className="image">
                    <img className='sary' src={Pizza} alt="PIZZA" />
                </div>
                    <div className="content">
                        <a href="#">
                            <span className="title">
                                Categorie Pizza <br/>
                            </span>
                        </a>
                        <Link to={"/pizza"} className="action" href="#">
                            PIZZA
                            <span aria-hidden="true">
                            →
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="card" style={{marginLeft:"3%"}}>
                <div className="image">
                    <img className='sary' src={Boissonssary} alt="PIZZA" />
                </div>
                    <div className="content">
                        <a href="#">
                            <span className="title">
                                Categorie Boissons <br/>
                            </span>
                        </a>
                        <Link to={"/boissons"}  className="action" href="#">
                            BOISSONS
                            <span aria-hidden="true">
                            →
                            </span>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ProduitClients
