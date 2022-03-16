import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../2.Toggle/forLogin/Login';
import Reset from '../2.Toggle/forOtp/Reset';
import Help from '../2.Toggle/Redirect/Help';
import AfterLogin from '../2.Toggle/Redirect/AfterLogin';
import ChangePassword from "../2.Toggle/toChangePassword/ChangePassword"

// import Homepage from "../Components/pages/Homepage";
import Customers from '../Components/pages/Customers';
import Products from "../Components/pages/Products";
import Orders from "../Components/pages/Orders"
import Analytics from "../Components/pages/Analytics"
import Categories from "../Components/pages/Categories"
import Discount from "../Components/pages/Discount"
import Inventory from "../Components/pages/Inventory"
import Settings from "../Components/pages/Settings"

import Error from "../2.Toggle/Error/Error"
import Admin from '../Components/pages/Admin';


function Routing(){
  return (
      <Router>
        <div className='content'>
          <Routes>
            <Route exact="true" path="/" element={<Login/>} />
            <Route exact="true" path="/reset" element={<Reset/>} />
            <Route exact="true" path="/help" element={<Help/>} />
            <Route exact="true" path="/afterlogin" element={<AfterLogin/>} />
            <Route exact="true" path="/changepassword" element={<ChangePassword/>} />
            <Route exact="true" path="/admin" element={<Admin/>} />
            <Route exact="true" path="/customers" element={<Customers/>} />
            <Route exact="true" path="/products" element={<Products/>} />
            <Route exact="true" path="/orders" element={<Orders/>}/>
            <Route exact="true" path="/analytics" element={<Analytics/>}/>
            <Route exact="true" path="/categories" element={<Categories/>}/>
            <Route exact="true" path="/discount" element={<Discount/>}/>
            <Route exact="true" path="/inventory" element={<Inventory/>}/>
            <Route exact="true" path="/settings" element={<Settings/>}/>
            <Route exact="true" path="*" element={<Error/>}/>
          </Routes>
        </div>
      </Router>
    );
}

export default Routing;