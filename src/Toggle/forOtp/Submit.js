import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Submit() {

    let navigate = useNavigate();

    const handleOtp = () => {        
            navigate('/newpassword');
    }

    return (
        <div>
            <input style={{background:"skyblue", width:"200px", paddingLeft:'none'}}
                        type="button"
                        value="Login" 
                        onClick={handleOtp}/><br/>
        </div>
    )
}
