// import express from "express";
// import mysql from "mysql";
// import cors from "cors";
// import multer from "multer";
// import path from "path";
// import bodyParser from "body-parser" ;

// const app = express();
// app.use(cors());
// app.use(express.static('public'));
// app.use(express.json());


// app.use(cors({
//     origin: 'http://localhost:3000',
//     credentials: true
// }));  

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "restaurant_bd"
// });

// // Configuration de multer pour l'upload d'images
// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, 'public');
//   },
//   filename: (req, file, callback) => {
//     callback(null, Date.now() + '_' + file.originalname);
//   }
// });
// const upload = multer({ storage }).single('file');

// // INSCRIPTION SUR SIGNUP
// app.post("/signup", (req, res) => {
//   const sql = "INSERT INTO users (FirstName, LastName, Email, Password) VALUES (?, ?, ?, ?)";
//   const values = [
//     req.body.FirstName,
//     req.body.LastName,
//     req.body.Email,
//     req.body.Password
//   ];
  
//   db.query(sql, values, (err, result) => {
//     if (err) {
//       return res.json({ message: "Cette donnée existe déjà" });
//     } else {
//       return res.json(result);
//     }
//   });
// });

// // CONEXION SUR LOGIN
// app.post("/login", (req, res) => {
//   const { Email, Password } = req.body;
//   const sql = "SELECT * FROM users WHERE Email = ? AND Password = ?";

//   db.query(sql, [Email, Password], (err, data) => {
//     if (err) {
//       console.log(err);
//       return res.status(500).json({ error: "Une erreur est survenue lors de la connexion." });
//     }

//     if (data.length === 0) {
//       return res.status(401).json({ error: "Identifiants invalides." });
//     }

//     const user = data[0];
//     const isAdmin = user.Role === 'admin';

//     return res.json({ isAdmin, userId: user.id });
//   });
// });

// // AJOUTER DES MENU
// app.post("/addMenu", upload, (req, res) => {
//   const data = req.body;
//   const { categorie, nom, description, prix } = data;
//   const img = req.file.path;

//   let sql;

//   if (categorie === "Desserts") {
//     sql = "INSERT INTO Desserts (categorie, nom, description, prix, image) VALUES (?, ?, ?, ?, ?)";
//   } else if (categorie === "Entre") {
//     sql = "INSERT INTO Entre (categorie, nom, description, prix, image) VALUES (?, ?, ?, ?, ?)";
//   } else if (categorie === "Plats") {
//     sql = "INSERT INTO Plats (categorie, nom, description, prix, image) VALUES (?, ?, ?, ?, ?)";
//   } else if (categorie === "Pizza") {
//     sql = "INSERT INTO Pizza (categorie, nom, description, prix, image) VALUES (?, ?, ?, ?, ?)";
//   } else if (categorie === "Boissons") {
//     sql = "INSERT INTO Boissons (categorie, nom, description, prix, image) VALUES (?, ?, ?, ?, ?)";
//   } else {
//     return res.status(400).json({ message: "Catégorie de menu non reconnue" });
//   }

//   db.query(sql, [categorie, nom, description, prix, img], (err, result) => {
//     if (err) {
//       return res.status(500).json({ message: "Problème d'erreur lors de l'insertion du menu" });
//     } else {
//       return res.status(200).json({ message: "Menu enregistré avec succès" });
//     }
//   });
// });

// // MODIFIER DES MENU 
// app.put("/update/:id", upload, (req, res) => {
//   const data = req.body;
//   const { categorie, nom, description, prix } = data;
//   const img = req.file.path;
//   const id = req.params.id;

//   let sql;

//   if (categorie === "Desserts") {
//     sql = "UPDATE Desserts SET categorie = ?, nom = ?, description = ?, prix = ?, image = ? WHERE id = ?";
//   } else if (categorie === "Entre") {
//     sql = "UPDATE Entre SET categorie = ?, nom = ?, description = ?, prix = ?, image = ? WHERE id = ?";
//   } else if (categorie === "Plats") {
//     sql = "UPDATE Plats SET categorie = ?, nom = ?, description = ?, prix = ?, image = ? WHERE id = ?";
//   } else if (categorie === "Pizza") {
//     sql = "UPDATE Pizza SET categorie = ?, nom = ?, description = ?, prix = ?, image = ? WHERE id = ?";
//   } else if (categorie === "Boissons") {
//     sql = "UPDATE Boissons SET categorie = ?, nom = ?, description = ?, prix = ?, image = ? WHERE id = ?";
//   } else {
//     return res.status(400).json({ message: "Catégorie de menu non reconnue" });
//   }

//   db.query(sql, [categorie, nom, description, prix, img, id], (err, result) => {
//     if (err) {
//       return res.status(500).json({ message: "Problème d'erreur lors de la mise à jour du menu" });
//     } else {
//       return res.status(200).json({ message: "Menu modifié avec succès" });
//     }
//   });
// });

// // AFFICHAGE DES MENUS
// const getMenuHandler = (table) => (req, res) => {
//   const sql = `SELECT * FROM ${table}`;
//   db.query(sql, (err, result) => {
//     if (err) {
//       return res.status(500).json({ message: "Problème d'erreur lors de la récupération des données" });
//     } else {
//       const data = result.map(item => {
//         let image = item.image.replace("public\\", "");
//         image = `http://localhost:8081/${image}`;
//         return {
//           ...item,
//           image
//         };
//       });
//       return res.json(data);
//     }
//   });
// };

// app.get("/affichageMenuDesserts", getMenuHandler('Desserts'));
// app.get("/affichageMenuPlats", getMenuHandler('Plats'));
// app.get("/affichageMenuEntre", getMenuHandler('Entre'));
// app.get("/affichageMenuPizza", getMenuHandler('Pizza'));
// app.get("/affichageMenuBoissons", getMenuHandler('Boissons'));





// // DELETE MENU
// const deleteMenuHandler = (table) => (req, res) => {
//   const id = req.params.id;
//   const sql = `DELETE FROM ${table} WHERE id = ?`;

//   db.query(sql, [id], (err, result) => {
//     if (err) {
//       return res.status(500).json({ message: "Problème d'erreur lors de la suppression du menu" });
//     } else {
//       return res.status(200).json({ message: "Menu supprimé avec succès" });
//     }
//   });
// };

// app.delete("/deleteDesserts/:id", deleteMenuHandler('Desserts'));
// app.delete("/deletePlats/:id", deleteMenuHandler('Plats'));
// app.delete("/deleteEntre/:id", deleteMenuHandler('Entre'));
// app.delete("/deletePizza/:id", deleteMenuHandler('Pizza'));
// app.delete("/deleteBoissons/:id", deleteMenuHandler('Boissons'));

// // ENVOYER COMMANDE
// app.get("/affichageCommande", (req, res) => {
//   const sql = "SELECT * FROM commande";
//   db.query(sql, (err, result) => {
//       if(err) return res.json({Message: "Error inside server"});
//       return res.json(result);
//   })
// });
// // app.post("/rechercheCommande", (req, res) => {
// //   let datas = req.body;
 
// //    datas.map(data => {
// //     const {dateCommande } = data;
// //   const sql = "SELECT * FROM commande where date = ?";
// //   db.query(sql,[dateCommande] (err, result) => {
// //       if(err) return res.json({Message: "Error inside server"});
// //       return res.json(result);
// //    }
// //   })
// // });
// app.post("/rechercheCommande", (req, res, next) => {
//   let datas = req.body
//   datas.map(data => {
//     const {dateCommande} = data
//     const sql = "SELECT * FROM commande WHERE date= ?";
  
//     db.query(sql, [dateCommande], (err, result) => {
//       if (!err) {
//         return res.json(result);
//       }
//     });
//   })
// });

// app.post("/addCart", (req, res, next) => {
//   let datas = req.body
//   datas.map(data => {
//     const {categorie, nom, description, prix, image, quantity} = data
//     const sql = "INSERT INTO commande (categorie, nom, description, prix, image, quantity,date) VALUES ( ?, ?, ?, ?, ?, ?,now())";
  
//     db.query(sql, [categorie, nom, description, prix, image, quantity], (err, result) => {
//       if (err) {
//         return res.json({ message: "Cette donnée existe déjà" });
//       }
//     });
//   })
// });



// //AFFICHAGE UTILISATEURS ET ADMIN

// app.get("/users", (req, res) => {
//   const sql = "SELECT * FROM users";
//   db.query(sql, (err, result) => {
//       if(err) return res.json({Message: "Error inside server"});
//       return res.json(result);
//   })
// });

// app.listen(8081, () => {
//   console.log("Écoute sur le port 8081");
// });
import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import multer from 'multer';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import nodeoutlook from 'nodejs-nodemailer-outlook';

const app = express();
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'restaurant_bd',
});

// Configuration de multer pour l'upload d'images
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'public');
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + '_' + file.originalname);
  },
});
const upload = multer({ storage }).single('file');

// Fonction pour envoyer des e-mails via Outlook
const sendEmailOutlook = (mailOptions) => {
  nodeoutlook.sendEmail({
    auth: {
      user: 'tsioriniainajudhyo@outlook.com',
      pass: '2810c47304',
    },
    from: 'tsioriniainajudhyo@outlook.com',
    to: mailOptions.to,
    subject: mailOptions.subject,
    text: mailOptions.text,
    attachments: mailOptions.attachments,
    onError: (e) => console.log(e),
    onSuccess: (i) => console.log(i),
  });
};

// ROUTE INSCRIPTION SUR SIGNUP
app.post('/signup', (req, res) => {
  const sql = 'INSERT INTO users (FirstName, LastName, Email, Password) VALUES (?, ?, ?, ?)';
  const values = [
    req.body.FirstName,
    req.body.LastName,
    req.body.Email,
    req.body.Password,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      return res.json({ message: 'Cette donnée existe déjà' });
    } else {
      return res.json(result);
    }
  });
});

// ROUTE CONNEXION SUR LOGIN
app.post('/login', (req, res) => {
  const { Email, Password } = req.body;
  const sql = 'SELECT * FROM users WHERE Email = ? AND Password = ?';

  db.query(sql, [Email, Password], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: 'Une erreur est survenue lors de la connexion.' });
    }

    if (data.length === 0) {
      return res.status(401).json({ error: 'Identifiants invalides.' });
    }

    const user = data[0];
    const isAdmin = user.Role === 'admin';

    return res.json({ isAdmin, userId: user.id });
  });
});

// ROUTE AJOUTER DES MENU
app.post('/addMenu', upload, (req, res) => {
  const data = req.body;
  const { categorie, nom, description, prix } = data;
  const img = req.file.path;

  let sql;

  if (categorie === 'Desserts') {
    sql = 'INSERT INTO Desserts (categorie, nom, description, prix, image) VALUES (?, ?, ?, ?, ?)';
  } else if (categorie === 'Entre') {
    sql = 'INSERT INTO Entre (categorie, nom, description, prix, image) VALUES (?, ?, ?, ?, ?)';
  } else if (categorie === 'Plats') {
    sql = 'INSERT INTO Plats (categorie, nom, description, prix, image) VALUES (?, ?, ?, ?, ?)';
  } else if (categorie === 'Pizza') {
    sql = 'INSERT INTO Pizza (categorie, nom, description, prix, image) VALUES (?, ?, ?, ?, ?)';
  } else if (categorie === 'Boissons') {
    sql = 'INSERT INTO Boissons (categorie, nom, description, prix, image) VALUES (?, ?, ?, ?, ?)';
  } else {
    return res.status(400).json({ message: 'Catégorie de menu non reconnue' });
  }

  db.query(sql, [categorie, nom, description, prix, img], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Problème d'erreur lors de l'insertion du menu" });
    } else {
      return res.status(200).json({ message: "Menu enregistré avec succès" });
    }
  });
});

// ROUTE MODIFIER DES MENU 
app.put('/update/:id', upload, (req, res) => {
  const data = req.body;
  const { categorie, nom, description, prix } = data;
  const img = req.file.path;
  const id = req.params.id;

  let sql;

  if (categorie === 'Desserts') {
    sql = 'UPDATE Desserts SET categorie = ?, nom = ?, description = ?, prix = ?, image = ? WHERE id = ?';
  } else if (categorie === 'Entre') {
    sql = 'UPDATE Entre SET categorie = ?, nom = ?, description = ?, prix = ?, image = ? WHERE id = ?';
  } else if (categorie === 'Plats') {
    sql = 'UPDATE Plats SET categorie = ?, nom = ?, description = ?, prix = ?, image = ? WHERE id = ?';
  } else if (categorie === 'Pizza') {
    sql = 'UPDATE Pizza SET categorie = ?, nom = ?, description = ?, prix = ?, image = ? WHERE id = ?';
  } else if (categorie === 'Boissons') {
    sql = 'UPDATE Boissons SET categorie = ?, nom = ?, description = ?, prix = ?, image = ? WHERE id = ?';
  } else {
    return res.status(400).json({ message: 'Catégorie de menu non reconnue' });
  }

  db.query(sql, [categorie, nom, description, prix, img, id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Problème d'erreur lors de la mise à jour du menu" });
    } else {
      return res.status(200).json({ message: "Menu modifié avec succès" });
    }
  });
});

// ROUTE AFFICHAGE DES MENUS
const getMenuHandler = (table) => (req, res) => {
  const sql = `SELECT * FROM ${table}`;
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Problème d'erreur lors de la récupération des données" });
    } else {
      const data = result.map(item => {
        let image = item.image.replace('public\\', '');
        image = `http://localhost:8081/${image}`;
        return {
          ...item,
          image,
        };
      });
      return res.json(data);
    }
  });
};

app.get('/affichageMenuDesserts', getMenuHandler('Desserts'));
app.get('/affichageMenuPlats', getMenuHandler('Plats'));
app.get('/affichageMenuEntre', getMenuHandler('Entre'));
app.get('/affichageMenuPizza', getMenuHandler('Pizza'));
app.get('/affichageMenuBoissons', getMenuHandler('Boissons'));

// ROUTE DELETE MENU
// const deleteMenuHandler = (table) => (req, res) => {
//   const id = req.params.id;
//   const sql = `DELETE FROM ${table} WHERE id = ?`;

//   db.query(sql, [id], (err, result) => {
//     if (err) {
//       return res.status(500).json({ message: "Problème d'erreur lors de la suppression du menu" });
//     } else {
//       return res.status(200).json({ message: "Menu supprimé avec succès" });
//     }
//   });
// };

// app.delete('/deleteDesserts/:id', deleteMenuHandler('Desserts'));
// app.delete('/deletePlats/:id', deleteMenuHandler('Plats'));
// app.delete('/deleteEntre/:id', deleteMenuHandler('Entre'));
// app.delete('/deletePizza/:id', deleteMenuHandler('Pizza'));
// app.delete('/deleteBoissons/:id', deleteMenuHandler('Boissons'));

// DELETE MENU
const deleteMenuHandler = (table) => (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM ${table} WHERE id = ?`;

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Problème d'erreur lors de la suppression du menu" });
    } else {
      return res.status(200).json({ message: "Menu supprimé avec succès" });
    }
  });
};

app.delete("/deleteDesserts/:id", deleteMenuHandler('Desserts'));
app.delete("/deletePlats/:id", deleteMenuHandler('Plats'));
app.delete("/deleteEntre/:id", deleteMenuHandler('Entre'));
app.delete("/deletePizza/:id", deleteMenuHandler('Pizza'));
app.delete("/deleteBoissons/:id", deleteMenuHandler('Boissons'));

// ROUTE ENVOYER COMMANDE
app.get('/affichageCommande', (req, res) => {
  const sql = 'SELECT * FROM commande';
  db.query(sql, (err, result) => {
    if (err) return res.json({ message: 'Error inside server' });
    return res.json(result);
  });
});

app.post('/rechercheCommande', (req, res) => {
  let datas = req.body;
  datas.map((data) => {
    const { dateCommande } = data;
    const sql = 'SELECT * FROM commande WHERE date = ?';
    db.query(sql, [dateCommande], (err, result) => {
      if (err) return res.json({ message: 'Error inside server' });
      return res.json(result);
    });
  });
});

app.post('/addCart', (req, res) => {
  let datas = req.body;
  datas.map((data) => {
    const { categorie, nom, description, prix, image, quantity } = data;
    const sql = 'INSERT INTO commande (categorie, nom, description, prix, image, quantity, date) VALUES (?, ?, ?, ?, ?, ?, now())';
    db.query(sql, [categorie, nom, description, prix, image, quantity], (err, result) => {
      if (err) {
        return res.json({ message: 'Cette donnée existe déjà' });
      }
    });
  });
});

// ROUTE AFFICHAGE UTILISATEURS ET ADMIN
app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, result) => {
    if (err) return res.json({ message: 'Error inside server' });
    return res.json(result);
  });
});

// ROUTE ENVOYER FACTURE
app.post('/sendInvoice', async (req, res) => {
  const { clientName, clientPhone, email, items, date } = req.body;

  const doc = new jsPDF();
  doc.text('Baby Food', 20, 10);
  doc.text('Gérant: FENOMANAMIHAJA Tokinirina', 20, 20);
  doc.text('Directeur: RANDRIAMANATENA Santatra', 20, 30);
  doc.text(`Date de commande : ${date}`, 20, 40);
  doc.text(`Nom du client: ${clientName}`, 20, 50);
  doc.text(`Numéro de téléphone: ${clientPhone}`, 20, 60);

  const tableColumn = ['Nom', 'Description', 'Prix', 'Quantité', 'Total'];
  const tableRows = [];

  items.forEach((item) => {
    const itemData = [
      item.nom,
      item.description,
      `${item.prix} Ar`,
      item.quantity,
      `${item.prix * item.quantity} Ar`,
    ];
    tableRows.push(itemData);
  });

  doc.autoTable({ head: [tableColumn], body: tableRows, startY: 70 });
  doc.text(`Total: ${calculateTotal(items)} Ar`, 20, doc.previousAutoTable.finalY + 10);

  const pdf = doc.output('arraybuffer');

  const mailOptions = {
    to: email,
    subject: 'Facture de Baby Food',
    text: `Cher ${clientName}, veuillez trouver ci-joint votre facture.`,
    attachments: [
      {
        filename: `facture_${date}.pdf`,
        content: Buffer.from(pdf),
        contentType: 'application/pdf',
      },
    ],
  };

  try {
    sendEmailOutlook(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

const calculateTotal = (items) => {
  return items.reduce((total, item) => total + item.prix * item.quantity, 0);
};

app.listen(8081, () => {
  console.log('Server started on http://localhost:8081');
});
