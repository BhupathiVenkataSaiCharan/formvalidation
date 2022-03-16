import React from 'react';
import { NavLink } from 'react-router-dom';
import "../Dashboard.css"
import TopNav from '../TopNav/TopNav';
import SearchIcon from '@mui/icons-material/Search';


import GridViewIcon from '@mui/icons-material/GridView';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CustomerPage from '../dashboard/CustomerPage';

const Customers = () => {
  return(
    <>
      <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-3'>
          {/* <div className='leftside'> */}
          <img src="images/img1.jpg" alt='' width="50px" height="50px" 
                  style={{borderRadius:"50%",margin:"20px",marginLeft:"40px",top:"35px",position:"fixed"}} />
                  <label style={{marginLeft:"95px",top:"60px",position:"fixed",fontSize:"25px"}}>Bizwy</label>
                  <ul style={{position:"fixed",paddingTop:"150px"}}>
              <NavLink exact to="/admin" activeClassName="active">
                <label style={{paddingRight:"5px",fontSize:"13px"}}><GridViewIcon/></label>
                Dashboard</NavLink>
              <NavLink exact to="/customers" activeClassName="active"><label style={{paddingRight:"5px",fontSize:"18px"}}><PersonPinOutlinedIcon/></label>Customers</NavLink>
              <NavLink exact to="/products" activeClassName="active"><label style={{paddingRight:"5px",fontSize:"18px"}}><LocalShippingOutlinedIcon/></label>Products</NavLink>
              <NavLink exact to="/orders" activeClassName="active"><label style={{paddingRight:"5px",fontSize:"18px"}}><ShoppingCartOutlinedIcon/></label>Orders</NavLink>
              <NavLink exact to="/analytics" activeClassName="active"><label style={{paddingRight:"5px",fontSize:"18px"}}><SignalCellularAltOutlinedIcon/></label>Analytics</NavLink>
              <NavLink exact to="/categories" activeClassName="active"><label style={{paddingRight:"5px",fontSize:"18px"}}><FormatListBulletedOutlinedIcon/></label>Categories</NavLink>
              <NavLink exact to="/discount" activeClassName="active"><label style={{paddingRight:"5px",fontSize:"18px"}}><CardGiftcardOutlinedIcon/></label>Discount</NavLink>
              <NavLink exact to="/inventory" activeClassName="active"><label style={{paddingRight:"5px",fontSize:"18px"}}><StorefrontOutlinedIcon/></label>Inventory</NavLink>
              <NavLink exact to="/settings" activeClassName="active"><label style={{paddingRight:"5px",fontSize:"18px"}}><SettingsOutlinedIcon/></label>Settings</NavLink>
            </ul>
          {/* </div> */}
        </div>
        <div className='col-lg-9'>
          <div className='row'>
            <div className='col-lg-5'
                  style={{marginTop:"30px",marginLeft:"-65px"}}>
            <input type="text" placeholder='Search here...' 
                      style={{padding: "10px 60px 10px 20px",fontSize: "1rem",
                                borderRadius:"15px"}}/>
              <label style={{position:"relative",left:"-40px"}}><SearchIcon/></label>
            </div>
            <div className='col-7'>
              <TopNav/>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <h5 style={{marginTop:"50px",marginLeft:"-65px"}}>Settings</h5>
            </div>
          </div>
          {/* <div className='row' style={{marginLeft:"-70px"}}>
            <CustomerPage/>  
          </div> */}
                  {/* <TopNav/>
          <CustomerPage/> */}
          {/* <div className='leftside'> */}

        </div>
      </div>
      </div>    
    </>
  ) 
};

export default Customers;
