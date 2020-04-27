import React from "react";
import Axios from "axios";
import NavDisplay from "../Home/Navbar";

class AnyDiet extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            user: this.props.location.state?.user,
            bmi: this.props.location.state?.bmi,
            activity: this.props.location.state?.activity,
            calorie: this.props.location.state?.calorie,
            type: this.props.location.state?.type,
            diet: []

        }

    }
    componentDidMount = () => {
        console.log(this.state.type);
        Axios.get("http://localhost:8080/diet/"+ this.state.type)
            .then(res => {
                console.log(res.data);
                this.setState({diet:res.data});
            })
            
    }
    render() {
        console.log(this.state.diet[0]?.breakfast);
       
        return (<div>
            <NavDisplay />
            <div class="jumbotron jumbotron-fluid">
                <div class="container" style={{ textAlign: "center" }}>
                    <h1 class="display-4" >{"HOLA " + this.state.user.toUpperCase() + " !"}</h1>
        <p class="lead">Here Is Your Diet Plan.</p>
                </div>
            </div>
            <div class="container">
    <div class="row">
        <div class="col-sm-4">
            <div class="card card-flip h-100">
                <div class="card-front text-white bg-dark">
                    <div class="card-body">
                        <i class="fa fa-search fa-5x float-right"></i>
                        <h3 class="card-title">Breakfast</h3>
                                            </div>
                </div>
                <div class="card-back bg-white">
                    <div class="card-body">
                       
        <p class="card-text">{this.state.diet[0]?.breakfast}</p>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card card-flip h-100">
                <div class="card-front text-white bg-warning">
                    <div class="card-body">
                        <i class="fa fa-search-plus fa-5x float-right"></i>
                        <h3 class="card-title">lunch</h3>
                        
                    </div>
                </div>
                <div class="card-back bg-dark text-white">
                    <div class="card-body">
                        
        <p class="card-text">{this.state.diet[0]?.lunch}</p>
                      
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card card-flip h-100">
                <div class="card-front text-white bg-primary">
                    <div class="card-body">
                        <i class="fa fa-arrow-circle-right fa-5x float-right"></i>
                        <h3 class="card-title">Dinner</h3>
                        
                    </div>
                </div>
                <div class="card-back bg-white">
                    <div class="card-body text-primary">
                        
        <p class="card-text">{this.state.diet[0]?.dinner}</p>
                
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-4 my-3">
            <div class="card card-flip h-100">
                <div class="card-front text-white bg-dark">
                    <div class="card-body">
                        <i class="fa fa-search fa-5x float-right"></i>
                        <h3 class="card-title">Morning Snack</h3>
                        
                    </div>
                </div>
                <div class="card-back bg-white">
                    <div class="card-body">
        <p class="card-text">{this.state.diet[0]?.morningSnack}</p>
                       </div>
                </div>
            </div>
        </div>
        <div class="col-sm-4 my-3">
            <div class="card card-flip h-100">
                <div class="card-front text-white bg-danger">
                    <div class="card-body">
                        <i class="fa fa-search fa-5x float-right"></i>
                        <h3 class="card-title">Evening Snack</h3>
                        </div>
                </div>
                <div class="card-back bg-white">
                    <div class="card-body">
        <p class="card-text">{this.state.diet[0]?.eveningSnack}</p>
                        </div>
                </div>
            </div>
        </div>
        <div class="col-sm-4 my-3">
            <div class="card card-flip h-100">
                <div class="card-front text-white bg-success">
                    <div class="card-body">
                        <i class="fa fa-search fa-5x float-right"></i>
                        <h3 class="card-title">Bed Time Meal</h3>
                       </div>
                </div>
                <div class="card-back bg-white">
                    <div class="card-body">
        <p class="card-text">{this.state.diet[0]?.bedtimeMeal}</p>
                       </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
        );
    }
}
export default AnyDiet;