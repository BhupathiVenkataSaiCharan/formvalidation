import React from 'react';
// import '../../App.css'
// import Submit from "./Submit";
import { useNavigate } from "react-router-dom";


const Otpinput = () =>{

  let navigate = useNavigate();

    const handleOtp = () => {        
            navigate('/changepassword');
    }

  return (
      <>
        <div className='container'>
          <h2>Enter OTP</h2>
          <div className='row'>
            <div className='col-md-3'>
              <input type="text" id="txt1" maxLength="1" 
                     style={{height: "35px",width: "65px", 
                              border:"1px sold black", borderRadius:"5px"}} />
            </div>
            <div className='col-md-3'>
              <input type="text" id="txt2" maxLength="1" 
                    style={{height: "35px",width: "65px", 
                              border:"1px sold black", borderRadius:"5px"}}/>
            </div>
            <div className='col-md-3'>
              <input type="text" id="txt3" maxLength="1" 
                    style={{height: "35px",width: "65px", 
                              border:"1px sold black", borderRadius:"5px"}}/>
            </div>
            <div className='col-md-3'>
              <input type="text" id="txt4" maxLength="1" 
                    style={{height: "35px",width: "65px", 
                              border:"1px sold black", borderRadius:"5px"}}/>
            </div>
          </div>
        </div>
        <button onClick={handleOtp} style={{width: "150px",height: "40px",marginTop: "30px", backgroundColor:" rgb(0, 110, 255)"}}>
              Submit</button>
        {/* <Submit/> */}
      </>
  );
}



export default Otpinput;



/**
 * <form onSubmit={this.handleSubmit}>
        <div className="otpContainer">

          <input
            name="otp1"
            type="number"
            autoComplete="off"
            className="otpInput"
            value={this.state.otp1}
            onKeyPress={this.keyPressed}
            onChange={e => this.handleChange("otp1", e)}
            tabIndex="1" maxLength="1" onKeyUp={e => this.inputfocus(e)}

          />-
          <input
            name="otp2"
            type="number"
            autoComplete="off"
            className="otpInput"
            value={this.state.otp2}
            onChange={e => this.handleChange("otp2", e)}
            tabIndex="2" maxLength="1" onKeyUp={e => this.inputfocus(e)}

          />-
          <input
            name="otp3"
            type="number"
            autoComplete="off"
            className="otpInput"
            value={this.state.otp3}
            onChange={e => this.handleChange("otp3", e)}
            tabIndex="3" maxLength="1" onKeyUp={e => this.inputfocus(e)}

          />-
          <input
            name="otp4"
            type="number"
            autoComplete="off"
            className="otpInput"
            value={this.state.otp4}
            onChange={e => this.handleChange("otp4", e)}
            tabIndex="4" maxLength="1" onKeyUp={e => this.inputfocus(e)}
          />
        </div>
 */