// import axios from 'axios';
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AiOutlineArrowLeft } from "react-icons/ai";
// // import Validation from "../Signup/SignupValidation/SignupValidation"

// function Create() {
//     const [values, setValues] = useState({
//         FirstName: "",
//         Email: "",
//         Password: ""
//     });
//     // const [errors, setErrors] = useState({})
//     const navigate = useNavigate();


//     const handleChange = (e) => {
//         setValues({ ...values, [e.target.id]: e.target.value })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // const validationErrors = Validation(values);
//         // setErrors(validationErrors);

//         // Vérifier s'il y a des erreurs de validation avant de soumettre les données
//         // if (Object.keys(validationErrors).length === 0) {
//             axios.post("http://localhost:8081/signup", values)
//                 .then(res => {
//                     console.log(res)
//                 })
//                 .catch(err => console.log(err));
//             console.log(values)
//         // }
//         // console.log((Object.keys(validationErrors).length)
//         navigate("/");
//     };
//     if(localStorage.getItem("post") == "admin")
//     {
//     return (
//         <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
//             <div className='bg-white p-3 rounded w-25'>
//                 <h2 className='text-center'> Signup  </h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className='mb-3'>
//                         <label htmlFor='nom'>Nom</label>
//                         <input
//                             type='text'
//                             placeholder='Entrer Nom'
//                             className='form-control'
//                             id='FirstName'
//                             value={values.FirstNameame}
//                             onChange={handleChange}
//                         />
//                         {/* {errors.name && <span className='text-danger'>{errors.name}</span>} */}
//                     </div>
//                     <div className='mb-3'>
//                         <label htmlFor='Email'>Email</label>
//                         <input
//                             type='text'
//                             placeholder='Entrer Nombre de Jour'
//                             className='form-control'
//                             id='Email'
//                             value={values.Email}
//                             onChange={handleChange}
//                         />
//                         {/* {errors.email && <span className='text-danger'>{errors.email}</span>} */}
//                     </div>
//                     <div className='mb-3'>
//                         <label htmlFor='Password'>Password</label>
//                         <input
//                             type='password' // Utilisez type='password' pour les mots de passe
//                             placeholder='Entrer Taux de Journalier'
//                             className='form-control'
//                             id='Password'
//                             value={values.Password}
//                             onChange={handleChange}
//                         />
//                         {/* {errors.password && <span className='text-danger'>{errors.password}</span>} */}
//                     </div>
//                     {
//                         localStorage.getItem("categorie") == "chef" ? (<button className='btn btn-success w-100 rounded-0'><strong>Submit  </strong></button>) :
//                                                                     (<button className='btn btn-success w-100 rounded-0' disabled><strong>Submit  </strong></button>)
//                     }
//                     {/* // <button className='btn btn-success w-100 rounded-0'><strong>Submit  </strong></button> */}
//                     <Link to={"/"} className='btn btn-default border w-100 bg-light rounded-0'><AiOutlineArrowLeft /></Link>
//                 </form>
//             </div>
//         </div>
//     );
// }
// else if(localStorage.getItem("post") !== "admin"){
//     return(
//         <div>
//             <p>vbous este visiteur</p>
//         </div>
//     )
// }
// }

// export default Create;

import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
    const [values, setValues] = useState({
        FirstName: "",
        LastName: "",
        Email:"",
        Password: "",
    });
    const navigate = useNavigate();


    const handleChange = (e) => {
        setValues({ ...values, [e.target.id]: e.target.value })
    }
    const [message, setMessage] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
                axios.post("http://localhost:8081/signup", values)
                .then(res => {
                    setMessage(res.data.message)
                })
                .catch(err => console.log(err));
        console.log(values)
        if(message === "Cette donnée existe déjà"){
            navigate("/signup");
        }else{
            navigate("/")
            console.log(message)
        }
    };

    return (
        <div className='Global'>
            <div className="container">
                <div className="heading">Sign Up</div>
                <form action="" className="form" onSubmit={handleSubmit}>
                <input 
                type='text'
                placeholder='Entrer Nom'
                className='input'
                id='FirstName'
                value={values.FirstName}
                onChange={handleChange}
                required
                 />
                <input 
                type='text'
                placeholder='Entrer Nom'
                className='input'
                id='LastName'
                value={values.LastName}
                onChange={handleChange}
                required
              />
              <input 
                type='text'
                placeholder='Entrer Nombre de Jour'
                className='input'
                id='Email'
                value={values.Email}
                onChange={handleChange}
                required
              />
              <input  
                type='password' // Utilisez type='password' pour les mots de passe
                placeholder='Entrer Taux de Journalier'
                className='input'
                id='Password'
                value={values.Password}
                onChange={handleChange}
                required
              />
              <span className="forgot-password"><Link to="/"></Link></span>
              <input className="login-button" 
              type="submit" 
              />
            </form>
            <div className="social-account-container">
              <span className="title">Or Sign in with</span>
              <div className="social-accounts">
                <button className="social-button google">
                  <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512">
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                  </svg>
                </button>
                <button className="social-button apple">
                  <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                  </svg>
                </button>
                <button  className="social-button twitter">
                  <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <span className="agreement"><Link to={"/"} style={{fontSize:"1.5rem"}}>Sign in</Link></span>
        </div> 
        </div>
      );
    }
    
    export default Signup;
    

    // import React, { useEffect, useState } from 'react'
    // import axios from "axios";
    // function FileUpload() {
    //     const [file, setFile ] = useState();
    //     const [data, setData ] = useState([]);
    
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
    //     if(test == true){
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
    //       <img src={`/images/${sary}`} />
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