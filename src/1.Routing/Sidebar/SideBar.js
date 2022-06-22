import React from 'react'
import SidebarItem from './SidebarItem';
import items from "./sidebar.json";

const SideBar = () => {
  return (
    <div className='sidebar'>
      {/* <SidebarItem  /> */}
      {items.map((item,index)=><SidebarItem key={index} item={item} />)}
    </div>
  )
}

export default SideBar;