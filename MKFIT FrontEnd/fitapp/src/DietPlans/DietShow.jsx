import React from "react";
import NavDisplay from "../Home/Navbar";
import CalorieCal from "./CalorieCalc";

class DietDisplay extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            user: this.props.location.state?.user,
            bmi: this.props.location.state?.bmi,
            category: this.props.location.state?.category,
            name: this.props.location.state?.name,
            weight: this.props.location.state?.weight,
            height: this.props.location.state?.height,
            age: this.props.location.state?.age
        }
    }
    render() {
        return (<div>
            <NavDisplay />
            <div class="jumbotron jumbotron-fluid">
                <div class="container" style={{ textAlign: "center" }}>
                    <h1 class="display-4" >{"HOLA " + this.state.user.toUpperCase() + " !"}</h1>
                    <p class="lead">Welcome to Our Diet Section. But First Let Us Calculate Your Calorie Count.</p>
                </div>
            </div>
            <CalorieCal bmi={this.state.bmi} user={this.state.user} name={this.state.name} age={this.state.age} height={this.state.height} weight={this.state.weight} />
        </div>
        );
    }
}
export default DietDisplay;