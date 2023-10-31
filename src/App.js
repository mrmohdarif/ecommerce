import './App.css';
//  import { useState, createContext } from "react";

import Catitem from './compoent/catitem/Catitem';
import Singleproduct from './compoent/singleproduct/Singleproduct';
import Home from './section/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './compoent/user_register_login/register/Register';
import Login from './compoent/user_register_login/login/Login';
import Address from './address/Address';
// export const UserContext = createContext()
function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Catitem />} />
          <Route path="/product/:id" element={<Singleproduct />}/>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/address' element={<Address/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}





export default App;

