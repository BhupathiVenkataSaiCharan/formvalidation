import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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

// import Error from "../2.Toggle/Error/Error"
import Admin from '../Components/pages/Admin';


function Routing(){
  return (
      <Router>
        <div className='content'>
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/reset" element={<Reset/>} />
            <Route path="/help" element={<Help/>} />
            <Route path="/afterlogin" element={<AfterLogin/>} />
            <Route path="/changepassword" element={<ChangePassword/>} />
            <Route path="/admin" element={<Admin/>} />
            <Route path="/customers" element={<Customers/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/analytics" element={<Analytics/>}/>
            <Route path="/categories" element={<Categories/>}/>
            <Route path="/discount" element={<Discount/>}/>
            <Route path="/inventory" element={<Inventory/>}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="*" element={<Navigate replace to="/"/>}/>
            <Route path="/" element={<Navigate replace to="/login"/>}/>
          </Routes>
        </div>
      </Router>
    );
}

export default Routing;