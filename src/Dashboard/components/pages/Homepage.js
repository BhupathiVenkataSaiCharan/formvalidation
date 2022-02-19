import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../Dashboard.css"
import Dashboard from "../pages/"
import TopNav from '../../Components/TopNav/TopNav';


import GridViewIcon from '@mui/icons-material/GridView';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';


const Homepage = () => {
  return(
    <>
      <div className='row gx-0' style={{backgroundColor:"#fafafb"}}>
        <div className='col-md-2 gx-0'>
          {/* <div className='leftside'> */}
            <img src="images/img1.jpg" alt='' width="50px" height="50px" 
                  style={{borderRadius:"50%",margin:"20px",marginLeft:"40px",top:"35px",position:"fixed"}} />
                  <label style={{marginLeft:"95px",top:"60px",position:"fixed",fontSize:"25px"}}>Bizwy</label>
            <ul style={{position:"fixed",paddingTop:"150px"}}>
              <NavLink exact to="/homepage" className="active-link" activeClassName="active">
                <label style={{paddingRight:"5px",fontSize:"13px"}}><GridViewIcon/></label>
                Dashboard</NavLink>
              <NavLink exact to="/customers" className="active-link" activeClassName="active"><label style={{paddingRight:"5px",fontSize:"18px"}}><PersonPinOutlinedIcon/></label>Customers</NavLink>
              <NavLink exact to="/products" className="active-link" activeClassName="active"><label style={{paddingRight:"5px",fontSize:"18px"}}><LocalShippingOutlinedIcon/></label>Products</NavLink>
              <NavLink exact to="/orders" className="active-link" activeClassName="active"><label style={{paddingRight:"5px",fontSize:"18px"}}><ShoppingCartOutlinedIcon/></label>Orders</NavLink>
              <NavLink exact to="/analytics" className="active-link" activeClassName="active"><label style={{paddingRight:"5px",fontSize:"18px"}}><SignalCellularAltOutlinedIcon/></label>Analytics</NavLink>
              <NavLink exact to="/categories" className="active-link" activeClassName="active"><label style={{paddingRight:"5px",fontSize:"18px"}}><FormatListBulletedOutlinedIcon/></label>Categories</NavLink>
              <NavLink exact to="/discount" className="active-link" activeClassName="active"><label style={{paddingRight:"5px",fontSize:"18px"}}><CardGiftcardOutlinedIcon/></label>Discount</NavLink>
              <NavLink exact to="/inventory" className="active-link" activeClassName="active"><label style={{paddingRight:"5px",fontSize:"18px"}}><StorefrontOutlinedIcon/></label>Inventory</NavLink>
              <NavLink exact to="/settings" className="active-link" activeClassName="active"><label style={{paddingRight:"5px",fontSize:"18px"}}><SettingsOutlinedIcon/></label>Settings</NavLink>
            </ul>
        </div>
        <div className='col-md-10'>
        
          {/* <div className='rightside'>
            
            
          </div> */}
          <TopNav/>
          <Dashboard/>
        </div>
      </div>    
    </>
  ) 
};

export default Homepage;
