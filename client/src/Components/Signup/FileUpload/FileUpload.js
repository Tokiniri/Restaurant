    // import React, { useState } from 'react'
    // import axios from "axios";
    // function FileUpload() {
    //     const [file, setFile ] = useState();
    //     // const [data, setData ] = useState([]);
    
    //     const handleFile = (e) => {
    //         setFile(e.target.files[0])
    //     }
    //     const [test, setTest] = useState(false)
    //     const [sary, setSary] = useState('')
        
    //     const handleUpload = () => {
    //         const formadata = new FormData();
    //         formadata.append("image",file);
    //         axios.post("http://localhost:8081/upload" , formadata)
    //         .then(res => {
    //             if(res.data.Status === "Success" ) {
    //                 console.log("Succeded")
    //             }else {
    //                 console.log("Failed")
    //             }
    //         })
    //         .catch(err => console.log(err));
    //         setTest(true)
    //     }
    //     if(test === true){
    //         axios.get("http://localhost:8081/img")
    //             .then(res => {
    //                 let datas = res.data
    //                 console.log(datas.length)
    //                 // console.log()
    //                 setSary(res.data[datas.length - 1].image)
    //             })
    //         // console.log(img)
    //         console.log("avoay ny sary")
    //     }
    //   return (
    //     <div className='containerupload'>
    //       <input type='file' onChange={handleFile}/>
    //       <button onClick={handleUpload}>Upload</button>
    //       <br/>
    //       <img src={`/images/${sary}`} width={200} height={200} />
    //     </div>
    //   )
    // }
    
    // export default FileUpload


    
      
// import express from "express";
// import mysql from "mysql";
// import cors from "cors";
// import multer from "multer";
// import path from "path";


// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(express.static("../client/src/Components/Images"));
// // Mampfandray ny port 8081 rehefa makany amn port nav(3000) io app.use @ligne72 sy app.get@ligne 77
// app.use(cors({
//     origin: 'http://localhost:3000',
//     credentials: true // Si vos requêtes incluent des informations d'identification (cookies, en-têtes d'autorisation, etc.)
//   }));  

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "restaurant_bd"
// });

// // AJOUTER DES PHOTO OU IMAGE
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     // cb(null, "../client/src/Components/Images"); // Utilisation de cb au lieu de db
//     cb(null, "../client/public/Images");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname)); // Utilisation de cb au lieu de db
//   }
// });

// const upload = multer({
//   storage: storage
// });


// // INSCRIPTION SUR SIGNUP

// app.post("/signup", (req, res) => {
//   const sql = "INSERT INTO users (FirstName,LastName,Email,Password ) VALUES (?, ?, ?, ?)";
//   const values = [
//       req.body.FirstName, // Valeur pour la colonne "prenom"
//       req.body.LastName,  // Valeur pour la colonne "nom"
//       req.body.Email,     // Valeur pour la colonne "courriel"
//       req.body.Password   // Valeur pour la colonne "mot_de_passe"
//   ];
  
//   db.query(sql, values, (err, result) => {
//       if (err){
//         return res.json({message: "Cette donnée existe déjà"});
//       }else{
//         return res.json(result);
//       }
//   });
// });

// //CONEXION SUR LOGIN

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

//     return res.json({ isAdmin });
//   });
// });

// app.listen(8081, () => {
//     console.log('Server is running on port 8081');
//   });

// //POST IMAGE
// app.post("/upload", upload.single("image") , (req, res) => {
//   const image = req.file.filename;
//   const sql = "UPDATE users SET image = ?";
//   db.query(sql, [image], (err, result) => {
//     if(err) return res.json({Message: "Error"});
//     return res.json({Status: "Success"});
//   })
// })

// //AFFICHIER LE PHOTO 
// app.get("/img", (req, res) => {
//   const sql = 'SELECT image FROM users';
//   db.query(sql, (err, result) => {
//     if(err){
//       return res.json("Error");
//     }
//     else{
//       // const filePath = result[0].Image
//       return res.json(result);
//     }
//   })
// })