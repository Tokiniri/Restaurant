// import React from 'react'
// import "./Contact.css"
// import { Link } from 'react-router-dom'

// function Contact() {
//   return (
//     <div className='Contactgeneral'>
//         <div className='conatct1'>
//             <span style={{marginLeft:"40%", fontSize:"2rem", fontFamily:"fantasy"}}>LET'S TALK</span> <br/>
//             <span style={{marginLeft:"35%" ,fontSize:"3rem", fontFamily:"fantasy"}}>RIGHT NOW</span> 
//             <br/>
//             <br/>
//          <strong>Nous Contacter</strong> <br/>
//         Nous sommes ravis de vous accueillir sur notre page de contact. Que vous ayez des questions, des suggestions, ou des commentaires, nous sommes là pour vous écouter. Chez [Nom du Restaurant], votre satisfaction est notre priorité et nous nous engageons à répondre à toutes vos demandes avec le plus grand soin.
//         <br/><br/>
//         <strong>Envoyez-nous un message dès maintenant !</strong>
//         <br/><br/>
//         Vous souhaitez réserver une table, obtenir des informations sur nos menus, ou simplement partager votre expérience ? Rien de plus simple ! Remplissez le formulaire ci-dessous et laissez-nous un message. Notre équipe dédiée se fera un plaisir de vous répondre dans les plus brefs délais.
//         <br/><br/>
//         <strong>Pourquoi nous contacter ?</strong>
//         <br/><br/>
//         En nous envoyant un message, vous faites un pas vers une relation privilégiée avec notre restaurant. Nous aimons créer des liens avec nos clients et partager notre passion pour la gastronomie.
//         <br/><br/>
//         </div>
//         <div className='conatct2'>
//             <span style={{fontFamily:"-moz-initial", fontSize:"2.5rem"}}>How can we help ?</span>
//             <br/>
//             <span style={{fontSize:"1.5rem"}}>Let's connect so we can get your proJect goingl</span>
//             <br/>
//             <input style={{width:"70%" , marginTop:"2%", marginLeft:"10%"}} type="text" placeholder="Firts Name" className="input input-bordered input-info w-full max-w-xs" />
//             <br/>
//             <input style={{width:"70%", marginTop:"2%" , marginLeft:"10%"}} type="text" placeholder="Last Name" className="input input-bordered input-info w-full max-w-xs" />
//             <br/>
//             <input style={{width:"70%" , marginTop:"2%" , marginLeft:"10%"}} type="email" placeholder="Email" className="input input-bordered input-info w-full max-w-xs" />
//             <br/>
//             <input style={{width:"70%" , marginTop:"2%" , marginLeft:"10%"}} type="state" placeholder="Company" className="input input-bordered input-info w-full max-w-xs" />
//             <br/>
//             <textarea style={{width:"60%", marginTop:"2%" , marginLeft:"10%"}} className="textarea textarea-info" placeholder="Tell us a bit more !"></textarea>
//             <br/>
//             <Link to={"/Acceuil"} style={{width:"60%", marginTop:"2%" , marginLeft:"10%", color:"white"}} className="btn btn-error">GET STARTED</Link>
//         </div>
//     </div>
//   )
// }

// export default Contact

import React from 'react'
import "./Contact.css"
import { Link } from 'react-router-dom'

function Contact() {
  const handleReload = () => {
    window.location.href =("/Acceuil"); // Recharge la page lorsque le bouton est cliqué
  };

  return (
    <div className='Contactgeneral'>
        <div className='conatct1'>
            <span style={{marginLeft:"40%", fontSize:"2rem", fontFamily:"fantasy"}}>LET'S TALK</span> <br/>
            <span style={{marginLeft:"35%" ,fontSize:"3rem", fontFamily:"fantasy"}}>RIGHT NOW</span> 
            <br/>
            <br/>
         <strong>Nous Contacter</strong> <br/>
        Nous sommes ravis de vous accueillir sur notre page de contact. Que vous ayez des questions, des suggestions, ou des commentaires, nous sommes là pour vous écouter. Chez [Nom du Restaurant], votre satisfaction est notre priorité et nous nous engageons à répondre à toutes vos demandes avec le plus grand soin.
        <br/><br/>
        <strong>Envoyez-nous un message dès maintenant !</strong>
        <br/><br/>
        Vous souhaitez réserver une table, obtenir des informations sur nos menus, ou simplement partager votre expérience ? Rien de plus simple ! Remplissez le formulaire ci-dessous et laissez-nous un message. Notre équipe dédiée se fera un plaisir de vous répondre dans les plus brefs délais.
        <br/><br/>
        <strong>Pourquoi nous contacter ?</strong>
        <br/><br/>
        En nous envoyant un message, vous faites un pas vers une relation privilégiée avec notre restaurant. Nous aimons créer des liens avec nos clients et partager notre passion pour la gastronomie.
        <br/><br/>
        </div>
        <div className='conatct2'>
            <span style={{fontFamily:"-moz-initial", fontSize:"2.5rem"}}>Comment pouvons-nous vous aider ?</span>
            <br/>
            <span style={{fontSize:"1.5rem"}}>Vous pouvez commander de la nourriture en ligne</span>
            <br/>
            <input style={{width:"70%" , marginTop:"2%", marginLeft:"10%", color:"black"}} type="text" placeholder="Firts Name" className="input input-bordered input-info w-full max-w-xs" />
            <br/>
            <input style={{width:"70%", marginTop:"2%" , marginLeft:"10%" , color:"black"}} type="text" placeholder="Last Name" className="input input-bordered input-info w-full max-w-xs" />
            <br/>
            <input style={{width:"70%" , marginTop:"2%" , marginLeft:"10%", color:"black"}} type="email" placeholder="Email" className="input input-bordered input-info w-full max-w-xs" />
            <br/>
            <input style={{width:"70%" , marginTop:"2%" , marginLeft:"10%", color:"black"}} type="state" placeholder="Company" className="input input-bordered input-info w-full max-w-xs" />
            <br/>
            <textarea style={{width:"60%", marginTop:"2%" , marginLeft:"10%", color:"black"}} className="textarea textarea-info" placeholder="Tell us a bit more !"></textarea>
            <br/>
            <button style={{width:"60%", marginTop:"2%" , marginLeft:"10%", color:"white"}} className="btn btn-error" onClick={handleReload}>GET STARTED</button>
        </div>
    </div>
  )
}

export default Contact
