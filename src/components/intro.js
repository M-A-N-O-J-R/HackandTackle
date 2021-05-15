import React,{ Component} from 'react'
import logo from '../img/logo.png'

const style={
    color:"rgb(50,50,50)",
    backgroundColor:"#eeeeee",
    width:"120px",
    height:"30px",
    borderRadius:"5px",
    display:"inline-block",
    textDecoration:"none",
    textAlign:"center",
    padding:"8px",
    fontWeight:"normal"

}

class intro extends Component {
handleHover=(event)=>{
        console.log(event);
        event.preventDefault();
        event.target.classList.toggle("hover1");
    }
  render(){
    return (
        <div className="intro-class hero"  >
          <div data-aos="fade-down" data-aos-delay="150" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
          <div className="intro-text" >        
            <p className="overlay" id="clg">SRI SIVASUBRAMANIYA NADAR COLLEGE OF ENGINEERING</p>
            <p id="dpt" className="overlay">DEPARTMENT OF INFORMATION TECHNOLOGY</p>
           </div>
          <p   className="present">presents</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
          <div className="intro-logo-div">
        <img src={logo} alt="logo" id="event-logo" width="320px"/>    
           </div> 
           <div className="info-class">
              <p className="overlay" style={{fontSize:"16px"}}>💻 24 Hour Hackthon</p>
              <p className="overlay" style={{fontSize:"16px"}}>📅 15 - 16 MARCH 2021</p>
              <p className="overlay" style={{fontSize:"16px"}}>🕗 8 AM - 8 PM</p>
           </div> 
           <a className="overlay" style={style} href="https://forms.gle/jFaZj7jPubiPWkQcA">Register</a>
           </div>
        </div>
     

      
    )
  }
}

export default intro
