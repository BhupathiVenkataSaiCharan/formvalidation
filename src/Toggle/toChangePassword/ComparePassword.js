import React, { Component } from 'react';
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
