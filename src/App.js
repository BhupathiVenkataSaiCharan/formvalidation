import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// import Home from './components/Login1/Home';
import Login from './Routes/Login';
// import Password from './Toggle/forLogin/Password';
import Reset from './Routes/Reset';
import Help from './Routes/Help';
import AfterLogin from './Routes/AfterLogin';
import ComparePassword from './Toggle/toChangePassword/ComparePassword';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <div className="header">
        {/* <NavLink exact="true" to="/">Home</NavLink> */}
        <NavLink exact="true" to="/">Login</NavLink>
        <NavLink to="/reset">Reset password</NavLink>
        {/* <NavLink to="/password">Password</NavLink> */}
        {/* <NavLink to="/afterlogin">After Login</NavLink> */}
        <NavLink to="/comparepassword">Compare Password</NavLink>
      </div>
      <div className='content'>
        <Routes>
          {/* <Route exact="true" path="/" element={<Home/>} /> */}
          <Route exact="true" path="/" element={<Login/>} />
          <Route exact="true" path="/reset" element={<Reset/>} />
          {/* <Route exact="true" path="/password" element={<Password/>} /> */}
          <Route exact='true' path="/help" element={<Help/>} />
          <Route exact='true' path="/afterlogin" element={<AfterLogin/>} />
          <Route exact='true' path="/comparepassword" element={<ComparePassword/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
    );
}

export default App;






























// import React from 'react'
// import "./App.css"


// function App() {
//   return (
//       <>
//         <div className='parent'>
//           <div className='child'>
//             <img src="images/img1.jpg" alt='' width="100px" height="100px" />
//             <h1>Home</h1>
//             <h1>Home</h1>
//             <h1>Home</h1>
//             <h1>Home</h1>
//           </div>
//         </div>
//       </>
//   );
// }

// export default App;
