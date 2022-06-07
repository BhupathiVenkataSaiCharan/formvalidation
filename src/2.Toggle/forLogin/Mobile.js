import React, { useState, useEffect } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import LockIcon from '@mui/icons-material/Lock';
import { NavLink, useNavigate } from 'react-router-dom';
import "../../index.css";
import ReactPhoneInput from "react-phone-input-2";
import Input from "./Input";



function Mobile () {
    
    // const initialvalues = { username:"", email:"", password:"", number:"" };
    
    const initialvalues = {number:"", password:""}
    const [formValues, setFormValues] = useState(initialvalues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);


    const handleChange = (e) =>{
        // const{name,value} = e.target;
        const value = e.target.value;
        const name = e.target.name;
        setFormValues((prev)=>({...prev, [name]:value}));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        const errors = validate(formValues);
      
        if (Object.keys(errors).length) {
          setFormErrors(errors);
        } else {
          setIsSubmit(true);
        }
    }

    let navigate = useNavigate();

    const handleSubmits = (e) =>{
         e.preventDefault();
         const passerrors = validates(formValues);
      
        if (Object.keys(passerrors).length) {
          setFormErrors(passerrors);
        } else {
          navigate("/admin");
        }
    }

    useEffect(()=>{
        const formS = JSON.parse(localStorage.getItem("user"));
        if(formValues ===""){
            setFormValues((prev)=>({...prev, ...formS}));
        }
    },[]);

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(formValues));
    },[formValues]);
    

    // useEffect(()=>{
    //     console.log(formErrors);
    //     if(Object.keys(formErrors).length ===0 && !isSubmit){
    //         console.log(formValues);
    //     }
    // },[formErrors])

    const validates = (values) =>{
        const passerrors ={}

        const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{4,12}$/;

        if(!values.password){
            passerrors.password = "Password is required";
        }else if(!regexp.test(values.password)){
            passerrors.password = "passsword must contain atleast one uppercase,lowercase,number,special character";
        }
        else if(values.password.length < 4){
            passerrors.password = "Password must me more than 4 characters";
        }else if (values.password.length > 6){
            passerrors.password = "Password cannot be more than 6 characters";
        }
        return passerrors;

    }

    const validate = (values) =>{
        const errors = {}
        
        const regexn = /^(\+91[-\s]?)?[0]?(91)?[789]\d{9}$/;

        // const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{4,12}$/;

        // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        
        /*number validation */

        if(!values.number){
            errors.number = "Mobile Number is required";
        }else if(!regexn.test(values.number)){
            errors.number = "Please enter a valid mobile number"
        }else if(values.number.length > 10){
            errors.number = "number must be only 10 digits"
        }

        /*password validation*/
        
        // if(!values.password){
        //     errors.password = "Password is required";
        // }else if(!regexp.test(values.password)){
        //     errors.password = "passsword must contain atleast one uppercase,lowercase,number,special character";
        // }
        // else if(values.password.length < 4){
        //     errors.password = "Password must me more than 4 characters";
        // }else if (values.password.length > 6){
        //     errors.password = "Password cannot be more than 6 characters";
        // }

        return errors;
        // if(!values.email){
        //     errors.email = "Email is required";
        // }else if(!regex.test(values.email)){
        //     errors.email = "This is not Valid email format";
        // }
        // if(!values.password){
        //     errors.password = "Password is required";
        // }else if(!regexp.test(values.password)){
        //     errors.password = "passsword must contain atleast one uppercase,lowercase,number,special character";
        // }
        // else if(values.password.length < 4){
        //     errors.password = "Password must me more than 4 characters";
        // }else if (values.password.length > 6){
        //     errors.password = "Password cannot be more than 6 characters";
        // }
    };
    
        return (
            <div className="container" 
                    style={{textAlign:'center',paddingTop:"50px"}}>

                <img src="images/img1.jpg" alt='' 
                        width="100px" height="100px" 
                        style={{borderRadius:"50%"}} /><br/>
                
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
                {/* {Object.keys(formErrors).length ===0 && isSubmit ? 
                    (<div>
                        Signed in succesfully
                    </div>
                    ):(
                        <div style={{padding:"20px"}} >
                        <pre>{JSON.stringify(formValues)}</pre>
                        </div>
                    )}
         */}<br/><br/><br/><br/>
                {  !isSubmit 
                    
                    ? 
                            
                    <form onSubmit={handleSubmit} >
                        <div>
                            <div>
                                <label style={{position:"relative", top:"8px",right:"5px",left:"115px"}}>

                                <PhoneIcon/></label>

                                <input className='input_field' type="number" name="number" placeholder='enter number'
                                        autoComplete='off'
                                        value={formValues.number}
                                        onChange={handleChange}
                                        style={{width:"180px",height:"35px"}}
                                />
                                <label className='input_label'>Mobile Number</label>

                                <p style={{color:"red",fontSize:"13px"}} >{formErrors.number}</p>
                            </div>
                                <button className='btn-primary'
                                        style={{width:"210px",height:"30px",fontSize:"15px",
                                        marginLeft:"30px",marginTop:"20px",
                                        backgroundColor:" rgb(0, 110, 255)"
                                        }}>
                                        Submit</button>
                        </div>
                    </form>
                     
                    :

                    <form onSubmit={handleSubmits} >
                        <div>
                            <div>
                                <label style={{position:"relative", top:"8px",right:"5px",left:"80px"}} ><LockIcon/></label>
                                <input className='input_fieldp' type="password" name='password' placeholder='enter password'
                                value={formValues.password}
                                onChange={handleChange}
                                style={{width:"180px",height:"35px"}}
                                />
                                <label className='input_labelp'>Password</label>
                                <p style={{color:"red",fontSize:"13px"}}>{formErrors.password}</p>
                            </div>
                    
                            <button  
                                    style={{width:"210px",height:"30px",fontSize:"15px",
                                            marginLeft:"30px",marginTop:"20px",
                                            backgroundColor:" rgb(0, 110, 255)"
                                            }}>
                                            Login</button>
                        </div>
                    </form>
                }
                
                {/* validation */}

                </div>


                            <div className='password'>
                            <NavLink to="/reset">Forgot Password ?</NavLink>    
                            </div>
                            <div className='help'>
                            <NavLink to="/help">Help</NavLink>    
                            </div>

                            <div>
                            <Input/>
                            </div>

                        <br/>
            </div>
        )
    }

export default Mobile;



