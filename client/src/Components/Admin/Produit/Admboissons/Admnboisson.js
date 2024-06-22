// import React, { useEffect, useState } from 'react'
// import "./Admnboisson.css"
// import Pizza from "../../../Users/Images/Pizza.jpg"
// import { FaPenToSquare } from "react-icons/fa6";
// import { MdDelete } from "react-icons/md";
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';





// function Admnboisson() {


//   const location = useLocation();
//   const [data, setData] = useState(
//         {
//           categorie: "",
//           nom: "",
//           description:"",
//           prix: "",
//         }
//       )
//     const [image, setImage] = useState(null)
//   // teste
//     const [test, setTest] = useState(false)
//     const handleSend = (e) => {
//       e.preventDefault();
//       const img = new FormData()
//       img.append('file', image)
//       Object.entries(data).forEach(([key, value]) => {
//         img.append(key, value)
//       })
//       console.log(img)
//       axios.post("http://localhost:8081/addMenu", img)
//       .then(() => {
//         console.log("sucess")
//         setTest(!test)
//       })
//       .catch(()=>{
//         console.error("erreur", e)
//       })
//     }
//   // sary
//   const [dt, setDt] = useState({})
//     useEffect(() => {
//         const fetchData = async () => {
//           try {
//             const response = await axios.get("http://localhost:8081/affichageMenuBoissons");
//             setDt(response.data);
//           } catch (error) {
//             console.error("Erreur lors de la récupération des données :", error);
//           }
//         };
    
//         fetchData();
//       }, []);
//   return (
//     <div>
//         <div className="overflow-x-auto">
//                 <table className="table">
//                   {/* head */}
//                   <thead>
//                     <tr>
//                       <th>
//                         <label>
//                           <input type="checkbox" className="checkbox" />
//                         </label>
//                       </th>
//                       <th>Photo</th>
//                       <th>Nom</th>
//                       <th>Description</th>
//                       <th>Prix</th>
//                       <th>Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {Array.isArray(dt) ? (
//                     dt.map((boissons, index)=>( 
//                     <tr key={index}>
//                       <th>
//                         <label>
//                           <input type="checkbox" className="checkbox" />
//                         </label>
//                       </th>
//                       <td>
//                         <div className="flex items-center gap-3">
//                           <div className="avatar">
//                             <div className="mask mask-squircle w-12 h-12">
//                               <img src={boissons.image} style={{with:"50px", height:"50px"}} alt={boissons.nom} />
//                             </div>
//                           </div>
//                           <div>
//                             <div className="font-bold">Hart Hagerty</div>
//                             <div className="text-sm opacity-50">United States</div>
//                           </div>
//                         </div>
//                       </td>
//                       <td>
//                         {boissons.nom}
//                         <br/>
//                         <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
//                       </td>
//                       <td>{boissons.description}</td>
//                       <th>
//                         <button className="btn btn-ghost btn-xs">{boissons.prix}</button>
//                       </th>
//                       <th>
//                         <div style={{ display: "flex", alignItems: "center" , marginTop:"10%"}}>
//                           <FaPenToSquare style={{ color: "blue", width: "24px", height: "24px", cursor: "pointer" }} />
//                           <MdDelete style={{ color: "red", width: "24px", height: "24px", cursor: "pointer", marginLeft: "10px" }} />
//                         </div>
//                       </th>                    
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="5">Aucune donnée disponible</td>
//                     </tr>
//                   )}
//                   </tbody>
//                   {/* foot */}
//                   <tfoot>
//                     <tr>
//                     </tr>
//                 </tfoot>                  
//             </table>
//         </div>
//     </div>
//   )
// }

// export default Admnboisson

import React, { useEffect, useState } from 'react';
import "./Admnboisson.css";
import { FaPenToSquare } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import axios from 'axios';

function Admnboisson() {
  const [dt, setDt] = useState({});
  const [id, setId] = useState();
  const [modal, setModal] = useState(false);
  const [supprimer, setSupprimer] = useState(false);
  const [data, setData] = useState({
    categorie: "",
    nom: "",
    description: "",
    prix: "",
  });
  const [image, setImage] = useState(null);
  const [itemIdToDelete, setItemIdToDelete] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8081/affichageMenuBoissons");
        setDt(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };
    fetchData();
  }, []);

  const toggleModal = (id) => {
    setModal(true);
    setId(id);
    const data = dt.filter(index => index.id === id);
    setData(data[0]);
  }

  const toggleRetour = () => {
    setModal(false);
  }

  const toggleSupprimer = (id) => {
    setItemIdToDelete(id);
    setSupprimer(true);
    setId(id);
  };

  const toggleSuppre = () => {
    setSupprimer(false);
  }

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  }

  const chargeImage = (e) => {
    setImage(e.target.files[0]);
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', image);
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios.put(`http://localhost:8081/update/${id}`, formData)
      .then(() => {
        console.log("Mise à jour réussie");
        setModal(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour :", error);
      });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:8081/deleteBoissons/${id}`)
      .then(response => {
        console.log(response.data.message);
        window.location.reload();
      })
      .catch(error => {
        console.error("Erreur lors de la suppression :", error);
      });
  };

  return (
    <div>
      {supprimer && (
        <div>
          <div className='ModalSupprimerBoisson'>
            <form onSubmit={handleDelete}>
              <h2 className='text-center' style={{ fontSize: "1.8rem" }}>Êtes-vous sûr de vouloir supprimer cet élément ?</h2>
              <button onClick={toggleSuppre} className='btn btn-info text-white me-2' style={{ marginLeft: "30%", marginTop: "2%", width: "100px" }}>
                Annuler
              </button>
              <button className='btn btn-danger text-white me-2' style={{ marginLeft: "1.5%", marginTop: "2%", backgroundColor: "red" }} type="submit">
                Supprimer
              </button>
            </form>
          </div>
        </div>
      )}
      {modal && (
        <div className='ModalModifierBoisson'>
          <form onSubmit={handleUpdate}>
            <h2 className='text-center'> Modifier des nouriture </h2>
            <div className='mb-2'>
              <label>Categorie</label>
              <select className="form-control" id='categorie' onChange={handleChange}>
                <option disabled selected>Choisir une catégorie</option>
                <option value="Plats">Plats principaux</option>
                <option value="Desserts">Desserts</option>
                <option value="Entre">Entre</option>
                <option value="Pizza">Pizza</option>
                <option value="Boissons">Boissons</option>
              </select>
              <label htmlFor=''>Photo nouriture</label>
              <input type='file' className='form-control' onChange={chargeImage} />
              <br />
              <label htmlFor=''>Nom</label>
              <input
                type='text'
                placeholder='Entrer Nom'
                className='form-control'
                id='nom'
                value={data.nom}
                onChange={handleChange}
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
              />
            </div>
            <br />
            <button className='btn btn-info me-2 text-white'>Submit</button>
            <button
              onClick={toggleRetour}
              className='btn btn-danger me-2 text-white' style={{ backgroundColor: "red" }}
            >Retour</button>
          </form>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Photo</th>
              <th>Nom</th>
              <th>Description</th>
              <th>Prix</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(dt) ? (
              dt.map((boissons, index) => (
                <tr key={index}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={boissons.image} style={{ width: "50px", height: "50px" }} alt={boissons.nom} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{boissons.nom}</div>
                        <div className="text-sm opacity-50">{boissons.description}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {boissons.nom}
                    <br />
                    <span className="badge badge-ghost badge-sm">Boissons stars</span>
                  </td>
                  <td>{boissons.description}</td>
                  <td>
                    <button className="btn btn-ghost btn-xs">{boissons.prix}</button>
                  </td>
                  <td>
                    <div style={{ display: "flex", alignItems: "center", marginTop: "10%" }}>
                      <FaPenToSquare onClick={(e) => toggleModal(boissons.id)} style={{ color: "blue", width: "24px", height: "24px", cursor: "pointer", marginLeft: "25%" }} />
                      <MdDelete onClick={() => toggleSupprimer(boissons.id)} style={{ color: "red", width: "24px", height: "24px", cursor: "pointer", marginLeft: "10px" }} />
                      
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">Aucune donnée disponible</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admnboisson;
