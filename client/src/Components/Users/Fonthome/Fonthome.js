// import React from 'react'
// import "./Fonthome.css"

// function Fonthome() {
//   return (
//     <div className='FontNumero1'>
//         <div className='FontNumero2'>
//             <h2 className='text-center text-white' style={{ fontSize: '4rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', paddingTop:"5%" }}>BIENVENUE À FAST FOOD</h2>           
//             <div data-aos="fade-up"
//      data-aos-anchor-placement="center-center" style={{  backgroundColor: 'rgba(128, 128, 128, 0.5)',margin:"3%", padding: '30px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
//                 <p style={{ color: 'white', textAlign: 'center', fontFamily: 'Arial, sans-serif', fontSize: '18px', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
//                     Nous sommes ravis de vous accueillir dans notre restaurant et de vous offrir une expérience gastronomique exceptionnelle. 
//                     Chez FAST FOOD, nous mettons tout en œuvre pour vous offrir des plats délicieux préparés avec amour et passion.<br/>
//                     <br/>
//                     Que vous soyez amateur de cuisine traditionnelle ou à la recherche de saveurs nouvelles et exotiques, notre menu diversifié saura satisfaire toutes vos envies culinaires.
//                      Nos chefs talentueux mettent un point d'honneur à sélectionner les meilleurs ingrédients frais et de saison pour vous garantir une expérience gustative inoubliable.<br/>
//                      <br/>
//                      Installez-vous confortablement, détendez-vous et laissez-nous prendre soin de vous. Nous sommes là pour vous offrir un moment de plaisir et de convivialité autour 
//                      de délices culinaires qui raviront vos papilles.<br/>
//                      <br/>
//                      Merci de votre visite et bon appétit !<br/>
//                      <br/>
//                      L'equipe de FAST FOOD

//                 </p>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Fonthome
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Fonthome.css";

function Fonthome() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durée de l'animation en millisecondes
    });
  }, []);

  return (
    <div className='FontNumero1'>
        <div className='FontNumero2'>
            <h2 data-aos="fade-right" className='text-center text-white' style={{ fontSize: '4rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', paddingTop:"5%" }}>
              BIENVENUE À FAST FOOD
            </h2>           
            <div data-aos="fade-up"
                 data-aos-anchor-placement="center-center"
                 style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', margin:"3%", padding: '30px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <p style={{ color: 'white', textAlign: 'center', fontFamily: 'Arial, sans-serif', fontSize: '18px', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                    Nous sommes ravis de vous accueillir dans notre restaurant et de vous offrir une expérience gastronomique exceptionnelle. 
                    Chez FAST FOOD, nous mettons tout en œuvre pour vous offrir des plats délicieux préparés avec amour et passion.<br/>
                    <br/>
                    Que vous soyez amateur de cuisine traditionnelle ou à la recherche de saveurs nouvelles et exotiques, notre menu diversifié saura satisfaire toutes vos envies culinaires.
                     Nos chefs talentueux mettent un point d'honneur à sélectionner les meilleurs ingrédients frais et de saison pour vous garantir une expérience gustative inoubliable.<br/>
                     <br/>
                     Installez-vous confortablement, détendez-vous et laissez-nous prendre soin de vous. Nous sommes là pour vous offrir un moment de plaisir et de convivialité autour 
                     de délices culinaires qui raviront vos papilles.<br/>
                     <br/>
                     Merci de votre visite et bon appétit !<br/>
                     <br/>
                     L'equipe de FAST FOOD
                </p>
            </div>
        </div>
    </div>
  );
}

export default Fonthome;
