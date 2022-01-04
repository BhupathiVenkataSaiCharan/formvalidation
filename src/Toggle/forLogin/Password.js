import React, { useState, useEffect } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import {  NavLink, useNavigate } from 'react-router-dom';
import "../../index.css";


function Password () {

    // const [user_mobile, setUser_mobile] = useState('');
    
    // const initialvalues = { username:"", email:"", password:"", number:"" };
    
    const initialvalues = {password:""}
    const [formValues, setFormValues] = useState(initialvalues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);


    const handleChange = (e) =>{
        const{name,value} = e.target;
        setFormValues({...formValues, [name]:value});
    }

    let navigate = useNavigate();

    // function afterLogin(){
    //     navigate('afterlogin');
    // }
        // function func1(){
            
        // }
        // function func2(){
        //     // navigate("/afterlogin");
        //     console.log("hey")
        // }

    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    //     setFormErrors(validate(formValues));
    //     setIsSubmit(true);
    //     navigate('afterlogin');
    // }
    const handleSubmits = (e) =>{
        e.preventDefault();
        const errors = validate(formValues);
      
        if (Object.keys(errors).length) {
          setFormErrors(errors);
        } else {
          navigate('afterlogin');
        }
      }

    useEffect(()=>{
        console.log(formErrors);
        if(Object.keys(formErrors).length ===0 && isSubmit){
            console.log(formValues);
        }
    },[formErrors])

    const validate = (values) =>{
        const errors = {}
        
        const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{4,12}$/;
        
        /* 1 */

        if(!values.password){
            errors.password = "Password is required";
        }else if(!regexp.test(values.password)){
            errors.password = "passsword must contain atleast one uppercase,lowercase,number,special character";
        }
        else if(values.password.length < 4){
            errors.password = "Password must me more than 4 characters";
        }else if (values.password.length > 6){
            errors.password = "Password cannot be more than 6 characters";
        }
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
                    (<div style={{position:"relative",padding:"10px"}} >
                        Signed in succesfully
                    </div>
                    ):(
                        <div style={{padding:"20px"}} >
                        <pre>{JSON.stringify(formValues)}</pre>
                        </div>
                    )}
            
                <form onSubmit={handleSubmits} >
                    {/* <h1>Login form</h1> */}
                    <div>
                    
                    {/*2 */}


                    <div>
                    <label style={{position:"relative", top:"8px",right:"5px"}} ><LockIcon/></label>
                        <input className='input_field' type="password" name='password' placeholder=''
                                value={formValues.password}
                                onChange={handleChange}
                                style={{width:"180px",height:"35px"}}
                         />
                         <label className='input_label'>Password</label>
                         <p style={{color:"red"}}>{formErrors.password}</p>
                    </div>
                    
                        <button className='btn-primary' 
                                    style={{width:"210px",height:"30px",fontSize:"15px",
                                            marginLeft:"10px",
                                            backgroundColor:"skyblue"
                                            }}>
                                            Login</button>
                    </div>
                </form>
                {/* validation */}

                </div>


                            <div className='password'>
                            <NavLink to="/reset">Forgot Password ?</NavLink>    
                            </div>
                            <div className='help'>
                            <NavLink to="/help">Help</NavLink>    
                            </div>

                        <br/>
            </div>
        )
    }

export default Password;





















/*1 */
// const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        // const regexn = /^(\+91[-\s]?)?[0]?(91)?[789]\d{9}$/;
        

        // if(!values.username){
        //     errors.username = "Username is required";
        // }
        // if(!values.number){
        //     errors.number = "Mobile Number is required";
        // }else if(!regexn.test(values.number)){
        //     errors.number = "Please enter a valid mobile number"
        // }
        // if(!values.email){
        //     errors.email = "Email is required";
        // }else if(!regex.test(values.email)){
        //     errors.email = "This is not Valid email format";
        // }
/* 2 */
/* <div style={{textAlign:"center",padding:"10px"}} >
                        <label style={{position:"relative",top:"5px"}}>Username</label>
                        <input type="text" name="username" placeholder='username'
                                value={formValues.username}
                                onChange={handleChange}
                        />
                    </div>
                    <p style={{color:"red"}} >{formErrors.username}</p> */
                    /* <div>
                        <label style={{position:"relative", top:"8px",right:"5px"}} ><PhoneIcon/></label>
                        <input type="number" name="number" placeholder='mobilenumber'
                                value={formValues.number}
                                onChange={handleChange}
                                style={{width:"180px",height:"35px"}}
                        />
                    </div>
                    <p style={{color:"red"}} >{formErrors.number}</p> */
                    /* <div>
                        <label>Email</label>
                        <input type="email" name="email" placeholder='Email'
                                value={formValues.email}
                                onChange={handleChange}
                        />
                    </div>
                    <p style={{color:"red"}} >{formErrors.email}</p> */



















// import React, { useState } from 'react';
// import { NavLink,useNavigate } from "react-router-dom";

// import LockIcon from '@mui/icons-material/Lock';

// function Password () {
//     const [password, setPassword] = useState('');
//     let navigate = useNavigate();

//     const handleLogin = () => {        
//             navigate('afterlogin');
//     }
//         return (
//             <div style={{textAlign:'center'}}>
//                 <img src="images/img1.jpg" alt='' width="100px" height="100px" style={{borderRadius:"50%"}} /><br/><br/>
//                 <div style={{justifyContent:'space-between'}}>
//                 <div>
//                     <div style={{display:'inline-block'}}>
//                     <LockIcon/><input type="password" value={password} placeholder='Enter Your Password' required
//                                         style={{position:'relative',width:'200px',height:'20px',marginTop:'-20px'}}
//                                         onChange={e => setPassword(e.target.value)} />
//                     </div>
//                 </div>
//                 <br/>
//                 </div>
                
//                 <input style={{background:"skyblue", width:"200px", marginLeft:'25px'}}
//                         type="button"
//                         value="Login" 
//                         onClick={handleLogin}/><br/>
//                         <div className='password'>
//                             <NavLink to="/reset">Forgot Password</NavLink>    
//                             </div>
//                             <div className='help'>
//                             <NavLink to="/help">Help</NavLink>    
//                             </div><br/>
//             </div>
//         )
//     }

// export default Password;