import React from 'react';
import "./topnav.css"

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";

import Dropdown from '../dropdown/Dropdown';

// import "../assets/css/index.css"
// import "../assets/css/theme.css"

import ThemeMenu from '../thememenu/ThemeMenu';

import notification from "../assets/JsonData/notification.json";
import user_menu from "../assets/JsonData/user_menus.json";

import user_image from "../assets/images/tuat.png" 

/* */

const curr_user = {
  display_name: 'Charan',
  image: user_image
}

const renderNotificationItem = (item, index) => (
  <div className="notification-item" key={index}>
      <i className={item.icon}></i>
      <span>{item.content}</span>
  </div>
)

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
      <div className="topnav__right-user__image">
          <img src={user.image} alt="" />
      </div>
      <div className="topnav__right-user__name">
          {user.display_name}
      </div>
  </div>
)

const renderUserMenu =(item, index) => (
  // <Link to='/homepage' key={index}>
      <div className="notification-item">
          <i className={item.icon}></i>
          <span>{item.content}</span>
      </div>
  // </Link>
)

const TopNav = () => {
  return(
    <>
      <div className='topnav'>
            <div className='topnav__right'>
              <div className='topnav__right-item'>
                <Dropdown 
                  customToggle={()=>renderUserToggle(curr_user)}
                  contentData={user_menu}
                  renderItems={(item,index)=>renderUserMenu(item,index)}
                />
              </div>
              <div className='topnav__right-item'>
                <Dropdown 
                  icon="bx bx-bell"
                  badge="12"
                  contentData={notification}
                  renderItems={(item,index)=>renderNotificationItem(item,index)}
                  renderFooter={()=><Link to="/homepage">View All</Link>}
                />
              </div>
              {/* <div className='topnav__right-item1'>
                <ThemeMenu/>
              </div> */}

            </div>
      </div>
    </>
  )
};

export default TopNav;
