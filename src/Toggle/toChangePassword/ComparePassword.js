import React, { useState, useEffect } from 'react';
// import PhoneIcon from '@mui/icons-material/Phone';
import LockIcon from '@mui/icons-material/Lock';
import { NavLink, useNavigate } from 'react-router-dom';
import "../../index.css";


function ComparePassword () {
    
    // const initialvalues = { username:"", email:"", password:"", number:"" };
    
    const initialvalues = {password:"", confirmpassword:""}
    const [formValues, setFormValues] = useState(initialvalues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);


    const handleChange = (e) =>{
        const{name,value} = e.target;
        setFormValues({...formValues, [name]:value});
    }

    // const handleSubmit = (e) =>{
    //     e.preventDefault();

    //     const errors = validate(formValues);
      
    //     if (Object.keys(errors).length) {
    //       setFormErrors(errors);
    //     } else {
    //       setIsSubmit(true);
    //     }
    // }

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
        if(!values.confirmpassword){
            passerrors.confirmpassword = "Password is required";
        }else if(!regexp.test(values.confirmpassword)){
            passerrors.confirmpassword = "passsword must contain atleast one uppercase,lowercase,number,special character";
        }
        else if(values.confirmpassword.length < 4){
            passerrors.confirmpassword = "Password must me more than 4 characters";
        }else if (values.confirmpassword.length > 6){
            passerrors.confirmpassword = "Password cannot be more than 6 characters";
        }
        if (values.password !== values.confirmpassword){
            passerrors.confirmpassword = "Passwords must match";
        }
        return passerrors;

    }

   // const validate = (values) =>{
     //   const errors = {}
        
       // const regexn = /^(\+91[-\s]?)?[0]?(91)?[789]\d{9}$/;

        // const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{4,12}$/;

        // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        
        /*number validation */

        // if(!values.number){
        //     errors.number = "Mobile Number is required";
        // }else if(!regexn.test(values.number)){
        //     errors.number = "Please enter a valid mobile number"
        // }else if(values.number.length > 10){
        //     errors.number = "number must be only 10 digits"
        // }

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

        // return errors;
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
    // };
    
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
                {/* {Object.keys(formErrors).length ===0 && isSubmit ? 
                    (<div>
                        Signed in succesfully
                    </div>
                    ):(
                        <div style={{padding:"20px"}} >
                        <pre>{JSON.stringify(formValues)}</pre>
                        </div>
                    )} */}
                    <br/><br/><br/><br/>
                    <div>
                    <form onSubmit={handleSubmits} >
                        <div className='container'>
                            <div style={{justifyContent:"left"}}>
                                <label style={{position:"relative", top:"15px",right:"5px",left:"135px"}} ><LockIcon/></label>
                                <input className='input_fieldp1' type="password" name='password' placeholder=''
                                value={formValues.password}
                                onChange={handleChange}
                                style={{width:"180px",height:"35px"}}
                                />
                                <label className='input_labelp1'>Enter New Password</label>
                                <p style={{color:"red",fontSize:"13px"}}>{formErrors.password}</p>
                            </div>
                            <div>
                                <label style={{position:"relative", top:"15px",right:"5px",left:"120px"}} ><LockIcon/></label>
                                <input className='input_fieldp2' type="password" name='confirmpassword' placeholder=''
                                value={formValues.confirmpassword}
                                onChange={handleChange}
                                style={{width:"180px",height:"35px"}}
                                />
                                <label className='input_labelp2'>Confirm Password</label>
                                <p style={{color:"red",fontSize:"13px"}}>{formErrors.confirmpassword}</p>
                            </div>
                            {/* <div className='form-group'>
                                <input type="text" className="form-control" 
                                        name="new password"
                                        placeholder='password' />
                                <label for="name" className='form-label' >Enter New Password</label>
                            </div>
                            <div className='form-group'>
                                <input type="text" className="form-control" 
                                        name='confirmpassword'
                                        placeholder='password'/>
                                <label for="name" className='form-label'>Confirm Password</label>
                            </div> */}
                    
                            
                            
                            <button className='btn-primary' 
                                    style={{width:"210px",height:"30px",fontSize:"15px",
                                            marginLeft:"30px",marginTop:"20px",
                                            backgroundColor:"skyblue"
                                            }}>
                                            Login</button>
                        </div>
                    </form>
                    </div>
        
                {/* {  !isSubmit 
                    
                    ? 
                            
                    <form onSubmit={handleSubmit} >
                        <div>
                            <div>
                                <label style={{position:"relative", top:"8px",right:"5px"}}><PhoneIcon/></label>

                                <input className='input_field' type="number" name="number" placeholder=''
                                            autoComplete='off'
                                        value={formValues.number}
                                        onChange={handleChange}
                                        style={{width:"180px",height:"35px"}}
                                />
                                <label className='input_label'>Mobile Number</label>

                                <p style={{color:"red"}} >{formErrors.number}</p>
                            </div>
                                <button className='btn-primary'
                                        style={{width:"210px",height:"30px",fontSize:"15px",
                                        marginLeft:"10px",
                                        backgroundColor:"skyblue"
                                        }}>
                                        Submit</button>
                        </div>
                    </form>
                     
                    :

                    <form onSubmit={handleSubmits} >
                        <div>
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
                } */}
                
                {/* validation */}

                </div>
            </div>
        )
    }

export default ComparePassword;







































/*import React, { Component } from 'react';
import LockIcon from '@mui/icons-material/Lock';


export default class ComparePassword extends Component {
    constructor(){
        super();
        this.state={
            input:"",
            msg:""
        }
        this.pChange = this.pChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    pChange(e){
        var inputpassword = this.state.input;
        inputpassword[e.target.name]=e.target.value;
        this.setState({
            inputpassword
        })
    }
    
    validation(){
        var msg1 = {};
        if(this.state.input["password"] !== this.state.input["confirmpassword"]){
            msg1["password"]="Passwords do not match";
        }else{
            msg1["confirm password"]="Passwords are Same";
        }
        this.setState({
            msg:msg1
        });
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.validation()){
            var input={};
            input["password"]="";
            input["confirmpassword"]="";
        }
    }

    render() {
        return (
            <div style={{textAlign:"center"}} >
                <center>
                    <h2>Compare passwords</h2>
                </center>
                <form onSubmit={this.handleSubmit} >
                    <div>
                        <label><LockIcon/></label>
                        <input type="password" name="password" value={this.state.input.password} 
                                onChange={this.pChange}
                                placeholder='enter new passsword' required
                                style={{width:"180px",height:"35px"}}
                        />
                    </div><br/>
                    <div>
                        <label><LockIcon/></label>
                        <input type="password" name="confirmpassword" value={this.state.input.confirmpassword} 
                                placeholder='confirm passsword' required
                                onChange={this.pChange}
                                style={{width:"180px",height:"35px"}}
                        />
                    </div>
                        <div><h1>{this.state.msg.password}</h1></div>
                        <div>{this.state.msg.confirmpassword}</div>
                    <br/>
                    <button className='btn-primary' 
                                    style={{width:"210px",height:"30px",fontSize:"15px",
                                            marginLeft:"10px",
                                            backgroundColor:"skyblue"
                                            }}>
                                            Submit</button>
                </form>
            </div>
        )
    }
}
*/