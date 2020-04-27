import React from "react";
import NavDisplay from "../Home/Navbar";
import DietSection from "./DietSection";

class DietBasedCalorie extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            user: this.props.location.state?.user,
            bmi: this.props.location.state?.bmi,
            calorie: this.props.location.state?.calorie,
            activity: this.props.location.state?.activity
        }
    }
    render() {
        return (<div>
            <NavDisplay />
            <div class="jumbotron jumbotron-fluid">
                <div class="container" style={{ textAlign: "center" }}>
                    <h1 class="display-4" >{"HOLA " + this.state.user.toUpperCase() + " !"}</h1>
                    <p class="lead">Select From Below Diet Plans.</p>

                </div>
            </div>
            <DietSection bmi = {this.state.bmi} activity = {this.state.activity} calorie={this.state.calorie} user = {this.state.user}/>
            </div>
        );
    }
}
export default DietBasedCalorie;