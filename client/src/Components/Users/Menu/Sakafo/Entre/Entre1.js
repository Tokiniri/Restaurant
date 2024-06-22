// import React, { useEffect, useState } from 'react'
// import Pizza from "../../../../Users/Images/Pizza.jpg"
// import "./Entre.css"
// import { ImStarEmpty,ImStarFull } from "react-icons/im";
// import axios from 'axios';
// import { Link } from "react-router-dom"
// import { RiArrowGoBackFill } from "react-icons/ri";
// import Navbar1 from '../../../NavBar/Navbar1';





// function Entre1() {
//   const [dt, setDt] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:8081/affichageMenuEntre");
//         // Triez les données par une clé unique, par exemple, l'ID
//         const sortedData = response.data.sort((a, b) => a.id - b.id);
//         setDt(sortedData);
//       } catch (error) {
//         console.error("Erreur lors de la récupération des données :", error);
//       }
//     };

//     fetchData();
//   }, []);

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
//         {dt.map((entre, index) => (
//           <div key={index} className='Boissonsglobal' style={{ margin: "1%", width: "calc(25% - 2%)" }} >
//             <div className="card w-96 bg-base-100 shadow-xl" style={{ width: "100%" }} >
//               <div style={{ width: "260px", height: "150px", overflow: "hidden" }}>
//                 {/* Définissez des dimensions fixes pour les images */}
//                 <img src={entre.image} alt={entre.nom} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//               </div>
//               <div className="card-body text-center">
//                 <h2 className="card-title" style={{ color: "green", paddingLeft: '%' }}>{entre.nom}</h2>
//                 <p style={{ marginLeft: "-10px" }}>
//                   {entre.prix} Ar<br />
//                   {entre.description}
//                 </p>
//                 <div className='Etoile'><ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull /><ImStarEmpty /></div>
//                 <div className="card-actions justify-center">
//                   <button className="buttonsakafo">Buy Now</button>
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
import "./Entre.css";
import { Link } from 'react-router-dom';
import { RiArrowGoBackFill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../../actions/cartAction';

function Entre1() {
  const [dt, setDt] = useState([]);
  const dispatch = useDispatch(); // Use dispatch from react-redux

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8081/affichageMenuEntre");
        const sortedData = response.data.sort((a, b) => a.id - b.id);
        setDt(sortedData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (entre) => {
    dispatch(addToCart(entre)); // Dispatch the action to add item to cart
  };

  return (
    <div className='Dessertsglobal1'>
      <div>
        <Navbar1 size={5} />
      </div>
      <div>
        <Link to={"/Menu"}>
          <RiArrowGoBackFill style={{ width: "30px", height: "30px", margin: "2%", color: "#bf5700" }} />
        </Link>
        <p style={{ marginLeft: "40%", fontSize: "2rem", color: "#bf5700", fontFamily: "cursive", marginBottom: '2%' }}>LES DESSERTS DISPONIBLE</p>
      </div>
      <div className='Dessertsglobal'>
        <div className='Boissons01' style={{ display: "flex", flexWrap: "wrap" }}>
          {dt.map((entre, index) => (
            <div key={index} className='Boissonsglobal' style={{ margin: "1%", width: "calc(25% - 2%)" }}>
              <div className="card w-96 bg-base-100 shadow-xl" style={{ width: "100%" }}>
                <div style={{ width: "338px", height: "150px", overflow: "hidden" }}>
                  <img src={entre.image} alt={entre.nom} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div className="card-body text-center">
                  <h2 className="card-title" style={{ color: "green", marginLeft: '25%' }}>{entre.nom}</h2>
                  <p style={{ marginLeft: "-10px" }}>
                    {entre.prix} Ar<br />
                    {entre.description}
                  </p>
                  <div className='Etoile'><ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull /><ImStarEmpty /></div>
                  <div className="card-actions justify-center">
                    <button className="buttonsakafo" onClick={() => handleAddToCart(entre)}>Buy Now</button>
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

export default Entre1;