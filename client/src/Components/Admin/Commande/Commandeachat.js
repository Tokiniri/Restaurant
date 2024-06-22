
// import React, { useEffect, useState } from 'react';
// import Nav from '../Nav/Nav';
// import axios from 'axios';
// import './Commandeachat.css';
// import { Link } from 'react-router-dom';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// function Commandeachat({ Toggle }) {
//   const [dt, setDt] = useState([]);
//   const [currentDateTime, setCurrentDateTime] = useState('');

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

//   useEffect(() => {
//     const updateDateTime = () => {
//       const now = new Date();
//       const formattedDateTime = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
//       setCurrentDateTime(formattedDateTime);
//     };

//     updateDateTime();
//     const intervalId = setInterval(updateDateTime, 1000);

//     return () => clearInterval(intervalId);
//   }, []);

//   const calculateTotal = () => {
//     return dt.reduce((total, item) => total + item.prix * item.quantity, 0);
//   };

//   const generatePDF = () => {
//     const doc = new jsPDF();
//     doc.text('Baby Food', 20, 10);
//     doc.text('Gérant: FENOMANAMIHAJA Tokinirina', 20, 20);
//     doc.text('Directeur: RANDRIAMANATENA Santatra', 20, 30);
//     doc.text(`Date de commande : ${new Date().toLocaleDateString()}`, 20, 40);

//     const tableColumn = ["Nom", "Description", "Prix", "Quantité", "Total"];
//     const tableRows = [];

//     dt.forEach(item => {
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
//     doc.text(`Total: ${calculateTotal()} Ar`, 20, doc.previousAutoTable.finalY + 10);
//     doc.save('facture.pdf');
//   };

//   return (
//     <div className="commandes-page">
//       <Nav Toggle={Toggle} />
//       <div>
//         <h2 style={{ marginLeft: "30%", fontFamily: "cursive", fontSize: "3rem", color: "maroon", marginBottom: "2%" }}> Historique  Commande</h2>
//         <div style={{ textAlign: 'center', marginBottom: '2%' }}>
//           <h3>Date d' aujourd'hui : {new Date().toLocaleDateString()}</h3>
//         </div>
//         {dt.length > 0 ? (
//           <div>
//             <table className="table" style={{ width: "80%", margin: "0 auto" }}>
//               <thead>
//                 <tr>
//                   <th>Image</th>
//                   <th>Nom</th>
//                   <th>Description</th>
//                   <th>Prix</th>
//                   <th>Quantité</th>
//                   <th>Total</th>
//                   <th>Date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {dt.map((item, index) => (
//                   <tr key={index}>
//                     <td>
//                       <img src={item.image} alt={item.nom} style={{ width: "100px", height: "100px" }} />
//                     </td>
//                     <td>{item.nom}</td>
//                     <td>{item.description}</td>
//                     <td>{item.prix} Ar</td>
//                     <td>{item.quantity}</td>
//                     <td>{item.prix * item.quantity} Ar</td>
//                     <td>{item.date}</td>
//                   </tr>
//                 ))}
//               </tbody>
//               <tfoot>
//                 <tr>
//                   <td colSpan="5" style={{ textAlign: "right" }}>Total:</td>
//                   <td>{calculateTotal()} Ar</td>
//                 </tr>
//               </tfoot>
//             </table>
//             <div style={{ textAlign: 'center', marginTop: '20px' }}>
//               <button className='btn btn-success' onClick={generatePDF}>Télécharger l'historique</button>
//             </div>
//           </div>
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

// export default Commandeachat;

import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios';
import './Commandeachat.css';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function Commandeachat({ Toggle }) {
  const [dt, setDt] = useState([]);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');

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

  const calculateTotal = () => {
    return dt.reduce((total, item) => total + item.prix * item.quantity, 0);
  };

  const generatePDF = (name, phone) => {
    const doc = new jsPDF();
    doc.text('Baby Food', 20, 10);
    doc.text('Gérant: FENOMANAMIHAJA Tokinirina', 20, 20);
    doc.text('Directeur: RANDRIAMANATENA Santatra', 20, 30);
    doc.text(`Date de commande : ${new Date().toLocaleDateString()}`, 20, 40);
    doc.text(`Nom du client: ${name}`, 20, 50);
    doc.text(`Numéro de téléphone: ${phone}`, 20, 60);

    const tableColumn = ["Nom", "Description", "Prix", "Quantité", "Total"];
    const tableRows = [];

    dt.forEach(item => {
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
    doc.text(`Total: ${calculateTotal()} Ar`, 20, doc.previousAutoTable.finalY + 10);
    doc.save('facture.pdf');
  };

  return (
    <div className="commandes-page">
      <Nav Toggle={Toggle} />
      <div>
        <h2 style={{ marginLeft: "30%", fontFamily: "cursive", fontSize: "3rem", color: "maroon", marginBottom: "2%" }}>Historique Commande</h2>
        <div style={{ textAlign: 'center', marginBottom: '2%' }}>
          <h3>Date d'aujourd'hui : {new Date().toLocaleDateString()}</h3>
        </div>
        {dt.length > 0 ? (
          <div>
            <table className="table" style={{ width: "80%", margin: "0 auto" }}>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Nom</th>
                  <th>Description</th>
                  <th>Quantité</th>
                  <th>Prix</th>
                  <th>Total</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {dt.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img src={item.image} alt={item.nom} style={{ width: "100px", height: "100px" }} />
                    </td>
                    <td>{item.nom}</td>
                    <td>{item.description}</td>
                    <td>{item.quantity}</td>
                    <td>{item.prix} Ar</td>
                    <td>{item.prix * item.quantity} Ar</td>
                    <td>{item.date}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="6" style={{ textAlign: "right" }}>Total:</td>
                  <td>{calculateTotal()} Ar</td>
                </tr>
              </tfoot>
            </table>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <button className='btn btn-success' onClick={() => generatePDF(clientName, clientPhone)}>Imprimer l'historique</button>
            </div>
          </div>
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

export default Commandeachat;

