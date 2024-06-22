// import React from 'react'
// import { useState, useEffect } from 'react';
// import Home from './Home'
// import axios from 'axios';
// function Data() {
//     const [clients, setClients] = useState([]);
//     const [entres, setEntres] = useState([]);
//     const [plats, setPlats] = useState([]);
//     const [desserts, setDesserts] = useState([]);
//     const [pizzas, setPizzas] = useState([]);
//     const [boissons, setBoissons] = useState([]);
//     const [show, setShow] = useState(false)

//   useEffect(() => {
//     // Appel à votre backend pour récupérer les données des clients
//     axios.get("http://localhost:8081/users")
//     .then(res => setClients(res.data))
//     .catch(err => console.log(err));
    
//     axios.get("http://localhost:8081/affichageMenuDesserts")
//     .then(res => setDesserts(res.data))
//     .catch(err => console.log(err));  

//     axios.get("http://localhost:8081/affichageMenuPlats")
//     .then(res => setPlats(res.data))
//     .catch(err => console.log(err));  

//     axios.get("http://localhost:8081/affichageMenuEntre")
//     .then(res => setEntres(res.data))
//     .catch(err => console.log(err));  

//     axios.get("http://localhost:8081/affichageMenuPizza")
//     .then(res => setPizzas(res.data))
//     .catch(err => console.log(err)); 

//     axios.get("http://localhost:8081/affichageMenuBoissons")
//     .then(res => setBoissons(res.data))
//     .catch(err => console.log(err));  

//     setShow(true)
//   }, []);
//   console.log(show)
//   return (
//     <>
//     {
//         show && (<Home entres={entres} plats={plats} desserts={desserts} pizzas={pizzas} boissons={boissons} clients={clients} />)
//     }
//     </>
//   )
// }

// export default Data

import React, { useState, useEffect } from 'react';
import Home from './Home';
import axios from 'axios';

function Data() {
  const [clients, setClients] = useState([]);
  const [entres, setEntres] = useState([]);
  const [plats, setPlats] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [pizzas, setPizzas] = useState([]);
  const [boissons, setBoissons] = useState([]);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [clientsRes, dessertsRes, platsRes, entresRes, pizzasRes, boissonsRes] = await Promise.all([
          axios.get("http://localhost:8081/users"),
          axios.get("http://localhost:8081/affichageMenuDesserts"),
          axios.get("http://localhost:8081/affichageMenuPlats"),
          axios.get("http://localhost:8081/affichageMenuEntre"),
          axios.get("http://localhost:8081/affichageMenuPizza"),
          axios.get("http://localhost:8081/affichageMenuBoissons")
        ]);
        setClients(clientsRes.data);
        setDesserts(dessertsRes.data);
        setPlats(platsRes.data);
        setEntres(entresRes.data);
        setPizzas(pizzasRes.data);
        setBoissons(boissonsRes.data);
        setShow(true);
      } catch (err) {
        console.log(err);
        setError('Erreur lors de la récupération des données');
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {show ? (
        <Home 
          entres={entres} 
          plats={plats} 
          desserts={desserts} 
          pizzas={pizzas} 
          boissons={boissons} 
          clients={clients} 
        />
      ) : (
        <div>Chargement...</div>
      )}
    </>
  );
}

export default Data;
