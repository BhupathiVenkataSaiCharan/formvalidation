import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Error from "../2.Toggle/Error/Error"

import Design1 from '../Design/Design1';
import Edit from '../Design/Edit';
import ProfilePage from '../Design/ProfilePage';


const Navigation = () => {
  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Design1/>}/>
                <Route path="/profilepage" element={<ProfilePage/>}/>
                <Route path="/edit" element={<Edit/>}/>
                <Route path="*" element={<Error/>} />
            </Routes>
        </Router>
    </>
  )
}

export default Navigation;