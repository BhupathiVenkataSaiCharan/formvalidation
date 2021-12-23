import React, { useState, useEffect } from 'react';
// import PhoneIcon from '@mui/icons-material/Phone';
import { NavLink } from 'react-router-dom';
import "../../App.css";


function Mobile () {

    // const [user_mobile, setUser_mobile] = useState('');
    
    const initialvalues = { username:"", email:"", password:"", number:"" };
    const [formValues, setFormValues] = useState(initialvalues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) =>{
        const{name,value} = e.target;
        setFormValues({...formValues, [name]:value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect(()=>{
        console.log(formErrors);
        if(Object.keys(formErrors).length ===0 && isSubmit){
            console.log(formValues);
        }
    },[formErrors])

    const validate = (values) =>{
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexn = /^(\+91[-\s]?)?[0]?(91)?[789]\d{9}$/;
        const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{4,12}$/;

        if(!values.username){
            errors.username = "Username is required";
        }
        if(!values.number){
            errors.number = "Mobile Number is required";
        }else if(!regexn.test(values.number)){
            errors.number = "Please enter a valid mobile number"
        }
        if(!values.email){
            errors.email = "Email is required";
        }else if(!regex.test(values.email)){
            errors.email = "This is not Valid email format";
        }
        if(!values.password){
            errors.password = "Password is required";
        }else if(!regexp.test(values.password)){
            errors.password = "passsword must contain atleast one uppercase,lowercase,number,special character";
        }
        // else if(values.password.length < 4){
        //     errors.password = "Password must me more than 4 characters";
        // }else if (values.password.length > 6){
        //     errors.password = "Password cannot be more than 6 characters";
        // }
        return errors;
    };
    
        return (
            <div className="container" 
                    style={{textAlign:'center'}}>

                <img src="images/img1.jpg" alt='' 
                        width="100px" height="100px" 
                        style={{borderRadius:"50%"}} /><br/><br/>
                
                <div style={{justifyContent:'space-between'}}>
                {/* <div>
                    <div style={{display:'inline-block'}}>
                        <PhoneIcon/>
                            <input type="number" value={user_mobile} placeholder='Mobile number' required
                                    style={{position:'relative',width:'200px',height:'30px',marginTop:'-20px'}}
                                    onChange={e => setUser_mobile(e.target.value)} />
                    </div>
                </div>
                <br/> */}
                
                {/* validation */}
                {Object.keys(formErrors).length ===0 && isSubmit ? 
                    (<div>
                        Signed in succesfully
                    </div>
                    ):(
                        <div>
                        <pre>{JSON.stringify(formValues)}</pre>
                        </div>
                    )}
                
                <form onSubmit={handleSubmit} >
                    <h1>Login form</h1>
                    <div>
                    <div>
                        <label>Username</label>
                        <input type="text" name="username" placeholder='username'
                                value={formValues.username}
                                onChange={handleChange}
                        />
                    </div>
                    <p style={{color:"red"}} >{formErrors.username}</p>
                    <div>
                        <label>Mobile Number</label>
                        <input type="number" name="number" placeholder='mobilenumber'
                                value={formValues.number}
                                onChange={handleChange}
                        />
                    </div>
                    <p style={{color:"red"}} >{formErrors.number}</p>
                    <div>
                        <label>Email</label>
                        <input type="email" name="email" placeholder='Email'
                                value={formValues.email}
                                onChange={handleChange}
                        />
                    </div>
                    <p style={{color:"red"}} >{formErrors.email}</p>
                    <div>
                        <label>Password</label>
                        <input type="password" name='password' placeholder='Password'
                                value={formValues.password}
                                onChange={handleChange}
                         />
                    </div>
                    <p style={{color:"red"}}>{formErrors.password}</p>
                        <button className='btn-primary' >Submit</button>
                    </div>
                </form>
                {/* validation */}

                </div>

                {/* <input style={{background:"skyblue", width:"200px", marginLeft:'25px'}}
                        type="button"
                        value="Login" 
                        />

                        <br/> */}

                            <div className='password'>
                            <NavLink to="/reset">Forgot Password</NavLink>    
                            </div>
                            <div className='help'>
                            <NavLink to="/help">Help</NavLink>    
                            </div>

                        <br/>
            </div>
        )
    }

export default Mobile;
