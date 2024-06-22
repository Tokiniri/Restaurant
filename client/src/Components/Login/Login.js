// import React, { useState } from 'react';
// import { Link, useNavigate } from "react-router-dom";
// import axios from 'axios';
// import "./Login.css"

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:8081/login", { Email: email, Password: password });
//       const { isAdmin } = response.data;

//       if (isAdmin) {
//         navigate("/admin");
//       } else {
//         navigate("/Acceuil");
//       }
//     } catch (error) {
//       console.error('Erreur lors de la connexion :', error);
//     }
//   };

//   return (
//     <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
//       <div className='bg-white p-3 rounded w-25'>
//         <h2 className='text-center'>Log in</h2>
//         <form onSubmit={handleSubmit}>
//           <div className='mb-3'>
//             <label htmlFor='email'>
//               <strong>Email</strong>
//             </label>
//             <input
//               type='Email'
//               name='Email'
//               placeholder='Enter Email'
//               className='form-control rounded-0'
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className='mb-3'>
//             <label htmlFor='password'>Password</label>
//             <input
//               type='Password'
//               name='Password'
//               placeholder='Enter Password'
//               className='form-control rounded-0'
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type='submit' className='btn btn-success w-100 rounded-0'>
//             <strong>Login</strong>
//           </button>
//           <p>You are agree to aour terms and policiers</p>
//           <Link to={"/Signup"} className='btn btn-default border w-100 bg-light rounded-0'>
//             Create Account
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "./Login.css"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8081/login", { Email: email, Password: password });
      const { isAdmin } = response.data;

      if (isAdmin) {
        navigate("/admin");
      } else {
        navigate("/Acceuil");
      }
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
    }
  };

  return (
    <div className='Global'>
     <div className="container">
      <div className="heading">Sign In</div>
      <form action="" className="form" onSubmit={handleSubmit}>
          <input 
          className="input" 
          placeholder="E-mail"
          type='Email'
          name='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
          <input  
          className="input"  
          placeholder="Password"
          type='Password'
          name='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
          <span className="forgot-password"><Link to="/Signup">Forgot Password ?</Link></span>
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
            <button className="social-button twitter">
              <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
              </svg>
            </button>
          </div>
        </div>
        <span className="agreement"><Link to={"/Signup"} style={{fontSize:"1.5rem"}}>Signup</Link></span>
    </div> 
    </div>
  );
}

export default Login;



