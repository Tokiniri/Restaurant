import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import ChartComponent from './chartComponent';
import axios from 'axios';
import RoseChart from './Rosechart';

function Home({ Toggle, entres, plats, desserts, pizzas, boissons, clients }) {
  const [data, setData] = useState({
    labels: ['ENTRÉE', 'PLATS', 'DESSERTS', 'PIZZA', 'BOISSONS', 'Clients'],
    values: [entres.length, plats.length, desserts.length, pizzas.length, boissons.length, clients.length],
    // values:[0,0,0,0,0,0],
    colors: ['red', 'violet', 'green', 'blue', 'skyblue', 'orange'],
  });

  // const [clients, setClients] = useState([]);
  // const [entres, setEntres] = useState([]);
  // const [plats, setPlats] = useState([]);
  // const [desserts, setDesserts] = useState([]);
  // const [pizzas, setPizzas] = useState([]);
  // const [boissons, setBoissons] = useState([]);

  // useEffect(() => {
  //   // Appel à votre backend pour récupérer les données des clients
  //   axios.get("http://localhost:8081/users")
  //     .then(res => setClients(res.data))
  //     .catch(err => console.log(err));
    
  //   axios.get("http://localhost:8081/affichageMenuDesserts")
  //   .then(res => setDesserts(res.data))
  //   .catch(err => console.log(err));  

  //   axios.get("http://localhost:8081/affichageMenuPlats")
  //   .then(res => setPlats(res.data))
  //   .catch(err => console.log(err));  

  //   axios.get("http://localhost:8081/affichageMenuEntre")
  //   .then(res => setEntres(res.data))
  //   .catch(err => console.log(err));  

  //   axios.get("http://localhost:8081/affichageMenuPizza")
  //   .then(res => setPizzas(res.data))
  //   .catch(err => console.log(err)); 

  //   axios.get("http://localhost:8081/affichageMenuBoissons")
  //   .then(res => setBoissons(res.data))
  //   .catch(err => console.log(err));  

  //   setData(
  //     {
  //       labels: ['ENTRÉE', 'PLATS', 'DESSERTS', 'PIZZA', 'BOISSONS', 'Clients'],
  //       values: [entres.length, plats.length, desserts.length, pizzas.length, boissons.length, clients.length],
  //       colors: ['red', 'violet', 'green', 'blue', 'skyblue', 'orange'],
  //     }
  //   )
  // }, []);
  // console.log(boissons.length)

  return (
    <div className='px-3'>
      <Nav Toggle={Toggle} />
      <div className='container-fluid'>
        <div className='row g-3 my-2'>
          {data.labels.map((label, index) => (
            <div className="col-md-3 p-1" key={index}>
              <div className='p-3 text-white shadow-sm d-flex justify-content-around align-items-center'
                style={{ backgroundColor: data.colors[index] }}>
                <div>
                  <h3 className='fs-2'>{data.values[index]}</h3>
                  <p className='fs-5'>{label}</p>
                </div>
                <i className='bi bi-cart-plus p-3 fs-1'></i>
              </div>
            </div>
          ))}
        </div>

        {/* Ajouter le ChartComponent ici */}
        <div style={{display:'flex'}}>
          <div className="my-4" style={{ height: '300px', width: '100%' }}>
            <ChartComponent data={data} />
          </div>
          <div className="my-4" style={{ height: '300px', width: '100%', marginLeft:"15%", marginTop:"-5%" }}>
            <RoseChart data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
