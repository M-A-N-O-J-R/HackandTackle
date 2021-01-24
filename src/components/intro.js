import React,{ Component} from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/logo.png'
import logo2 from '../img/ieeesp.png'
const style={
    color:"white",
    backgroundColor:"rgb(3, 3, 3,0.8)",
    width:"120px",
    height:"30px",
    borderRadius:"5px",
    display:"inline-block",
    textDecoration:"none",
    textAlign:"center",
    padding:"2px"

}

class intro extends Component {
handleHover=(event)=>{
        console.log(event);
        event.preventDefault();
        event.target.classList.toggle("hover1");
    }
  render(){
    return (
        <div className="intro-class"  >
          <div data-aos="fade-down" data-aos-delay="150" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
          <div className="intro-text" >        
            <p>SSN College of Engineering</p>
            <p id="dpt">Information Technology</p>
           </div>
          <p   >presents</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
          <div className="intro-logo-div">
           <img src={logo2} alt="logo" id="event-img" width="170px"/>
           <img src={logo} alt="logo" id="event-logo" width="170px"/>    
           </div> 
           <div className="info-class">
              <p>💻 24 Hour Hackthon</p>
              <p>📅 20 - 21 FEBRUARY 2020</p>
              <p>🕒 3 PM - 3 PM</p>
           </div> 
           <Link style={style} to="/register">Register</Link>
           </div>
        </div>
    )
  }
}

export default intro
