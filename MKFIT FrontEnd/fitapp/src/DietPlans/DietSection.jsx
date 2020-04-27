import React from "react";
import DietDisplay from "./DietShow";
import "./Section.css";
import {Link} from "react-router-dom";

class DietSection extends React.Component{
	constructor(props){
		super(props);
		this.state={
			user:this.props?.user,
			bmi:this.props?.bmi,
			calorie:this.props?.calorie,
			acitvity:this.props?.acitvity
		}
	}
    render(){
        return(
            <section id="what-we-do">
		<div class="container-fluid">
		<h2 class="section-title mb-2 h1">{"Your Calculated Average Calories Are " + this.state.calorie}</h2>
			<p class="text-center text-muted h5">Choose Your Diet Plan According to Your Need.</p>
			<div class="row mt-5">
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
					<div class="card">
						<div class="card-block block-1">
							<h3 class="card-title">Vegeterian Diet</h3>
							<p class="card-text">In this we provide the Diet plans for the Vegeterian Fam.</p>
							<Link to={{
								pathname:"/fitapi/bmi/calorie/dietType",
								state:{
									user:this.state.user,
									bmi:this.state.bmi,
									calorie:this.state.bmi,
									activity:this.state.acitvity,
									type:"Veg"
								}
							}}  title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></Link>
						</div>
					</div>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
					<div class="card">
						<div class="card-block block-2">
							<h3 class="card-title">Eggetrian Diet</h3>
							<p class="card-text">In this we provide the Diet plans for the Eggetrian Fam</p>
							<Link to={{
								pathname:"/fitapi/bmi/calorie/dietType",
								state:{
									user:this.state.user,
									bmi:this.state.bmi,
									calorie:this.state.bmi,
									activity:this.state.acitvity,
									type:"Egg"
								}
							}}  title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></Link>
						</div>
					</div>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
					<div class="card">
						<div class="card-block block-3">
							<h3 class="card-title">Non Vegeterian Diet</h3>
							<p class="card-text">In this we provide the Diet plans for the Non-Vegeterian Fam.</p>
							<Link to={{
								pathname:"/fitapi/bmi/calorie/dietType",
								state:{
									user:this.state.user,
									bmi:this.state.bmi,
									calorie:this.state.bmi,
									activity:this.state.acitvity,
									type:"NVeg"
								}
							}}  title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></Link>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-6 col-md-12 col-lg-4 col-xl-4">
					<div class="card">
						<div class="card-block block-4">
							<h3 class="card-title">Vegan Diet</h3>
							<p class="card-text">In this we provide the Diet plans for the Vegan Fam</p>
							<Link to={{
								pathname:"/fitapi/bmi/calorie/dietType",
								state:{
									user:this.state.user,
									bmi:this.state.bmi,
									calorie:this.state.bmi,
									activity:this.state.acitvity,
									type:"Vegan"
								}
							}}  title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></Link>
						</div>
					</div>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-12 col-lg-4 col-xl-4">

				</div>
				<div class="col-xs-12 col-sm-6 col-md-12 col-lg-4 col-xl-4" style={{display:"block" , float:"right"}}>
					<div class="card">
						<div class="card-block block-4">
							<h3 class="card-title">Keto Diet</h3>
							<p class="card-text">In this we are Targetting Our Audience with Extreme Fat Loss.</p>
							<Link to={{
								pathname:"/fitapi/bmi/calorie/dietType",
								state:{
									user:this.state.user,
									bmi:this.state.bmi,
									calorie:this.state.bmi,
									activity:this.state.acitvity,
									type:"Keto"
								}
							}}  title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></Link>
						</div>
					</div>
				</div>
			</div>
		</div>	
	</section>
        );
    }
}
export default DietSection;