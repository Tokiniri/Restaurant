import React, { useState } from 'react'
import FileUpload from '../Signup/FileUpload/FileUpload'
import Slidebar from './Slidebar/Slidebar'
import Home from './Home/Data'

function Admin() {
  const [toggle, setToggle ] = useState(true);
  const Toggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className='container-fluid  min-vh-100 '>
      <div className='row'>
          {toggle && <div className='col-4 col-md-2 vh-100 position-fixed' style={{backgroundColor:"midnightblue"}}>
            <Slidebar/>
          </div>}
          {toggle &&<div className='col-4 col-md-2 '></div>}
          <div className='col'>
            <Home Toggle={Toggle}/>
          </div>
      </div>
    </div>
  )
}

export default Admin
