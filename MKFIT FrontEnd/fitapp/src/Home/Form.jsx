import React from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";

 class BMIForm extends React.Component{
   constructor(props){
     super(props);
     this.state={
       age:"",
       height:"",
       weight:"",
       name:"",
       message:"",
       user:this.props.user,
       category:""

     }
   }
   HandleChangeAge=(e)=>{
    this.setState({age:e.target.value});
   }
   HandleChangeHeight=(e)=>{
this.setState({height:e.target.value});
   }
   HandleChangeName=(e)=>{
    this.setState({name:e.target.value});
   }
   HandleChangeWeight=(e)=>{
    this.setState({weight:e.target.value})
   }
  handleSubmitForm=(e)=>{
    e.preventDefault();
    const user = {
      height:this.state.height,
      weight:this.state.weight,
      age:this.state.age,
      name:this.state.name
    }
    Axios.post("http://localhost:8080/bmiStore" , user)
      .then(res=>{
        this.setState({message:res.data});
      })
  }
  
  RedirectionOfPage=()=>{
    
    if(this.state.message!==""){
      if((23<this.state.message && this.state.message<27.5) || this.state.message === 27.5){
        
        return (<Redirect to={{
          pathname:"/fitapi/bmi/info",
          state:{
            user:this.state.user,
            BMI :this.state.message,
            category:"Overweight",
            height:this.state.height,
            weight:this.state.weight,
            age:this.state.age,
            name:this.state.name
          }
        }}/>)

    }else if((0<this.state.message && this.state.message<18) || this.state.message ===18){
        
        return (<Redirect to={{
          pathname:"/fitapi/bmi/info",
          state:{
            user:this.state.user,
            BMI :this.state.message,
            category:"Underweight",
            height:this.state.height,
            weight:this.state.weight,
            age:this.state.age,
            name:this.state.name
          }
        }}/>)
    }else if((18<this.state.message && this.state.message<23) || this.state.message === 23){
       
        return (<Redirect to={{
          pathname:"/fitapi/bmi/info",
          state:{
            user:this.state.user,
            BMI :this.state.message,
            category:"Healthy Range",
            height:this.state.height,
            weight:this.state.weight,
            age:this.state.age,
            name:this.state.name
          }
        }}/>)
    }else if(27.5<this.state.message){
      
        return (<Redirect to={{
          pathname:"/fitapi/bmi/info",
          state:{
            user:this.state.user,
            BMI :this.state.message,
            category:"Obese",
            height:this.state.height,
            weight:this.state.weight,
            age:this.state.age,
            name:this.state.name
          }
        }}/>)
    }
    
    }
    
    
  }

    render(){
        return(<div>
            <form style={{padding:"100px" , width:"60%"}} onSubmit={this.handleSubmitForm}>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label"><i class="fas fa-user fa-2x"></i></label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputEmail3" placeholder="Name" onChange={this.HandleChangeName}/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label"><i class="fas fa-ruler-vertical fa-2x"></i></label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputEmail3" placeholder="Height (in cm)" onChange={this.HandleChangeHeight}/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label"><i class="fas fa-weight fa-2x"></i></label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputPassword3" placeholder="Weight (in kg)" onChange={this.HandleChangeWeight}/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label"><i class="fas fa-birthday-cake fa-2x"></i></label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputPassword3" placeholder="Age" onChange={this.HandleChangeAge}/>
    </div>
  </div>
  <button type="submit" class="btn btn-info" style={{marginLeft:"0px" , marginTop:"20px"}}>Calculate BMI</button>
  </form>
  {this.RedirectionOfPage()}
  </div>
        );
    }
}

export default BMIForm;