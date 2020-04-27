import React from "react";
import BMIForm from "./Form";
import NavDisplay from "./Navbar";
import BMISection from "./BMIInfoSection";

class BMIInfo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            message:"",
            user:this.props.location.state?.user,
            bmi:this.props.location.state?.BMI,
            category:this.props.location.state?.category,
            name:this.props.location.state?.name,
            weight:this.props.location.state?.weight,
            height:this.props.location.state?.height,
            age:this.props.location.state?.age
        }
    }
    
   render(){
       return(<div>
        <NavDisplay/>
        <div class="jumbotron jumbotron-fluid vertical-center" style={{textAlign:"center"}}>
            <div class="container">
            <h1 class="display-4">{"HOLA "+  this.state.user.toUpperCase() + "!"}</h1>
            <p class="lead">Below Is The BMI Chart.</p>
            </div>
          </div>
          <div class="container" style={{textAlign:"center"}}>
          <img src="https://mk0tw0mdal2noq6fa.kinstacdn.com/wp-content/uploads/sites/4/2018/05/Chart.jpg" class="img-fluid" alt="Responsive image"></img>
          </div>
            <BMISection category={this.state.category} user={this.state.user} bmi={this.state.bmi} name={this.state.name} height={this.state.height} weight={this.state.weight} age={this.state.age}/>
          </div>
       );
   }
} 
export default BMIInfo;