import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Login from '../Pages/Login';
import Reset from '../Pages/Reset';
import Help from '../Pages/Help';
import AfterLogin from '../Pages/AfterLogin';
import ChangePassword from "../Pages/ChangePassword"


function Routing() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className="header">
          <NavLink exact="true" to="/">Login</NavLink>
          <NavLink to="/reset">Reset password</NavLink>
          <NavLink to="/changepassword">Compare Password</NavLink>
        </div>
        <br/>
        <div className='content'>
          <Routes>
            <Route exact="true" path="/" element={<Login/>} />
            <Route exact="true" path="/reset" element={<Reset/>} />
            <Route exact='true' path="/help" element={<Help/>} />
            <Route exact='true' path="/afterlogin" element={<AfterLogin/>} />
            <Route exact='true' path="/changepassword" element={<ChangePassword/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
    );
}

export default Routing;