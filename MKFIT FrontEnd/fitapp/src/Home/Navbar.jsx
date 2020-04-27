import React from "react";
import "./all.css";
import "./jumbo.css";
class NavDisplay extends React.Component{
  
   render(){
       return(
        <nav class="navbar navbar-dark bg-dark navbar-static-top">
          <a class="navbar-brand" href="#">
            <i class="fas fa-dumbbell fa-2x"></i>
          </a>
          <div class="navbar-nav">
      <div class="nav-item" style={{color:"#fff"}}>MyFitApp</div>
    
    </div>
    

          <div class="navbar-nav">
      <a class="nav-item" href="/fitapp/login" style={{color:"#fff"}}><i class="fas fa-sign-out-alt fa-2x"></i></a>
    </div>

</nav>
       );
   }
}
export default NavDisplay;