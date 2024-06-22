import React, { useState, useEffect } from 'react';
import "./Slidehome.css";
import imageSlide from "./Data";

const Slidehome = () => {
    const [currentState, setCurrentState] = useState(0);

    // Fonction pour passer à la diapositive suivante
    const nextSlide = () => {
        setCurrentState(currentState === imageSlide.length - 1 ? 0 : currentState + 1);
    };

    // Utiliser useEffect pour définir un intervalle qui change de diapositive toutes les 1.5 secondes
    useEffect(() => {
        const intervalId = setInterval(nextSlide, 2200);
        return () => clearInterval(intervalId); // Nettoyer l'intervalle lorsque le composant est démonté
    }, [currentState]); // Effectuer l'effet uniquement lorsque currentState change

    const bgImageStyle = {
        backgroundImage: `url(${imageSlide[currentState].url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: '100%'
    };

    return (
        <div className='container-style' style={bgImageStyle} >
            <br/>
           <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

        </div>
    );
}

export default Slidehome;

