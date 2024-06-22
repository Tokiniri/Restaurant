import React, { useState } from 'react';
import { RiMenu2Fill } from "react-icons/ri";
import "bootstrap/js/dist/dropdown"
import { RxAvatar } from "react-icons/rx";
import "bootstrap/js/dist/collapse"
import { Link } from 'react-router-dom';


function Nav({Toggle}) {
  return (
    <div >
      <nav className='navbar navbar-expand-sm navbar-dark bg-transparent  '>
        <RiMenu2Fill className='navbar-brand bi bi-justify-left fs-4' onClick={Toggle} style={{color:"midnightblue"}}/>
        <button className='navbar-toggler d-lg-none' 
          type='button'
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label='Toggle navigation'
        >
          <RiMenu2Fill style={{color:"midnightblue", cursor:"pointer"}}/>
        </button>
        <div className='collapse navbar-collapse' id='collapsibleNavId'>
          <ul className='navbar-nav me-auto mt-2 mt-lg-0'>
            <li className='nav-item'>
              <Link to={"/produits"}  className='nav-link active' href="#" aria-current="page" style={{color:"midnightblue"}}>Produit <span className='visual' style={{color:"midnightblue"}}></span> </Link>
            </li>
            <li className='nav-item'>
              <Link to={"/Produit"} className='nav-link' href='#' style={{color:"midnightblue"}}>Produit</Link>
            </li>
          </ul>
          <form className='d-flex my-2 my-lg-0'>
            <input className='form-control me-sm-2' type='text' placeholder='Search' style={{border:"0.1rem solid midnightblue"}}/>
            <button className='btn btn-outline-success my-2 my-sm-0' type='submit'style={{backgroundColor:"green", color:"white"}}>Search</button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
