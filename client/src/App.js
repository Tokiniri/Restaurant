// import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css"
// import 'tailwindcss/tailwind.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./Components/Login/Login";
// import Signup from "./Components/Signup/Signup";
// import Admin from './Components/Admin/Admin';
// // import Utilisateur from './Components/Utilisateur/Utilisateur';
// import Produit from './Components/Admin/Produit/Produit';
// import Clientss from './Components/Admin/Clientss/Clientss';
// import Acceuil from './Components/Users/Acceuil/Acceuil';
// import Cart from './Components/Users/Cart/Cart';
// import ProduitCli from './Components/Admin/Produit/ProduitCli/ProduitCli';
// import Boissons from './Components/Admin/Produit/ProduitCli/BoissonsCli/Boissons';
// import Desserts from './Components/Admin/Produit/ProduitCli/DessertsCli/Desserts';
// import Entre from './Components/Admin/Produit/ProduitCli/EntreCli/Entre';
// import Pizza from './Components/Admin/Produit/ProduitCli/PizzaCli/Pizza';
// import Plats from './Components/Admin/Produit/ProduitCli/PlatsCli/Plats';
// import Menu from './Components/Users/Menu/Menu';
// import Entre1 from "./Components/Users/Menu/Sakafo/Entre/Entre1"
// import Plats1 from "./Components/Users/Menu/Sakafo/Plats/Plats1"
// import Desserts1 from "./Components/Users/Menu/Sakafo/Desserts/Desserts1"
// import Pizza1 from "./Components/Users/Menu/Sakafo/Pizza/Pizza1"
// import Boissons1 from "./Components/Users/Menu/Sakafo/Boissons/Boissons1"


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Login />} />
//         <Route path="/Signup" element={<Signup />} />
//         {/* <Route path="/Acceuil" element={<Utilisateur />} /> */}


//         <Route path="/admin" element={<Admin />} />
//         <Route path="/produits" element={<Produit />} />
//         <Route path="/clientss" element={<Clientss />} />
//         <Route path="/produit" element={<ProduitCli />} />
//         <Route path="/boissons" element={<Boissons />} />
//         <Route path="/desserts" element={<Desserts />} />
//         <Route path="/entre" element={<Entre />} />
//         <Route path="/pizza" element={<Pizza />} />
//         <Route path="/plats" element={<Plats />} />


//         <Route path="/Acceuil" element={<Acceuil />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path='/Menu' element={<Menu />} />
//         <Route path='/clientre' element={<Entre1 />} />
//         <Route path='/cliplats' element={<Plats1 />} />
//         <Route path='/clidesserts' element={<Desserts1 />} />
//         <Route path='/cliPizza' element={<Pizza1 />} />
//         <Route path='/cliboissons' element={<Boissons1 />} />



      
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// src/App.js
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'tailwindcss/tailwind.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/Srore';
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Admin from './Components/Admin/Admin';
// import Utilisateur from './Components/Utilisateur/Utilisateur';
import Produit from './Components/Admin/Produit/Produit';
import Clientss from './Components/Admin/Clientss/Clientss';
import Acceuil from './Components/Users/Acceuil/Acceuil';
import Cart from './Components/Users/Cart/Cart';
import ProduitCli from './Components/Admin/Produit/ProduitCli/ProduitCli';
import Boissons from './Components/Admin/Produit/ProduitCli/BoissonsCli/Boissons';
import Desserts from './Components/Admin/Produit/ProduitCli/DessertsCli/Desserts';
import Entre from './Components/Admin/Produit/ProduitCli/EntreCli/Entre';
import Pizza from './Components/Admin/Produit/ProduitCli/PizzaCli/Pizza';
import Plats from './Components/Admin/Produit/ProduitCli/PlatsCli/Plats';
import Menu from './Components/Users/Menu/Menu';
import Entre1 from "./Components/Users/Menu/Sakafo/Entre/Entre1";
import Plats1 from "./Components/Users/Menu/Sakafo/Plats/Plats1";
import Desserts1 from "./Components/Users/Menu/Sakafo/Desserts/Desserts1";
import Pizza1 from "./Components/Users/Menu/Sakafo/Pizza/Pizza1";
import Boissons1 from "./Components/Users/Menu/Sakafo/Boissons/Boissons1";
import Commande from './Components/Admin/Commande/Commande';
import Contact from './Components/Users/Contact/Contact';
import Descommande from './Components/Admin/Descommande/Descommande';
import Home1 from './Components/Admin/Home/Home1';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          {/* <Route path="/Acceuil" element={<Utilisateur />} /> */}

          <Route path="/admin" element={<Admin />} />
          <Route path="/produits" element={<Produit />} />
          <Route path="/clientss" element={<Clientss />} />
          <Route path="/produit" element={<ProduitCli />} />
          <Route path="/boissons" element={<Boissons />} />
          <Route path="/desserts" element={<Desserts />} />
          <Route path="/entre" element={<Entre />} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/plats" element={<Plats />} />
          <Route path="/home" element={<Home1 />} />
          <Route path="/admin/commande" element={<Commande />} />
          <Route path="/admin/commandes" element={<Descommande />} />


          <Route path="/Acceuil" element={<Acceuil />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/Menu' element={<Menu />} />
          <Route path='/clientre' element={<Entre1 />} />
          <Route path='/cliplats' element={<Plats1 />} />
          <Route path='/clidesserts' element={<Desserts1 />} />
          <Route path='/cliPizza' element={<Pizza1 />} />
          <Route path='/cliboissons' element={<Boissons1 />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
