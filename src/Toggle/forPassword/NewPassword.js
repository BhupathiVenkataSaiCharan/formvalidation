import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import "../../App.css";


function NewPassword () {

    const [password, setPassword] = useState('');
    // const [user_pin, setUser_pin] = useState('');
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(false);

    let navigate = useNavigate();

    const handlePassword = () => {        
            navigate('login');
    }

        return (
            <div style={{textAlign:'center'}}>
                <img src="images/img1.jpg" alt='' width="100px" height="100px" style={{borderRadius:"50%"}} /><br/><br/>
                <div style={{justifyContent:'space-between'}}>
                <div>
                    <div style={{display:'inline-block'}}>
                    <LockIcon/><input type="number" value={password} placeholder='Mobile number' required
                                        style={{position:'relative',width:'200px',height:'30px',marginTop:'-20px'}}
                                        onChange={e => setPassword(e.target.value)} />
                    </div>
                </div>
                <div>
                    <LockIcon/><input type="password" value={password} placeholder='Password'
                                        style={{position:'relative',width:'200px',height:'20px',marginTop:'-20px'}}
                                            onChange={e => setPassword(e.target.value)} />
                </div> <br/>
                </div>
                {/* {error && <div className='error'>{error}</div>} */}
                {/* <input style={{background:"skyblue", width:"200px", marginLeft:'25px'}}
                        type="button"
                        value={loading ? "Loading..." : "Login" } 
                        disabled={loading} onClick={handleLogin}/><br/> */}
                <input style={{background:"skyblue", width:"200px", marginLeft:'25px'}}
                        type="button"
                        value="Generate OTP" 
                        onClick={handlePassword}/><br/>
                        {/* <div style={{paddingLeft:"110px"}}>
                            <p>Forgot Password</p> */}
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

export default NewPassword;
