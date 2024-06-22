import React, { useState } from 'react'
import Slidebar from '../../Slidebar/Slidebar';
import Nav from '../../Nav/Nav';
import ProduitClients from './ProduitClients';

function ProduitCli() {
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
            <ProduitClients Toggle={Toggle}/>
          </div>
      </div>
    </div>
  )
}

export default ProduitCli
