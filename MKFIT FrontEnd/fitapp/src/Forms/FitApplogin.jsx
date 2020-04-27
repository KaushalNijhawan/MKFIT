import React from "react";
import "./forms.css";
import Axios from "axios";
import AlertMessage from "./Alert";
import { Redirect } from "react-router-dom";
class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
            message:"",
            loggfailed:false
        }

    }

    HandleUserName=(event)=>{
        this.setState({username: event.target.value})
    }
    HandleUserPassword=(event)=>{
        this.setState({password : event.target.value})
    }
    HandleSubmitForm=(event)=>{
        event.preventDefault();

        const user = {
            username:this.state.username,
            password:this.state.password
        }
    Axios.post("http://localhost:8080/login" , user)
        .then(res=>{
            this.setState({message : res.data});
        })
        
    }
    HandleRedirection = () =>{
        console.log(this.state.message);
        if(this.state.message === "Successful Login"){
            this.setState({
                loggfailed : false
            })
            
            return(
                <Redirect to={{
                    pathname:"/fitapi/home",
                    state:{
                        username:this.state.username
                    }
                    }}></Redirect>
            )
        }
    }

    render() {
    
    return(
       
            <section className ="container-fluid bg" >
            <section className="row justify-content-center">
                <section className="col-12 col-sm-6 col-md-3">
                    <form class="form-container" onSubmit={this.HandleSubmitForm}>
                       {this.state.loggfailed === true ? <AlertMessage message = {this.state.message} /> : null}
                        <div class="form-group" >
                            <label for="exampleInputEmail1"><h6>UserName</h6></label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.HandleUserName}/>
                            
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1"><h6>Password</h6></label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.HandleUserPassword}/>
                        </div>
                       
                        <div className="form-group">
                        <input type="submit" class="btn btn-primary btn-block" style={{color:"#fff"}} value="Login"/>
                        </div>

                        <div className="form-group">
                        <small id="emailHelp" class="form-text"><h6>New Here , Register!</h6></small>
                        
                        <a href="/fitapp/signup" type="submit" class="btn btn-primary btn-block" style={{color:"#fff"}}>SignUp</a>
                        </div>
                    </form>
                </section>

            </section>
            {this.HandleRedirection()}
            </section>
       );
    }
}
export default Login;
