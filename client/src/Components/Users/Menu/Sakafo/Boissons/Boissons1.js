// import React, { useEffect, useState } from 'react'
// import Pizza from "../../../../Users/Images/Pizza.jpg"
// import "./Boissons.css"
// import { ImStarEmpty,ImStarFull } from "react-icons/im";
// import axios from 'axios';
// import { Link } from "react-router-dom"
// import { RiArrowGoBackFill } from "react-icons/ri";
// import Navbar1 from '../../../NavBar/Navbar1';





// function Entre1() {
//   const [dt, setDt] = useState([]);
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:8081/affichageMenuBoissons");
//         // Triez les données par une clé unique, par exemple, l'ID
//         const sortedData = response.data.sort((a, b) => a.id - b.id);
//         setDt(sortedData);
//       } catch (error) {
//         console.error("Erreur lors de la récupération des données :", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const addToCart = (item) => {
//     setCart([...cart, { ...item, date: new Date(), quantity: 1 }]);
//     console.log(item)
//   };

//   return (
//     <div style={{ backgroundColor: "whitesmoke" }}>
//       <div style={{padding:"0%"}}>
//         <Navbar1 size={5}/>
//       </div>
//       <div>
//         <Link to={"/Menu"}>
//           <RiArrowGoBackFill style={{ width: "30px", height: "30px" , margin:"2%", color:"maroon"}}  />
//         </Link>
//         <p style={{ marginLeft: "40%", fontSize: "2rem", color: "maroon", fontFamily: "cursive", marginBottom:'2%'}}>LES ENTRES DISPONIBLE</p>
//       </div>
//       <div className='Boissons01' style={{ display: "flex", flexWrap: "wrap" }}>
//         {dt.map((boissons, index) => (
//           <div key={index} className='Boissonsglobal' style={{ margin: "1%", width: "calc(25% - 2%)" }} >
//             <div className="card w-96 bg-base-100 shadow-xl" style={{ width: "100%" }} >
//               <div style={{ width: "260px", height: "150px", overflow: "hidden" }}>
//                 {/* Définissez des dimensions fixes pour les images */}
//                 <img src={boissons.image} alt={boissons.nom} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//               </div>
//               <div className="card-body text-center">
//                 <h2 className="card-title" style={{ color: "green", paddingLeft: '%' }}>{boissons.nom}</h2>
//                 <p style={{ marginLeft: "-10px" }}>
//                   {boissons.prix} Ar<br />
//                   {boissons.description}
//                 </p>
//                 <div className='Etoile'><ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull /><ImStarEmpty /></div>
//                 <div className="card-actions justify-center">
//                   <button onClick={() => addToCart(boissons)}className="buttonsakafo">Buy Now</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Entre1;

import React, { useEffect, useState } from 'react';
import Navbar1 from '../../../NavBar/Navbar1';
import axios from 'axios';
import { ImStarEmpty, ImStarFull } from "react-icons/im";
import "./Boissons.css";
import { Link } from 'react-router-dom';
import { RiArrowGoBackFill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../../actions/cartAction';

function Boissons1() {
  const [dt, setDt] = useState([]);
  const dispatch = useDispatch(); // Use dispatch from react-redux

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8081/affichageMenuBoissons");
        const sortedData = response.data.sort((a, b) => a.id - b.id);
        setDt(sortedData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (boissons) => {
    dispatch(addToCart(boissons)); // Dispatch the action to add item to cart
  };

  return (
    <div className='Dessertsglobal1'>
      <div>
        <Navbar1 size={5} />
      </div>
      <div>
        <Link to={"/Acceuil"}>
          <RiArrowGoBackFill style={{ width: "30px", height: "30px", margin: "2%", color: "#bf5700" }} />
        </Link>
        <p style={{ marginLeft: "40%", fontSize: "2rem", color: "#bf5700", fontFamily: "cursive", marginBottom: '2%' }}>LES BOISSONS DISPONIBLE</p>
      </div>
      <div className='Dessertsglobal'>
        <div className='Boissons01' style={{ display: "flex", flexWrap: "wrap" }}>
          {dt.map((boissons, index) => (
            <div key={index} className='Boissonsglobal' style={{ margin: "1%", width: "calc(25% - 2%)" }}>
              <div className="card w-96 bg-base-100 shadow-xl" style={{ width: "100%" }}>
                <div style={{ width: "260px", height: "150px", overflow: "hidden" }}>
                  <img src={boissons.image} alt={boissons.nom} style={{ marginTop:"2%", marginLeft:"40%", width: "100px", height: "100px", objectFit: "cover" }} />
                </div>
                <div className="card-body text-center">
                  <h2 className="card-title" style={{ marginLeft:"30%", color: "green", paddingLeft: '%' }}>{boissons.nom}</h2>
                  <p style={{ marginLeft: "-10px" }}>
                    {boissons.prix} Ar<br />
                    {boissons.description}
                  </p>
                  <div className='Etoile'><ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull /><ImStarEmpty /></div>
                  <div className="card-actions justify-center">
                    <button className="buttonsakafo" onClick={() => handleAddToCart(boissons)}>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Boissons1;

