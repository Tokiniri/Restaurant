import React, { useState } from 'react'
import Slidebar from '../Slidebar/Slidebar';
import Produit1 from './Produit1/Produit1';

function Produit() {
    const [toggle, setToggle ] = useState(true);
    const Toggle = () => {
      setToggle(!toggle)
    }
  return (
    <div className='container-fluid  min-vh-100 '>
      <div className='row'>
          {toggle && 
          <div className='col-4 col-md-2 vh-100 position-fixed' style={{backgroundColor:"midnightblue"}}>
            <Slidebar/>
          </div>
          }
          {toggle &&
          <div className='col-4 col-md-2 '>
          </div>
          }
          <div className='col'>
            <Produit1 Toggle={Toggle}/>
          </div>
      </div>
    </div>
  )
}

export default Produit
