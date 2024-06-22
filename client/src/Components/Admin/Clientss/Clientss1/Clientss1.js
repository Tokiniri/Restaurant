import React, { useEffect, useState } from 'react'
import Nav1 from '../../Nav/Nav1'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import Avatar from "../../../Users/Images/Avatar.jpg"


function Clientss1({Toggle}) {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8081/users")
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  }, [])

  
  return (
    <div className='px-3'>
      <Nav1 Toggle={Toggle}/>
      <div className='BorderProduit1'>
          <div className='' style={{display:"flex"}}>
            <h2 style={{padding:"2%", paddingLeft:"5%"}}>Liste utilisateur et admin</h2>
          </div>
            <div style={{padding:"1.5%"}}>
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Avatar</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((users, index) => {
                        return <tr key={index}>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img  src={Avatar}  style={{with:"50px", height:"50px"}} alt="Photo de Profil" />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          {users.FirstName}
                          <br/>
                          <span className="badge badge-ghost badge-sm"></span>
                        </td>
                        <td>{users.LastName}</td>
                        <td>
                          <button className="btn btn-ghost btn-xs">{users.Email}</button>
                        </td>
                        <td>{users.Role}</td>
                      </tr>
                    })}
                    
                  </tbody>
                  {/* foot */}
                  <tfoot>
                    <tr>
                    </tr>
                  </tfoot>
                  
                </table>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Clientss1
