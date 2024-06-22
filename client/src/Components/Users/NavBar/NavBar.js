import React from 'react';
import Logorestaurant2 from '../Images/Logorestaurant2.jpg';
import { Link } from "react-router-dom"
import Avatar2 from "../../Users/Images/Avatar2.png"

const NavBar = ({size}) => {
  return (
    <div className="navbar bg-orange-200 text-primary-content justify-center" style={{height:"100px", width:"auto" , backgroundColor:"#bf5700"}}>
      <div className="flex-1">
        <a className="  text-xl">
          <img src={Logorestaurant2} style={{ width: '90px', height: 'auto', marginLeft:'50%' }} />
        </a>
      </div>
      <ul className="menu menu-horizontal bg-transparnat-200" 
      style={{ marginRight:"20%" , marginBottom:"-1%"}} >
        <li><Link to={"/Acceuil"} className='text-white text-decoration-none' style={{ fontFamily:"cursive", fontSize:"1.5rem"}}>Acceuil</Link></li>
        <li><Link to={"/Menu"} className='text-white text-decoration-none' style={{ fontFamily:"cursive", fontSize:"1.5rem"}}>Notre Carte</Link></li>
        <li><Link to={"/Contact"} className='text-white text-decoration-none' style={{ fontFamily:"cursive", fontSize:"1.5rem"}}>Contact</Link></li>
      </ul>
      <div className="dropdown dropdown-end " style={{marginRight:"2%", marginBottom:"-1%", color:"#bf5700" }}>
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " style={{color:"white"}} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            {/* <span className="badge badge-sm indicator-item text-black" style={{padding:"2%"}}>{size}</span> */}
          </div>
        </div>
        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
          <div className="card-body bg-orange-100">
            {/* <span className="font-bold  text-lg text-black">{size} Items</span> */}
            {/* <span className="text-info">Subtotal: Ar999</span> */}
            <div className="card-actions">
              <Link to={"/Cart"} className="btn btn-primary btn-block">View cart ZZZZZZ</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown dropdown-end " style={{marginRight:"2%" ,marginBottom:"1%"}}>
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar" >
          <div className="w-10 rounded-full" >
            <img  src={Avatar2} alt="Photo de profile"  />
          </div>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-orange-100 rounded-box w-52">
          <li>
            <a className="justify-between text-black text-decoration-none">
              Profile
              <span className="badge" style={{color:"gray", textDecorationColor:"none"}}>New</span>
            </a>
          </li>
          <li><a className='text-black text-decoration-none'>Settings</a></li>
          <li><Link to={"/"} className='text-black text-decoration-none'> Logout</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;