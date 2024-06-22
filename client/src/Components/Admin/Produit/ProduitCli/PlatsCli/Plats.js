import React, { useEffect, useState } from 'react'
import Pizza from "../../../../Users/Images/Pizza.jpg"
import "./Plats.css"
import { ImStarEmpty,ImStarFull } from "react-icons/im";
import axios from 'axios';
import { Link } from "react-router-dom"
import { RiArrowGoBackFill } from "react-icons/ri";





function Plats1() {
  const [dt, setDt] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8081/affichageMenuPlats");
        // Triez les données par une clé unique, par exemple, l'ID
        const sortedData = response.data.sort((a, b) => a.id - b.id);
        setDt(sortedData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor: "whitesmoke", padding: "1.5%" }}>
      <div>
        <Link to={"/produit"}>
          <RiArrowGoBackFill style={{ width: "30px", height: "30px" }} />
        </Link>
        <p style={{ marginLeft: "40%", fontSize: "2rem", color: "blue", fontFamily: "cursive" }}>LES PLATS DISPONIBLE</p>
      </div>
      <div className='Boissons01' style={{ display: "flex", flexWrap: "wrap" }}>
        {dt.map((plats, index) => (
          <div key={index} className='Boissonsglobal' style={{ margin: "1%", width: "calc(25% - 2%)" }} >
            <div className="card w-96 bg-base-100 shadow-xl" style={{ width: "100%" }} >
              <div style={{ width: "260px", height: "150px", overflow: "hidden" }}>
                {/* Définissez des dimensions fixes pour les images */}
                <img src={plats.image} alt={plats.nom} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div className="card-body text-center">
                <h2 className="card-title" style={{ color: "green", paddingLeft: '%' }}>{plats.nom}</h2>
                <p style={{ marginLeft: "-10px" }}>
                  {plats.prix} Ar<br />
                  {plats.description}
                </p>
                <div className='Etoile'><ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull /><ImStarEmpty /></div>
                <div className="card-actions justify-center">
                  <button className="buttonsakafo">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plats1;

