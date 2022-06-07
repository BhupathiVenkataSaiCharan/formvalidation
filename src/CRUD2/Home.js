import React, { useState, useEffect } from 'react';
import axios from "axios";
import { NavLink } from "react-router-dom";

const Home = () => {
    const[users, setUsers] = useState([]);
    useEffect(()=>{
        loadUser();
    },[]);

    const loadUser = async ()=>{
        const result = await axios.get("http://localhost:3001/users");
        setUsers(result.data);
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3001/users/${id}`);
        loadUser();
    }

  return (
    <div>
        <h1>Home Page</h1>
        <NavLink to="/user/add" className="btn btn-primary m-1" style={{float:"right"}}>
        Add User
                            </NavLink>
        {/* <button className='btn btn-primary' style={{float:"right"}}>Add User</button> */}
        <table class="table">
            <thead>
                <tr className="bg-dark text-white">
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Company Name</th>
                <th scope="col">Company Email</th>
                {/* <th scope="col">Company Number</th> */}
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,index)=>(
                    <tr>
                        <th>{index + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.companyname}</td>
                        <td>{user.email}</td>
                        {/* <td>{user.phone}</td> */}
                        <td>
                            <NavLink to={`/user/${user.id}`} className="btn btn-primary m-1">
                                <i class="fa fa-eye" aria-hidden="true"></i>
                            </NavLink>
                            <NavLink to={`/user/edit/${user.id}`} className="btn btn-primary m-1">
                                <i class="fa fa-pencil" aria-hidden="true"></i>
                            </NavLink>
                            <button onClick={() => deleteUser(user.id)} className="btn btn-danger m-1">
                                Delete
                            </button>
                            {/* <Link className='btn btn-primary'>
                                <i class="fa fa-eye" aria-hidden="true"></i>
                            </Link>
                            <Link></Link>
                            <Link></Link> */}
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
    </div>
  )
}

export default Home;