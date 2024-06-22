// import React from 'react';
// import { useSelector } from 'react-redux';

// function Cart() {
//   const cartItems = useSelector((state) => state.cart.items);

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => total + item.prix * item.quantity, 0);
//   };

//   return (
//     <div>
//       <h2 style={{marginLeft:"45%",fontFamily:"cursive", fontSize:"3rem", color:"maroon"}}>Commande </h2>
//       <div style={{display:"flex"}}>
//       {cartItems.length > 0 ? (
//         <ul>
//           {cartItems.map((item, index) => (
//             <li key={index}>
//               <img src={item.image} alt={item.nom} style={{ width: "150px", height: "150px" }} />
//               {item.nom} - {item.prix} Ar x {item.quantity}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Your cart is empty</p>
//       )}
//       </div>
//       <h3 style={{marginLeft:"70%", marginTop:"5%"}}>Total: {calculateTotal()} Ar</h3>
//     </div>
//   );
// }

// export default Cart;
// src/Components/Cart/Cart.js
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { incrementQuantity, decrementQuantity } from '../../../actions/cartAction';
// import "./Cart.css"

// function Cart() {
//   const cartItems = useSelector((state) => state.cart.items);
//   const dispatch = useDispatch();

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => total + item.prix * item.quantity, 0);
//   };

//   return (
//     <div>
//       <h2 style={{marginLeft:"45%",fontFamily:"cursive", fontSize:"3rem", color:"maroon"}}>Commande </h2>
//       {cartItems.length > 0 ? (
//         <table className="table" style={{width: "80%", margin: "0 auto"}}>
//           <thead>
//             <tr>
//               <th>Image</th>
//               <th>Nom</th>
//               <th>Prix</th>
//               <th>Quantité</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cartItems.map((item, index) => (
//               <tr key={index}>
//                 <td>
//                   <img src={item.image} alt={item.nom} style={{ width: "100px", height: "100px" }} />
//                 </td>
//                 <td>{item.nom}</td>
//                 <td>{item.prix} Ar</td>
//                 <td>{item.quantity}</td>
//                 <td>
//                   <button className='btn btn-success' style={{marginRight: '5%'}} onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
//                   <button className='btn btn-danger' onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//           <tfoot>
//             <tr>
//               <td colSpan="4" style={{textAlign: "right"}}>Total:</td>
//               <td>{calculateTotal()} Ar</td>
//             </tr>
//           </tfoot>
//         </table>
//       ) : (
//         <p style={{textAlign: "center"}}>Votre panier est vide</p>
//       )}
//     </div>
//   );
// }

// export default Cart;

//FAHATELO 

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../../../actions/cartAction';
import "./Cart.css"
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';



function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [tableNumber, setTableNumber] = useState('');
  
  const handleTableSelect = (e) => {
    setTableNumber(e.target.value);
  };
  

  

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.prix * item.quantity, 0);
  };

  const [data, setData] = useState(
    {
      categorie: "",
      nom: "",
      description:"",
      prix: "",
      quantity:"",
      total:""
    }
  )
  const [image, setImage] = useState(null)
  const [test, setTest] = useState (false)
  
  const handleSend = (e) => {
    e.preventDefault();
    const img = new FormData()
    img.append('file', image)
    Object.entries(data).forEach(([key, value]) => {
      img.append(key, value)
    })
    console.log(img)
    axios.post("http://localhost:8081/addCart", cartItems)
    .then(() => {
      console.log("sucess")
      setTest(!test)
      // Afficher la notification SweetAlert de succès
      Swal.fire({
        icon: 'success',
        title: 'Commande passée avec succès',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        // Rediriger vers une autre page après la notification
        window.location.href =("/Acceuil"); // Recharge la page lorsque le bouton est cliqué
      });
    })
    
    .catch(()=>{
      console.error("erreur", e)
    })
    console.log(cartItems)
  }
  
  const handleCancel = () => {
    // Afficher la notification SweetAlert d'annulation de commande
    Swal.fire({
      icon: 'info',
      title: 'Commande annulée',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      // Rediriger vers la page du menu après la notification
      window.location.href = '/Acceuil';
    });
  }
  

  return (
    <div>
      <h2 style={{marginLeft:"43%",fontFamily:"cursive", fontSize:"3rem", color:"maroon",marginBottom:"2%"}}>Commande </h2>
      {cartItems.length > 0 ? (
        <div>
          <table className="table" style={{width: "80%", margin: "0 auto"}}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Nom</th>
              <th>Prix</th>
              <th>Quantité</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>
                  <img src={item.image} alt={item.nom} style={{ width: "100px", height: "100px" }} />
                </td>
                <td>{item.nom} {item.description}</td>
                <td>{item.prix} Ar</td>
                <td>{item.quantity}</td>
                <td>
                  <button className='btn btn-success' style={{marginRight: '5%'}} onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                  <button className='btn btn-danger' onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" style={{textAlign: "right"}}>Total:</td>
              <td>{calculateTotal()} Ar</td>
            </tr>
          </tfoot>
        </table>
        <div style={{margin:"5%", marginLeft:"55%", display:"flex"}}>
          <Link to={"/Menu"} className='btn btn-info text-white'>Retourner vers menu</Link>
          <button style={{marginLeft:'2%'}} className='btn btn-danger' onClick={handleCancel}>Annuler la Commande</button>
          <Link to={"/Acceuil"} style={{marginLeft:'2%'}} onClick={handleSend} className='btn btn-success'>Passer la Commande</Link>
          </div>
      </div>
        
      ) : (
        <div  style={{textAlign: "center"}}>
          <p style={{textAlign: "center"}}>Votre panier est vide :</p> <br/>
          <Link to={"/Menu"} className='btn'>
            Voire la carte
          </Link>
        </div>

      )}
   
    </div>
  );
}

export default Cart;
