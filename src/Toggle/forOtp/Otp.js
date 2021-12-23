import React, { Component } from 'react'
import OtpInput from 'react-otp-input';
import Submit from "./Submit";


export default class Otp extends Component {
    constructor(){
        super();
        this.state ={
        otp:''
        }
    }

    handleChange = (otp) => this.setState({ otp });


    render() {
        return (
            <div style={{textAlign:"center"}} >
                <OtpInput
                    value={this.state.otp}
                    onChange={this.handleChange}
                    numInputs={4}
                    separator={<span>-</span>}
                    isInputNum={true}
                    containerStyle={{}}
                    />
                <Submit/>           
            </div>
        )
    }
}

