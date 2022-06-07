import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const EditUser = () => {


  const { id } = useParams();

  const [user, setUser] = useState({
    name:"",
    username:"",
    email:"",
    phone:"",
    website:"",
});

const {name,username,email,phone,website} = user;

    const onInputChange = e =>{
        // console.log(e.target.value);
        setUser({...user,[e.target.name]: e.target.value});
    }

    useEffect(()=>{
      loadUser();
    },[]);

    let navigate = useNavigate();

    const handleSubmit = async e =>{
        e.preventDefault();
        await axios.post(`https://localhost:3001/users/${id}`,user);
        navigate("/orders");
    }

    const loadUser = async ()=>{
      const result = await axios.get(`http://localhost:3001/users/${id}`);
      setUser(result.data);
  }

  return (
    <div className='container'>
        <div className='w-75 mx-auto shadow p-5'>
            <h2 className='text-center mb-4'>Edit a User</h2>
            <form>
                <div className='form-group'>
                    <input 
                        type="text" 
                        className="form-control form-control-lg"
                        placeholder='Enter Your Name'
                        name="name"
                        value={name}
                        onChange={e=> onInputChange(e)}
                        />
                </div>
                <div className='form-group'>
                    <input 
                        type="text" 
                        className="form-control form-control-lg"
                        placeholder='Enter Your Name'
                        name="username"
                        value={username}
                        onChange={e=> onInputChange(e)}
                        />
                </div>
                <div className='form-group'>
                    <input 
                        type="email" 
                        className="form-control form-control-lg"
                        placeholder='Enter Your Email'
                        name="email"
                        value={email}
                        onChange={e=> onInputChange(e)}
                        />
                </div>
                <div className='form-group'>
                    <input 
                        type="text" 
                        className="form-control form-control-lg"
                        placeholder='Enter Your Phone Number'
                        name="phone"
                        value={phone}
                        onChange={e=> onInputChange(e)}
                        />
                </div>
                <div className='form-group'>
                    <input 
                        type="text" 
                        className="form-control form-control-lg"
                        placeholder='Enter Your website name'
                        name="website"
                        value={website}
                        onChange={e=> onInputChange(e)}
                        />
                </div>
                <button className="btn btn-primary btn-block" onSubmit={handleSubmit}>Add User</button>
            </form>
        </div>
    </div>
  )
}

export default EditUser;