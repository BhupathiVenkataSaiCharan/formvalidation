import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import LockIcon from '@mui/icons-material/Lock';

function Password () {
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    const handleLogin = () => {        
            navigate('afterlogin');
    }
        return (
            <div style={{textAlign:'center'}}>
                <img src="images/img1.jpg" alt='' width="100px" height="100px" style={{borderRadius:"50%"}} /><br/><br/>
                <div style={{justifyContent:'space-between'}}>
                <div>
                    <div style={{display:'inline-block'}}>
                    <LockIcon/><input type="password" value={password} placeholder='Enter Your Password' required
                                        style={{position:'relative',width:'200px',height:'20px',marginTop:'-20px'}}
                                        onChange={e => setPassword(e.target.value)} />
                    </div>
                </div>
                <br/>
                </div>
                
                <input style={{background:"skyblue", width:"200px", marginLeft:'25px'}}
                        type="button"
                        value="Login" 
                        onClick={handleLogin}/><br/>
                        <div style={{paddingLeft:"110px"}}>
                            <p>Forgot Password</p>
                            <p style={{paddingLeft:"85px"}}>Help</p>
                        </div><br/>
            </div>
        )
    }

export default Password;
