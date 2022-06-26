import React from 'react';
// import Routing from './1.Routing/Routing';
import "./App.css";
// import SideBar from "./1.Routing/Sidebar/SideBar";
import SideMenu from './1.Routing/SideMenu/SideMenu';

import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

import Overview from './1.Routing/SideMenu/pages/Overview';

import Create from './CRUD3/Create';
import Read from './CRUD3/Read';
import Update from './CRUD3/Update';
import View from "./CRUD3/View";



function App() {

  return (
    // <div className="App">
    //   <Routing/>
    // </div>

    // <>
    //   <div className='main'>
    //     <div className='sidebar'>
    //       <SideBar/>
    //     </div>
    //     <div className='container'>
    //       hello
    //     </div>
    //   </div>
    // </>
    
    <div className="App">
      <Router>
        <SideMenu/>
        <Routes>
          <Route path='/company/list' element={<Overview/>} />
          <Route path='/company/create' element={<Create/>}/>
          <Route path='/company/read' element={<Read/>}/>
          <Route path='/company/edit' element={<Update/>}/>
          <Route path="/company/view" element={<View/>}/>
          <Route path="*" element={<Navigate replace to="/"/>}/>
          <Route path="/" element={<Navigate replace to="/company/list"/>}/>
        </Routes>
      </Router>
    </div>
    );
}

export default App;
























// import React from 'react';
// import Navigation from './1.Routing/Navigation';
// import Scroll from './Template/Scroll';
// import Routing from './1.Routing/Routing';
// import Welcome from './Bizwy/Welcome';
// import Template1 from './Template/Template1';
// import Design1 from "./Design/Design1";



// function App() {

  // return (
    // <div className="App">
    //   {/* <Routing/> */}
    //   {/* <Welcome/> */}
    //   {/* <Template1/> */}
    //   {/* <Scroll/> */}
    //   {/* <Design1/> */}
    //   {/* <Navigation/> */}
    // {/* </div> */}
    // );
// }

// export default App;