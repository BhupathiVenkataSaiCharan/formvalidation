// for validation changes from regex to custom details


import React, { useState, useEffect } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';
import "../../index.css";


function Mobile () {
        
    const initialvalues = {number:"", password:""}
    const [formValues, setFormValues] = useState(initialvalues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);


    const handleChange = (e) =>{
        const{name,value} = e.target;
        setFormValues({...formValues, [name]:value});
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
          navigate('/afterlogin');
        }
    }

    

    useEffect(()=>{
        console.log(formErrors);
        if(Object.keys(formErrors).length ===0 && !isSubmit){
            console.log(formValues);
        }
    },[formErrors])

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

        if(!values.number){
            errors.number = "Mobile Number is required";
        }else if(!regexn.test(values.number)){
            errors.number = "Please enter a valid mobile number"
        }else if(values.number.length > 10){
            errors.number = "number must be only 10 digits"
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
                
                <br/><br/><br/><br/>
                {  !isSubmit 
                    
                    ? 
                            
                    <form onSubmit={handleSubmit} >
                        <div>
                            <div>
                                <label style={{position:"relative", top:"8px",right:"5px",left:"115px"}}><PhoneIcon/></label>

                                <input className='input_field' type="number" name="number" placeholder=''
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
                                        backgroundColor:"skyblue"
                                        }}>
                                        Submit</button>
                        </div>
                    </form>
                     
                    :

                    <form onSubmit={handleSubmits} >
                        <div>
                            <div>
                                <label style={{position:"relative", top:"8px",right:"5px",left:"80px"}} ><LockIcon/></label>
                                <input className='input_fieldp' type="password" name='password' placeholder=''
                                value={formValues.password}
                                onChange={handleChange}
                                style={{width:"180px",height:"35px"}}
                                />
                                <label className='input_labelp'>Password</label>
                                <p style={{color:"red",fontSize:"13px"}}>{formErrors.password}</p>
                            </div>
                    
                            <button className='btn-primary' 
                                    style={{width:"210px",height:"30px",fontSize:"15px",
                                            marginLeft:"30px",marginTop:"20px",
                                            backgroundColor:"skyblue"
                                            }}>
                                            Login</button>
                        </div>
                    </form>
                }
                </div>
            </div>
        )
    }

export default Mobile;



