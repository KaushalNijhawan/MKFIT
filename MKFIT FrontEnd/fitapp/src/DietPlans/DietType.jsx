import React from "react";
import NavDisplay from "../Home/Navbar";
import WeightChoice from "./GainOrLoose";
class DietType extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state={
            user: this.props.location.state?.user,
            bmi: this.props.location.state?.bmi,
            activity:this.props.location.state?.activity,
            calorie:this.props.location.state?.calorie,
            type:this.props.location.state?.type
        }
    }
    render() {
        return (
        <div>
            <NavDisplay />
            <div class="jumbotron jumbotron-fluid">
                <div class="container" style={{ textAlign: "center" }}>
                    <h1 class="display-4" >{"HOLA " + this.state.user.toUpperCase() + " !"}</h1>
                    <p class="lead">Choose Your Aim For The Future.</p>
                </div>
            </div>
            <WeightChoice user ={this.state.user} activity={this.state.activity} bmi={this.state.bmi} calorie={this.state.calorie} type={this.state.type}/>
        </div>
        );
    }
}
export default DietType;