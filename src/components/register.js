import React, { Component } from 'react'
import {Link} from 'react-router-dom'
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
export class register extends Component {
    render() {
        return (
            <div className="regis" id="register" style={{marginTop:"-100px"}}>
                <div className="intro-class" >
                <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                <div className="intro-text" >        
                    <p>REGISTER</p>
                    <p  className="text-regi">Clock is ticking. Register soon for Phase - II.</p>
                
                </div>
                <Link style={style} to="/register">Register</Link>
                 <br></br>
                 <br></br>
                 <p className="text-regi">Wildcard Registrations open</p>
              </div>
            </div>
            </div>
        )
    }
}

export default register
