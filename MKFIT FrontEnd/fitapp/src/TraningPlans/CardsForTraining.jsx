import React from "react";
import Axios from "axios";

class CardsForTraining extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props?.user,
      type: this.props?.type,
      train: []
    }
  }
  componentDidMount = () => {
    Axios.get("http://localhost:8080/train/" + this.state.type)
      .then(res => {
        console.log(res.data);
        this.setState({ train: res.data });
      });

  }
  render() {
  const data = this.state.train;
    return (<div class="container">
      <div class="card-deck">
        <div class="card" >
          <img class="card-img-top" height="300px" width="100%" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sexy-muscular-man-posing-in-gym-showing-muscles-royalty-free-image-629767096-1547155619.jpg?crop=1xw:1xh;center,top&resize=480:*" alt="Card image cap"/>
            <div class="card-body">
    <h5 class="card-title">{data[0]?.day}</h5>
            
            </div>
            <ul class="list-group list-group-flush">
    <li class="list-group-item list-group-item-action">{data[0]?.first}</li>
    <li class="list-group-item list-group-item-action">{data[0]?.second}</li>
    <li class="list-group-item list-group-item-action">{data[0]?.third}</li>
    <li class="list-group-item list-group-item-action">{data[0]?.fourth}</li>
    <li class="list-group-item list-group-item-action">{data[0]?.fifth}</li>
    <li class="list-group-item list-group-item-action">{data[0]?.sixth}</li>
   {data[0]?.seventh=== null ? null : <li class="list-group-item list-group-item-action">{data[0]?.seventh}</li>} 
            </ul>
           
        </div>
        <div class="card" >
          <img class="card-img-top" height="300px" width="100%" src="https://lh3.googleusercontent.com/proxy/ujxC7671Gj-5di1qEAUK2usu2spMZFQxrQROZO6_Au1rzpvRuusNlQrFHNW4phOpJ0SS5wcZQg3ahfsSWYAMQeScHVqP-qocbXd7g4_0bGd1ktDh2WcZjjPd6I8j07IfacuF92UILTVPP_KjuDTnsd7Ou2p6WKsmj3k" alt="Card image cap"/>
            <div class="card-body">
    <h5 class="card-title">{data[1]?.day}</h5>
            
            </div>
            <ul class="list-group list-group-flush">
    <li class="list-group-item list-group-item-action">{data[1]?.first}</li>
    <li class="list-group-item list-group-item-action">{data[1]?.second}</li>
    <li class="list-group-item list-group-item-action">{data[1]?.third}</li>
    <li class="list-group-item list-group-item-action">{data[1]?.fourth}</li>
    <li class="list-group-item list-group-item-action">{data[1]?.fifth}</li>
    <li class="list-group-item list-group-item-action">{data[1]?.sixth}</li>
    {data[1]?.seventh=== null ? null : <li class="list-group-item list-group-item-action">{data[1]?.seventh} </li>}
            </ul>
           
        </div>
        <div class="card" >
          <img class="card-img-top" height="300px" width="100%" src="https://social.xercise4less.co.uk/wp-content/uploads/2019/11/shoulder-press-machine-exercise.jpg" alt="Card image cap"/>
            <div class="card-body">
    <h5 class="card-title">{data[2]?.day}</h5>
            
            </div>
            <ul class="list-group list-group-flush">
    <li class="list-group-item list-group-item-action">{data[2]?.first}</li>
    <li class="list-group-item list-group-item-action">{data[2]?.second}</li>
    <li class="list-group-item list-group-item-action">{data[2]?.third}</li>
    <li class="list-group-item list-group-item-action">{data[2]?.fourth}</li>
    <li class="list-group-item list-group-item-action">{data[2]?.fifth}</li>
    <li class="list-group-item list-group-item-action">{data[2]?.sixth}</li>
    {data[2]?.seventh=== null ? null : <li class="list-group-item list-group-item-action">{data[2]?.seventh} </li>}
            </ul>
           
        </div>
        </div>
          
      <div class="row"></div>
          <div class="card-deck" style={{paddingTop:"10px"}}>
        <div class="card" >
          <img class="card-img-top" height="300px" width="100%" src="https://previews.123rf.com/images/antondotsenko/antondotsenko1705/antondotsenko170500304/79226707-fitness-sexy-mode-on-diet-with-long-female-legs-in-the-gym.jpg" alt="Card image cap"/>
            <div class="card-body">
    <h5 class="card-title">{data[3]?.day}</h5>
            
            </div>
            <ul class="list-group list-group-flush">
    <li class="list-group-item list-group-item-action">{data[3]?.first}</li>
    <li class="list-group-item list-group-item-action">{data[3]?.second}</li>
    <li class="list-group-item list-group-item-action">{data[3]?.third}</li>
    <li class="list-group-item list-group-item-action">{data[3]?.fourth}</li>
    <li class="list-group-item list-group-item-action">{data[3]?.fifth}</li>
    <li class="list-group-item list-group-item-action">{data[3]?.sixth}</li>
    {data[3]?.seventh=== null ? null : <li class="list-group-item list-group-item-action">{data[3]?.seventh} </li>}
            </ul>
           
        </div>
        <div class="card" >
          <img class="card-img-top" height="300px" width="100%" src="https://img.gymshark.com/image/fetch/q_auto,f_auto/https://cdn.shopify.com/s/files/1/0156/6146/articles/1571824936-the-best-arm-exercises-gymshark-thumbnail_04cfceae-e114-4c4d-987a-7681140d4108_600x545_crop_center.jpg?v=1585649112" alt="Card image cap"/>
            <div class="card-body">
    <h5 class="card-title">{data[4]?.day}</h5>
            
            </div>
            <ul class="list-group list-group-flush">
    <li class="list-group-item list-group-item-action">{data[4]?.first}</li>
    <li class="list-group-item list-group-item-action">{data[4]?.second}</li>
    <li class="list-group-item list-group-item-action">{data[4]?.third}</li>
    <li class="list-group-item list-group-item-action">{data[4]?.fourth}</li>
    <li class="list-group-item list-group-item-action">{data[4]?.fifth}</li>
    <li class="list-group-item list-group-item-action">{data[4]?.sixth}</li>
    {data[4]?.seventh=== null ? null : <li class="list-group-item list-group-item-action">{data[4]?.seventh} </li>}
            </ul>
           
        </div>
        <div class="card" >
          <img class="card-img-top" height="300px" width="100%" src="https://lh3.googleusercontent.com/proxy/yxvocH_0I0V1ri1V6D-eQdMKGe50RfTscdCjeOb6wc8uy6X2Hyk6UqIgQnMOWNj85AEhGGlf70esxluxzSd-9K5t6xe7LPXY4ygXfG68iKbgBxihLp4qoFbL_6yNLnBD4owst2k" alt="Card image cap"/>
            <div class="card-body">
    <h5 class="card-title">{data[5]?.day}</h5>
            
            </div>
            <ul class="list-group list-group-flush">
    <li class="list-group-item list-group-item-action">{data[5]?.first}</li>
    <li class="list-group-item list-group-item-action">{data[5]?.second}</li>
    <li class="list-group-item list-group-item-action">{data[5]?.third}</li>
    <li class="list-group-item list-group-item-action">{data[5]?.fourth}</li>
    <li class="list-group-item list-group-item-action">{data[5]?.fifth}</li>
    <li class="list-group-item list-group-item-action">{data[5]?.sixth}</li>
    {data[5]?.seventh=== null ? null : <li class="list-group-item list-group-item-action">{data[5]?.seventh} </li>}
            </ul>
           
        </div>
        </div>
        <br></br>
        <br></br>
        </div>
    );
  }

}
export default CardsForTraining;