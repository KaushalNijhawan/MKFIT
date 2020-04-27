import React from "react";
import "./Section.css";
import { Link } from "react-router-dom";
class BMISection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			category: this.props?.category,
			bmi: this.props?.bmi,
			user: this.props?.user,
			name: this.props?.name,
			height: this.props?.height,
			weight: this.props?.weight,
			age: this.props?.age
		}
	}
	render() {
		return (
			<section id="what-we-do">
				<div class="container-fluid">
					<h2 class="section-title mb-2 h1">{"Your Calculated BMI is " + this.state.bmi}</h2>
					<p class="text-center text-muted h5">{"You Fall Under the Category of " + this.state.category}.</p>
					<div class="row mt-5">
						<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
							<div class="card">
								<div class="card-block block-1">
									<h3 class="card-title"><i class="fas fa-egg"></i> Diet</h3>
									<p class="card-text">With this Option we tend to Provide you Our Diet Plans to Excel in your Nutrition Cycle.</p>
									<Link to={{
										pathname: "/fitapi/bmi/Diet",
										state: {
											user: this.state.user,
											bmi: this.state.bmi,
											category: this.state.category,
											height: this.state.height,
											weight: this.state.weight,
											age: this.state.age,
											name: this.state.name
										}
									}} title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></Link>
								</div>
							</div>
						</div>

						<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
							<div class="card">
								<div class="card-block block-3">
									<h3 class="card-title"><i class="fas fa-weight-hanging"></i> Trainig</h3>
									<p class="card-text">With this Option we tend to provide you Our Latest Trainig Cum Excercises Plans to Strenghten Your Body.</p>
									<Link to={{
										pathname: "/fitapi/train",
										state: {
											user: this.state.user,
											bmi: this.state.bmi,
											category: this.state.category,
											height: this.state.height,
											weight: this.state.weight,
											age: this.state.age,
											name: this.state.name
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
export default BMISection;