import React, { useState } from 'react';
import { IoArrowBackSharp } from "react-icons/io5";
import "bootstrap/js/dist/dropdown"
import { RxAvatar } from "react-icons/rx";
import "bootstrap/js/dist/collapse"
import { Link } from 'react-router-dom';


function Nav({Toggle}) {
  return (
    <div >
      <nav className='navbar navbar-expand-sm navbar-dark bg-transparent  '>
        <div className='collapse navbar-collapse' id='collapsibleNavId'>
          <ul className='navbar-nav me-auto mt-2 mt-lg-0'>
          <li className='nav-item'>
              <Link className='nav-link active' to={"/admin/commande"} aria-current="page" style={{color:"midnightblue"}}><IoArrowBackSharp style={{color:"maroon", fontSize:"2rem"}}/> <span className='visual' style={{color:"midnightblue"}}></span> </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link active' to={"/produits"} aria-current="page" style={{color:"midnightblue"}}>Produit<span className='visual' style={{color:"midnightblue"}}></span> </Link>
            </li>
            <li className='nav-item'>
              <Link to={"/Admin"} className='nav-link' href='#' style={{color:"midnightblue"}}>Dashboard</Link>
            </li>
          </ul>
          {/* <form className='d-flex my-2 my-lg-0'>
            <input className='form-control me-sm-2' type='text' placeholder='Search' style={{border:"0.1rem solid midnightblue"}}/>
            <button className='btn btn-outline-success my-2 my-sm-0' type='submit'style={{backgroundColor:"green", color:"white"}}>Search</button>
          </form> */}
        </div>
      </nav>
    </div>
  );
}

export default Nav;
