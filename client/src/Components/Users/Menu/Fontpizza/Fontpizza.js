import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Fontpizza.css";

const Fontpizza = () => {
  return (
    <div className='FontPizza1'> 
      <h2 
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className='titrenotremenu'>EXPLOREZ NOTRE MENU</h2>
        <p data-aos="flip-right" className='textnotremenu'>"Plongez dans une expérience gastronomique inoubliable avec notre menu exquis, 
            spécialement conçu pour satisfaire vos papilles les plus exigeantes. Des saveurs
            authentiques et des ingrédients frais se combinent pour créer des plats qui raviront
            vos sens. Que vous soyez à la recherche d'un repas léger et équilibré ou d'un festin
            indulgent, notre menu offre une variété de choix pour répondre à toutes vos envies.
            Découvrez nos plats signature, accompagnés d'une sélection de vins fins et de cocktails
            artisanaux, pour une expérience culinaire inégalée. Laissez-vous tenter par notre menu 
            et laissez-nous vous transporter dans un voyage gustatif mémorable."
        </p>
    </div>
  )
}

export default Fontpizza
