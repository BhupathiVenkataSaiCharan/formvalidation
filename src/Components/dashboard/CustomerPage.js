import React from 'react';

import "../Dashboard.css";

import Table from "../table/Table";

import customerList from "../assets/JsonData/customers-list.json"


const customerTableHead = [
    '',
    'name',
    'email',
    'phone',
    'total orders',
    'total spend',
    'location'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.total_orders}</td>
        <td>{item.total_spend}</td>
        <td>{item.location}</td>
    </tr>
)

const CustomerPage = () => {
  return(
      <div>
          {/* <h2 style={{fontSize:"20px"}}>Customers</h2> */}
          <div className='row'>
              <div className='col-12' style={{marginLeft:"-20px"}}>
                  <div className='card'>
                      <div className='card__body'>
                          <Table
                              headData={customerTableHead}
                              renderHead={(item,index)=>renderHead(item,index)}
                              bodyData={customerList}
                              renderBody={(item,index)=> renderBody(item,index)}
                              limit="10"
                          />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
};

export default CustomerPage;
