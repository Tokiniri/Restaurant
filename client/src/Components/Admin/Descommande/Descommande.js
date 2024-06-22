// import React, { useEffect, useState } from 'react';
// import Nav from '../Nav/Nav';
// import axios from 'axios';
// import './Descommande.css';
// import { Link } from 'react-router-dom';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// function Commandeachat({ Toggle }) {
//   const [dt, setDt] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:8081/affichageCommande");
//         setDt(response.data);
//       } catch (error) {
//         console.error("Erreur lors de la récupération des données :", error);
//       }
//     };
//     fetchData();
//   }, []);

//   const calculateTotal = (items) => {
//     return items.reduce((total, item) => total + item.prix * item.quantity, 0);
//   };

//   const generatePDF = (items, date) => {
//     const doc = new jsPDF();
//     doc.text('Baby Food', 20, 10);
//     doc.text('Gérant: FENOMANAMIHAJA Tokinirina', 20, 20);
//     doc.text('Directeur: RANDRIAMANATENA Santatra', 20, 30);
//     doc.text(`Date de commande : ${date}`, 20, 40);

//     const tableColumn = ["Nom", "Description", "Prix", "Quantité", "Total"];
//     const tableRows = [];

//     items.forEach(item => {
//       const itemData = [
//         item.nom,
//         item.description,
//         `${item.prix} Ar`,
//         item.quantity,
//         `${item.prix * item.quantity} Ar`
//       ];
//       tableRows.push(itemData);
//     });

//     doc.autoTable(tableColumn, tableRows, { startY: 50 });
//     doc.text(`Total: ${calculateTotal(items)} Ar`, 20, doc.previousAutoTable.finalY + 10);
//     doc.save(`facture_${date}.pdf`);
//   };

//   const groupedData = groupByDate(dt);

//   return (
//     <div className="commandes-page">
//       <Nav Toggle={Toggle} />
//       <div>
//         <h2 style={{ marginLeft: "30%", fontFamily: "cursive", fontSize: "3rem", color: "maroon", marginBottom: "2%" }}>Historique Commande</h2>
//         {Object.keys(groupedData).length > 0 ? (
//           Object.keys(groupedData).map(date => (
//             <div className="card" key={date} style={{ width:"90%", marginBottom: '5%', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
//               <h3 style={{ textAlign: 'center' }}>Date de commande : {date}</h3>
//               <table className="table" style={{ width: "80%", margin: "0 auto" }}>
//                 <thead>
//                   <tr>
//                     <th>Image</th>
//                     <th>Nom</th>
//                     <th>Description</th>
//                     <th>Prix</th>
//                     <th>Quantité</th>
//                     <th>Total</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {groupedData[date].map((item, index) => (
//                     <tr key={index}>
//                       <td>
//                         <img src={item.image} alt={item.nom} style={{ width: "100px", height: "100px" }} />
//                       </td>
//                       <td>{item.nom}</td>
//                       <td>{item.description}</td>
//                       <td>{item.prix} Ar</td>
//                       <td>{item.quantity}</td>
//                       <td>{item.prix * item.quantity} Ar</td>
//                     </tr>
//                   ))}
//                 </tbody>
//                 <tfoot>
//                   <tr>
//                     <td colSpan="5" style={{ textAlign: "right" }}>Total:</td>
//                     <td>{calculateTotal(groupedData[date])} Ar</td>
//                   </tr>
//                 </tfoot>
//               </table>
//               <div style={{ marginTop:"2%", marginLeft:"20%"}}>
//                 <label>Nom client: </label>
//                 <input type='text' placeholder='Nom client'/>
//                 <label>Numero telephone: </label>
//                 <input type='number' placeholder='Nom client'/>
//               </div>
//               <div style={{ textAlign: 'center', marginTop: '20px' }}>
//                 <button className='btn btn-success' onClick={() => generatePDF(groupedData[date], date)}>Imprimer la Facture</button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div style={{ textAlign: "center" }}>
//             <p>Votre panier est vide</p>
//             <Link to="/Menu" className='btn'>
//               Voir la carte
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// const groupByDate = (data) => {
//   return data.reduce((groups, item) => {
//     const date = item.date.split(' ')[0]; // Assuming date is in format 'YYYY-MM-DD ...'
//     if (!groups[date]) {
//       groups[date] = [];
//     }
//     groups[date].push(item);
//     return groups;
//   }, {});
// };

// export default Commandeachat;


import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav3';
import axios from 'axios';
import './Descommande.css';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Swal from 'sweetalert2';


function Commandeachat({ Toggle }) {
  const [dt, setDt] = useState([]);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8081/affichageCommande");
        setDt(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };
    fetchData();
  }, []);

  const calculateTotal = (items) => {
    return items.reduce((total, item) => total + item.prix * item.quantity, 0);
  };

  const generatePDF = (items, date, name, phone) => {
    const doc = new jsPDF();
    doc.text('Baby Food', 20, 10);
    doc.text('Gérant: FENOMANAMIHAJA Tokinirina', 20, 20);
    doc.text('Directeur: RANDRIAMANATENA Santatra', 20, 30);
    doc.text(`Date de commande : ${date}`, 20, 40);
    doc.text(`Nom du client: ${name}`, 20, 50);
    doc.text(`Numéro de téléphone: ${phone}`, 20, 60);

    const tableColumn = ["Nom", "Description", "Prix", "Quantité", "Total"];
    const tableRows = [];

    items.forEach(item => {
      const itemData = [
        item.nom,
        item.description,
        `${item.prix} Ar`,
        item.quantity,
        `${item.prix * item.quantity} Ar`
      ];
      tableRows.push(itemData);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 70 });
    doc.text(`Total: ${calculateTotal(items)} Ar`, 20, doc.previousAutoTable.finalY + 10);
    doc.save(`facture_${date}.pdf`);
  };

  const sendEmail = async (items, date, name, phone, email) => {
    try {
      const response = await axios.post('http://localhost:8081/sendInvoice', {
        clientName: name,
        clientPhone: phone,
        email: email,
        items: items,
        date: date,
      });
      console.log('Email sent:', response.data);
      // Afficher la notification SweetAlert de succès
      Swal.fire({
        icon: 'success',
        title: 'E-mail envoyé avec succès',
        text: 'La facture a été envoyée à l\'adresse e-mail spécifiée.',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      // Afficher une notification SweetAlert d'erreur si la requête échoue
      Swal.fire({
        icon: 'error',
        title: 'Erreur lors de l\'envoi de l\'e-mail',
        text: 'Une erreur est survenue lors de l\'envoi de la facture par e-mail. Veuillez réessayer plus tard.',
      });
    }
  };
  

  const groupedData = groupByDate(dt);

  return (
    <div className="commandes-page">
      <Nav Toggle={Toggle} />
      <div style={{ marginLeft: "10%" }}>
        <h2 style={{ marginLeft: "40%", fontFamily: "cursive", fontSize: "3rem", color: "maroon", marginBottom: "2%" }}> Commande </h2>
        {Object.keys(groupedData).length > 0 ? (
          Object.keys(groupedData).map(date => (
            <div className="card" key={date} style={{ width: "90%", height: "auto", marginBottom: '5%', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
              <h3 style={{ textAlign: 'center' }}>Date de commande : {date}</h3>
              <table className="table" style={{ width: "80%", margin: "0 auto" }}>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Nom</th>
                    <th>Description</th>
                    <th>Prix</th>
                    <th>Quantité</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {groupedData[date].map((item, index) => (
                    <tr key={index}>
                      <td>
                        <img src={item.image} alt={item.nom} style={{ width: "100px", height: "100px" }} />
                      </td>
                      <td>{item.nom}</td>
                      <td>{item.description}</td>
                      <td>{item.prix} Ar</td>
                      <td>{item.quantity}</td>
                      <td>{item.prix * item.quantity} Ar</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="5" style={{ textAlign: "right" }}>Total:</td>
                    <td>{calculateTotal(groupedData[date])} Ar</td>
                  </tr>
                </tfoot>
              </table>
              <div style={{ marginTop: "2%", marginLeft: "20%" }}>
                <label>Nom client: </label>
                <input type='text' placeholder='Nom client' value={clientName} onChange={(e) => setClientName(e.target.value)} />
                <label>Numéro de téléphone: </label>
                <input type='number' placeholder='Numéro de téléphone' value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} />
                <label>Email client: </label>
                <input type='email' placeholder='Email client' value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} />
              </div>
              <div style={{ marginLeft: "40%", textAlign: 'center', marginTop: '20px', display: 'flex' }}>
                <button className='btn btn-success' onClick={() => generatePDF(groupedData[date], date, clientName, clientPhone)}>Imprimer la Facture</button>
                <button style={{ marginLeft: "5%", color: "white" }} className='btn btn-info' onClick={() => sendEmail(groupedData[date], date, clientName, clientPhone, clientEmail)}>Envoyer via e-mail</button>
              </div>
            </div>
          ))
        ) : (
          <div style={{ textAlign: "center" }}>
            <p>Votre panier est vide</p>
            <Link to="/Menu" className='btn'>
              Voir la carte
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

const groupByDate = (data) => {
  return data.reduce((groups, item) => {
    const date = item.date.split(' ')[0]; // Assuming date is in format 'YYYY-MM-DD ...'
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(item);
    return groups;
  }, {});
};

export default Commandeachat;
