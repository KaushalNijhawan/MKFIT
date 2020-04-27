import React from "react";
import NavDisplay from "../Home/Navbar";
import CardsForTraining from "./CardsForTraining";

class TrainingSchedule extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props);
        this.state={
            user:this.props.location.state?.user,
            type:this.props.match.params?.category
            
        }
    }
   render(){
       return(<div>
        <NavDisplay/>
        <div class="jumbotron jumbotron-fluid">
                <div class="container" style={{ textAlign: "center" }}>
                    <h1 class="display-4" >{"HOLA " + this.state.user.toUpperCase() + " !"}</h1>
                    <p class="lead">This is Your Training Schedule.</p>
                </div>
            </div>
            <CardsForTraining user={this.state.user} type={this.state.type}/>
        </div>
       );
   }
}
export default TrainingSchedule;