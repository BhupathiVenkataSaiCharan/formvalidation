// import React, { useState } from 'react';
// import { NavLink, useNavigate } from "react-router-dom";
// // import PhoneIcon from '@mui/icons-material/Phone';
// import LockIcon from '@mui/icons-material/Lock';


// function Login () {

//     const [password, setPassword] = useState('');
//     // const [user_pin, setUser_pin] = useState('');
//     // const [error, setError] = useState(null);
//     // const [loading, setLoading] = useState(false);


//     let navigate = useNavigate();

//     const handleLogin = () => {        
//             navigate('/otp');
//     }

//     // const handleHelp = () =>{
//     //     navigate('/help')
//     // }


//         return (
//             <div style={{textAlign:'center'}}>
//                 <img src="images/img1.jpg" alt='' width="100px" height="100px" style={{borderRadius:"50%"}} /><br/><br/>
//                 <div style={{justifyContent:'space-between'}}>
//                 <div>
//                     <div style={{display:'inline-block'}}>
//                     <LockIcon/><input type="number" value={password} placeholder='Enter Your Password' required
//                                         style={{position:'relative',width:'200px',height:'20px',marginTop:'-20px'}}
//                                         onChange={e => setPassword(e.target.value)} />
//                     </div>
//                 </div>
//                 {/* <div>
//                     <LockIcon/><input type="password" value={user_pin} placeholder='Password'
//                                         style={{position:'relative',width:'200px',height:'20px',marginTop:'-20px'}}
//                                             onChange={e => setUser_pin(e.target.value)} />
//                 </div> */}<br/>
//                 </div>
//                 {/* {error && <div className='error'>{error}</div>} */}
//                 {/* <input style={{background:"skyblue", width:"200px", marginLeft:'25px'}}
//                         type="button"
//                         value={loading ? "Loading..." : "Login" } 
//                         disabled={loading} onClick={handleLogin}/><br/> */}
//                 <input style={{background:"skyblue", width:"200px", marginLeft:'25px'}}
//                         type="button"
//                         value="Login"  
//                         onClick={handleLogin}/><br/>
//                         <div style={{paddingLeft:"110px"}}>
//                             <p>Forgot Password</p>
//                             <NavLink to="/help" style={{paddingLeft:"85px"}}>Help</NavLink>
//                         </div><br/>
//             </div>
//         )
//     }

// export default Login;

import React, { useState } from 'react'
import Password from '../Toggle/forLogin/Password'
import Mobile from '../Toggle/forLogin/Mobile'

export default function Login() {

    const [show,setShow] = useState(true);

    return (
        <div>
            <br/>
            {/* <Mobile/>
            <Password/> */}
            <div>
                <div style={{textAlign:"center"}}>

                    {
                        show 
                        ?
                        <div>
                            <Mobile/>
                            <button onClick={()=>{setShow(false)}} >Enter Your Password</button>
                        </div> 
                        : 
                        <div>
                            <Password/>
                            <button onClick={()=>setShow(true)}>Logout</button>
                        </div>
                    }
                    
                </div>
            </div>
        </div>
    )
}
