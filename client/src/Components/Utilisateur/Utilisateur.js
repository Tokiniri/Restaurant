// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import "./Utilisateur.css";
// import Pizza from "../Users/Images/Pizza.jpg"

// function Utilisateur() {
//   const [users, setUsers] = useState([]);
//   const [data, setData] = useState(
//     {
//       categorie: "",
//       nom: "",
//       description:"",
//       prix: "",
//     }
//   )
//   const [image, setImage] = useState(null)

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('http://localhost:8081/users');
//         setUsers(response.data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };
//     fetchUsers();
//   });

//   const [test, setTest] = useState(false)
//   const handleSend = (e) => {
//     e.preventDefault();
//     const img = new FormData()
//     img.append('file', image)
//     Object.entries(data).forEach(([key, value]) => {
//       img.append(key, value)
//     })
//     console.log(img)
//     axios.post("http://localhost:8081/addMenu", img)
//     .then(() => {
//       console.log("sucess")
//       setTest(!test)
//     })
//     .catch(()=>{
//       console.error("erreur", e)
//     })
//   }

//   const [dt, setDt] = useState({})
//   useEffect(() => {
//     const fetchData = async() => {
//       const reponse = await axios("http://localhost:8081/users")
//       console.log(reponse.data)
//       setDt(reponse.data)
//       console.log("dt", dt)
//     }
//     fetchData()
//   }, [test])

//   return (
//     <div className='bodygenereleU'>
//       {users.map((user, index) => (
//         <div className='Borderivelany' key={index}>
//           <div className='upc'>
//             <div className='gradiant'></div>
//             <div className='profile-down'>
//             <img src={Pizza} alt="Photo de profil" />
//               <span className='Anarana'>{dt.nom}</span>
//               <p className='TitreHotel'>Arc Hotel</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Utilisateur;

import React from 'react'

function Utilisateur() {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button>
<div className='modal modal-open'>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
</div>
    </div>
  )
}

export default Utilisateur


