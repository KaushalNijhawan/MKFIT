import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
import Login from "./Forms/FitApplogin";
import Register from "./Forms/FitAppRegister";
import HomeDisplay from "./Home/Home";
import BMIInfo from "./Home/BMIInfo";
import DietDisplay from "./DietPlans/DietShow";
import DietBasedCalorie from "./DietPlans/DietBasedCalorie";
import DietType from "./DietPlans/DietType";
import KetoDiet from "./DietPlans/AnyDiet";
import AnyDiet from "./DietPlans/AnyDiet";
import TrainCategory from "./TraningPlans/TrainCategory";
import TrainingSchedule from "./TraningPlans/TrainigSchedule";
class FitAppRouting extends React.Component{
  render(){
      return(<div>
        <Router>
            <Switch>
                <Route path="/fitapi/training/:category" component={TrainingSchedule}></Route>
                <Route path="/fitapi/train" component={TrainCategory}></Route>
                <Route path="/fitapi/diet/:dietname" component={AnyDiet}></Route>
                <Route path ="/fitapi/bmi/calorie/dietType" component={DietType}></Route>
                <Route path="/fitapi/bmi/calorie/diet" component={DietBasedCalorie}></Route>
                <Route path="/fitapi/bmi/Diet" component={DietDisplay}></Route>
                <Route path ="/fitapi/home" component={HomeDisplay}></Route>
                <Route path="/fitapi/login" component={Login}></Route>
                <Route path="/fitapi/bmi/info" component={BMIInfo}></Route>
                <Route path="/fitapi/signup"><Register/></Route>

                <Route path ="/" ><Login/></Route> 
            </Switch>
        </Router>
        </div>
      );
  }
}
export default FitAppRouting;