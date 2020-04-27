import React from "react";
import NavDisplay from "../Home/Navbar";
import TrainType from "./TrainType";

class TrainCategory extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user:this.props.location.state?.user
        }
    }
    render(){
        return(<div>
            <NavDisplay/>
            <div class="jumbotron jumbotron-fluid">
            <div class="container" style={{ textAlign: "center" }}>
                <h1 class="display-4" >{"HOLA " + this.state.user.toUpperCase() + " !"}</h1>
                <p class="lead">Welcome to Our Training Section!</p>
            </div>
        </div>
        <TrainType user={this.state.user}/>
        </div>
        );
    }
}
export default TrainCategory;