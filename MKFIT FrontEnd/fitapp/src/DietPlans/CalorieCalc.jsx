import React from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";

class CalorieCal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props?.name,
            height: this.props?.height,
            weight: this.props?.weight,
            age: this.props?.age,
            user:this.props?.user,
            bmi:this.props?.bmi,
            gender: "",
            activity: "",
            totalCalorie:""
        }
    }
    HandleChangeAge = (e) => {
        this.setState({ age: e.target.value });
    }
    HandleChangeHeight = (e) => {
        this.setState({ height: e.target.value });
    }
    HandleChangeName = (e) => {
        this.setState({ name: e.target.value });
    }
    HandleChangeWeight = (e) => {
        this.setState({ weight: e.target.value });
    }
    HandleGender = (e) => {
        console.log(e.target.value);
        this.setState({ gender: e.target.value });
    }
    HandleActivity = (e) => {
        console.log(e.target.value);
        this.setState({ activity: e.target.value });
    }
    HandleSubmitForm = (e) =>{
        e.preventDefault();
        const user={
            name:this.state.name,
            age:this.state.age,
            weight:this.state.weight,
            height:this.state.height,
            gender:this.state.gender,
            activity:this.state.activity,
            user:this.props?.user
        }
        Axios.post("http://localhost:8080/calorieCount" , user)
            .then(res=>{
                this.setState({totalCalorie:res.data})
            })

    }
    RedirectionOfPage = () =>{
        if(this.state.totalCalorie!==""){
            return(
                <Redirect to={{
                    pathname:"/fitapi/bmi/calorie/diet",
                    state:{
                        user:this.state.user,
                        bmi:this.state.bmi,
                        calorie:this.state.totalCalorie,
                        activity:this.state.activity
                    }
                }}/>
            )
        }
    }
    render() {
        return (<div>
            <form style={{ paddingTop:"40px", width: "60%" }} onSubmit={this.HandleSubmitForm} className="container">
                <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label"><i class="fas fa-user fa-2x"></i></label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputEmail3" value={this.state.name} placeholder="Name" onChange={this.HandleChangeName} />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-2 col-form-label"><i class="fas fa-genderless fa-2x"></i></label>
                    <div class="col-sm-10">
                        <select class="browser-default custom-select form-control" onChange={this.HandleGender}>
                            <option selected>Select Gender</option>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label"><i class="fas fa-ruler-vertical fa-2x"></i></label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputEmail3" value={this.state.height} placeholder="Height (in cm)" onChange={this.HandleChangeHeight} />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-2 col-form-label"><i class="fas fa-weight fa-2x"></i></label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputPassword3" value={this.state.weight} placeholder="Weight (in kg)" onChange={this.HandleChangeWeight} />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-2 col-form-label"><i class="fas fa-birthday-cake fa-2x"></i></label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputPassword3" value={this.state.age} placeholder="Age" onChange={this.HandleChangeAge} />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-2 col-form-label"><i class="fas fa-burn fa-2x"></i></label>
                    <div class="col-sm-10">
                        <select class="browser-default custom-select form-control" onChange={this.HandleActivity}>
                            <option selected>Select Acitvity Type</option>
                            <option value="BMR">Basal Metabolic Rate (BMR)</option>
                            <option value="Sedentary">Sedentary: Little or No Excercise</option>
                            <option value="Light">Light Excercise: 1-3 times/week</option>
                            <option value="Moderate">Moderate Excercise: sports 6-7 days/week</option>
                            <option value="VeryActive">hard exercise every day, or exercising 2 xs/day)</option>
                            <option value="ExtraActive">Extra Active: hard exercise 2 or more times per day, or training for marathon, or triathlon, etc. </option>
                        </select>
                    </div>
                </div>
                <button type="submit" class="btn btn-info" style={{ marginLeft: "0px", marginTop: "20px" }}>Calorie Count</button>
            </form>
            {this.RedirectionOfPage()}
            </div>
        );
    }
}
export default CalorieCal;