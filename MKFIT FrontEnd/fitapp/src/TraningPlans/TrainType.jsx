import React from "react";
import {Link} from "react-router-dom";
class TrainType extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user : this.props?.user
        }
    }
    
    render(){
        return(
            <section id="what-we-do">
            <div class="container-fluid">
                <h2 class="section-title mb-2 h1">Workout Plans</h2>
                <p class="text-center text-muted h5">We Have Training Plans For Every Individual Type.</p>
                <div class="row mt-5">
                    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                        <div class="card">
                            <div class="card-block block-1">
                                <h3 class="card-title">FullBody Training</h3>
                                 <p class="card-text">With this method, you will use lighter weights in a variety of motions to work out your entire body.</p> 
                                <Link to={{
                                    pathname:"/fitapi/training/FullBody",
                                    state:{
                                        user:this.state.user
                                    }
                                }} title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                        <div class="card">
                            <div class="card-block block-2">
                                <h3 class="card-title">Muscle Isolation Training</h3>
                                <p class="card-text">Unlike most of the other programs, the objective of muscular isolation is to cause muscular contraction in only one muscle for each exercise.</p>
                                <Link to={{
                                    pathname:"/fitapi/training/MuscleIsolation",
                                    state:{
                                        user:this.state.user
                                    }
                                }} title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                        <div class="card">
                            <div class="card-block block-3">
                                <h3 class="card-title">Push Pull Training</h3>
                                <p class="card-text">We can break down the body into three basic movement plains: all the muscles that push, all the muscles that pull, and everything in y</p>
                                <Link to={{
                                    pathname:"/fitapi/training/PushPull",
                                    state:{
                                        user:this.state.user
                                    }
                                }} title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                        <div class="card">
                            <div class="card-block block-4">
                                <h3 class="card-title">Cardio Training</h3>
                                <p class="card-text">excellent strength training component, these exercises also integrate a large cardiovascular component to get your blood pumping.</p>
                                <Link to={{
                                    pathname:"/fitapi/training/Cardio",
                                    state:{
                                        user:this.state.user
                                    }
                                }} title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4"><div class="card">
                            <div class="card-block block-5">
                                <h3 class="card-title">Special Women's Workout</h3>
                                <p class="card-text">Here we have a target audience for women who love to do workout.</p>
                                <Link to={{
                                    pathname:"/fitapi/training/Women",
                                    state:{
                                        user:this.state.user
                                    }
                                }} title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></Link>
                            </div>
                        </div></div>
                    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                        <div class="card">
                            <div class="card-block block-5">
                                <h3 class="card-title">Power Lifting Training</h3>
                                <p class="card-text">In many gyms, you see power racks and even some centered on powerlifting.</p>
                                <Link to={{
                                    pathname:"/fitapi/training/PowerLift",
                                    state:{
                                        user:this.state.user
                                    }
                                }} title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></Link>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>	
        </section>
        );
    }
}
export default TrainType;