import React from "react";
import "./WeightChoice.css";
import {Link} from "react-router-dom";
class WeightChoice extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props);
        this.state={
            user: this.props?.user,
            bmi: this.props?.bmi,
            activity:this.props?.activity,
            calorie:this.props?.calorie,
            type:this.props?.type

        }
    }
   render(){
      if(this.state.type === "Keto"){
        return(
        
          <div class="container" style={{marginTop:"100px"}}>
      <div class="row">
      <div class="col-md-4">
         <Link
          to={{
             pathname:"/fitapi/diet/ketodiet",
             state:{
                 user:this.state.user,
                 bmi:this.state.bmi,
                 activity:this.state.activity,
                 calorie:this.state.calorie,
                 type:"KetoVeg"
             }
         }} >
        <div class="card-counter primary">
        <i class="fas fa-leaf"></i>
          
          <span class="count-name" style={{color:"#fff"}}>Keto Veg</span>
          
        </div>
        </Link>
      </div>
  
      <div class="col-md-4" style={{marginLeft:"300px"}}>
      <Link to={{
             pathname:"/fitapi/diet/ketodiet",
             state:{
                 user:this.state.user,
                 bmi:this.state.bmi,
                 activity:this.state.activity,
                 calorie:this.state.calorie,
                 type:"KetoNVeg"
             }
         }} >
        <div class="card-counter danger">
        <i class="fas fa-drumstick-bite"></i>
          
          <span class="count-name" style={{color:"#FFF"}}>Keto Non-Veg</span>
        </div>
        </Link>
      </div>
  
    </div>
  </div>
  
         );
      }else{
        const data1 = this.state.type+"WeightGain";
        const data2 = this.state.type+"WeightLoss";
        return(
        
          <div class="container" style={{marginTop:"100px"}}>
      <div class="row">
      <div class="col-md-4">
         <Link
          to={{
             pathname:"/fitapi/diet/gain",
             state:{
                 user:this.state.user,
                 bmi:this.state.bmi,
                 activity:this.state.activity,
                 calorie:this.state.calorie,
                 type:data1
             }
         }} >
        <div class="card-counter primary">
        <i class="fas fa-fist-raised"></i>
          
          <span class="count-name" style={{color:"#fff"}}>Muscle Gain</span>
          
        </div>
        </Link>
      </div>
  
      <div class="col-md-4" style={{marginLeft:"300px"}}>
      <Link to={{
             pathname:"/fitapi/diet/loss",
             state:{
                 user:this.state.user,
                 bmi:this.state.bmi,
                 activity:this.state.activity,
                 calorie:this.state.calorie,
                 type:data2
             }
         }} >
        <div class="card-counter danger">
        <i class="fas fa-weight"></i>
          
          <span class="count-name" style={{color:"#FFF"}}>Weight Loss</span>
        </div>
        </Link>
      </div>
  
    </div>
  </div>
  
         );
      }
      
   }
}
export default WeightChoice;