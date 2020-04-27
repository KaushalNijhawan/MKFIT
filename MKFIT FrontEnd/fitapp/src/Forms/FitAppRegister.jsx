import React from "react";
import "./forms.css";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import AlertMessage from "./Alert";


class Register extends React.Component {
  constructor(props){
    super(props);
    this.state={
      userName:"",
      userEmail :"",
      userContact : "",
      password:"",
      message:"",
      regFailed:false
    }
  }
  HandleUserContact=(event)=>{
    this.setState({userContact:event.target.value});
    console.log(event.target.value)
  }
  HandleUserEmail=(event)=>{
    this.setState({
      userEmail:event.target.value
    })
  }
  HandleUserName=(event)=>{
    this.setState({userName:event.target.value});
  }
  HandleUserPassword=(evemt)=>{
    this.setState({password:evemt.target.value})
  }
  HandleSubmitForm=(event)=>{

    event.preventDefault();
    const user={
      userName:this.state.userName,
      userEmail:this.state.userEmail,
      userContact:this.state.userContact,
      password:this.state.password
    }
    Axios.post("http://localhost:8080/register" , user)
      .then(res=>{
            this.setState({message:res.data});
      })
      
  }
  
  RedirectionOfPage=()=>{

    if(this.state.message === "success"){
      this.setState({regFailed : false})
      return <Redirect to="/fitapi/login"></Redirect>
    }else if(this.state.message === "Email already Taken!!" || this.state.message === "Username already Taken!"){
      this.setState({
        regFailed : true
      })
    }    
  }
  
  
  render() {
 
    return (
    <section className="container-fluid bg" >
        <section className="row justify-content-center">
          <section className="col-12 col-sm-6 col-md-3">
            <form class="form-container" onSubmit={this.HandleSubmitForm}>
              
    {this.state.regFailed === true ? <AlertMessage message={this.state.message} /> : null}

              <div class="form-group" >
                <label for="exampleInputEmail1"><h6>UserName</h6></label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" onChange={this.HandleUserName} />

              </div>
              <div class="form-group" >
                <label for="exampleInputEmail1"><h6>Email</h6></label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" onChange={this.HandleUserEmail} />

              </div>
              <div class="form-group" >
                <label for="exampleInputEmail1"><h6>Contact Number</h6></label>
                <input type="text" maxLength="10" minLength="10" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Contact" onChange={this.HandleUserContact} />

              </div>
              <div class="form-group">
                <label for="exampleInputPassword1"><h6>Password</h6></label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.HandleUserPassword} />
              </div>

              <div className="form-group">
               
                <input type="submit" class="btn btn-primary btn-block" value = "Register" style={{ color: "#fff" }} />
              </div>

              <div className="form-group">
                <small id="emailHelp" class="form-text"><h6>Already Logged In , Login!</h6></small>

                <a href="/fitapp/login" class="btn btn-primary btn-block" style={{ color: "#fff" }}>SignIn</a>
              </div>
            </form>
          </section>

        </section>
        {this.RedirectionOfPage()}  
      </section>
      
      
      
      
    );
  }
}
export default Register;
