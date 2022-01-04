import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Submit() {

    let navigate = useNavigate();

    const handleOtp = () => {        
            navigate('/newpassword');
    }

    return (
        <div>
            <input style={{background:"skyblue", width:"200px",height:"30px", marginLeft:"45%"}}
                        type="button"
                        value="Submit" 
                        onClick={handleOtp}/><br/>
        </div>
    )
}
