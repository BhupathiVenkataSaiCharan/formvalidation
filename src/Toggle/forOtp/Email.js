
import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import MailIcon from '@mui/icons-material/Mail';

function Email () {

    const [email, setEmail] = useState('');
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(false);


    let navigate = useNavigate();

    const handleOtp = () => {        
            navigate('/newpassword');
    }


        return (
            <div style={{textAlign:'center'}}>
                <img src="images/img1.jpg" alt='' width="100px" height="100px" style={{borderRadius:"50%"}} /><br/><br/>
                <div style={{justifyContent:'space-between'}}>
                <div>
                    <div style={{display:'inline-block'}}>
                    <MailIcon/><input type="email" value={email} placeholder='Enter Your Email address' required
                                        style={{position:'relative',width:'200px',height:'20px',marginTop:'-20px'}}
                                        onChange={e => setEmail(e.target.value)} />
                    </div>
                </div><br/>
                </div>
                {/* {error && <div className='error'>{error}</div>} */}
                {/* <input style={{background:"skyblue", width:"200px", marginLeft:'25px'}}
                        type="button"
                        value={loading ? "Loading..." : "Generate OTP" } 
                        disabled={loading} onClick={handleOtp}/><br/> */}
                <input style={{background:"skyblue", width:"210px", marginLeft:'25px'}}
                        type="button"
                        value="Generate OTP" 
                        onClick={handleOtp}/><br/>
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

export default Email;
