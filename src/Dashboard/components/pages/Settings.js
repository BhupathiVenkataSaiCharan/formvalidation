import React from 'react';
import { NavLink } from 'react-router-dom';
import "../Dashboard.css"
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

const Settings = () => {
  return(
    <>
      <div className='row gx-0'>
        <div className='col-lg-3 gx-0'>
          {/* <div className='leftside'> */}
          <img src="images/img1.jpg" alt='' width="50px" height="50px" 
                  style={{borderRadius:"50%",margin:"20px",marginLeft:"40px",top:"35px",position:"fixed"}} />
                  <label style={{marginLeft:"95px",top:"60px",position:"fixed",fontSize:"25px"}}>Bizwy</label>
                  <ul style={{position:"fixed",paddingTop:"150px"}}>
              <NavLink exact to="/homepage" activeClassName="active">
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
        <div className='col-md-10 gx-0'>
                  <TopNav/>
          <p>Settings</p>
        </div>
      </div>    
    </>
  ) 
};

export default Settings;
