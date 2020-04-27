import React from "react";
import NavDisplay from "./Navbar";
import BMIForm from "./Form";


class HomeDisplay extends React.Component{
  constructor(props){
    super(props);
    this.state={
      user: this.props.location.state?.username,
      
    }
  }
    render(){
        return(<div>
            <NavDisplay/>
            <div class="jumbotron jumbotron-fluid vertical-center" style={{textAlign:"center"}}>
            <div class="container">
            <h1 class="display-4">{"HOLA "+  this.state.user.toUpperCase() + "!"}</h1>
              <p class="lead">Help us to get Calculate Your BMI.</p>
            </div>
          </div>
          <BMIForm user= {this.state.user}/>
          </div>
        );
    }
}
export default HomeDisplay;