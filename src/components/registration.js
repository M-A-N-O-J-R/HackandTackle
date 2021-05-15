import React, { Component } from 'react'
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
const style1={
    fontSize:"25px",
}
export class agri extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <div className="agri" id="start">
             <div className="agri-intro">
              <div className="intro-text" data-aos="fade-down" data-aos-delay="150" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">        
              <p>SSN College of Engineering</p>
              <p id="dpt">Information Technology</p>
              <p style={{fontSize:"16px"}}>KALAVAKKAM-603110</p>
              </div> 
              <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                   <div className="intro-logo-div">
                       <img src={logo2} alt="logo" id="event-img" width="170px"/>
                       <img src={logo} alt="logo" id="event-logo" width="170px"/>    
                   </div> 
                   <div className=" title-des">
                     <p>WILD CARD REGISTRATION</p>
                   </div> 
              </div> 
              </div>
              <div className="agri-text" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                  <div className="container-fluid">
                    <div className="row row-agri">
                         <div className="col-xs-12">
                             <div className="agri-main">
                             Given up already? We always want you to deliver your best! Here's another chance to prove yourself and earn a seat among the competitors of Phase - II. Given below is a set of 3 problem statements. Send the solution for any of the three problems and earn a chance as "WILD CARD" entry for Phase - II.
                             </div>
                             <div style={{textAlign: "center",margin:"25px"}}>
                             <Link style={style} to="/register">Register</Link>
                             </div>
                             <ol className="agri-list">
                               <p style={style1}>Hardware & Software</p>
                                 <li>A bin that consists of materials which is to be weighed on regular basis, and the measured value must be sent to a remote operator for processing.</li>
                                 <li>It should also have level indicators for the processing.</li>
                                 <li>Kidnapping</li>
                                 <li>Indication should be from the bin once reaches the maximum threshold values in both 1&2 cases.</li>
                                 <li>The bin should have tracking facility</li>
                             </ol>
                             <ol className="agri-list">
                               <p style={style1}>Software:</p>
                                 <li>In our application there are three parties involved a) Cercle Team, b) Client (Bin location), c) Vendor (the recycler)</li>
                                 <li>A value is given by the Client (b), the value should be processed as a request and should be sent to the Vendor (c). The request should be sent to Cercleteam(a) also</li>
                                 <li>The Vendor should be selected on some parameters from a list of vendors.</li>
                                 <li>
                                 The request can be accepted or declined by the vendor
                                 <ul>
                                     <li>If the vendor accepts the request the following process should be followed.
                                        <ul>
                                            <li>Vendor should acknowledge pickup.</li>
                                            <li>Vendor must provide the Transportation details</li>
                                            <li>Vendor should acknowledge when received at the Operations plant.</li>
                                        </ul>
                                     </li>
                                     <li>If the vendor declines, next vendor in the list should be given request and I&II process continues.</li>
                                 </ul>
                                 </li>
                             </ol>
                             <ol className="agri-list">
                               <p style={style1}>Real Time Tracking:</p>
                                 <li>The raised request to the vendor is sent a to a transportation handler (truck driver).</li>
                                 <li>Person should schedule the pickup, in the application.</li>
                                 <li>There should be alert for the scheduled date and time for the in the same application and the vendor application.</li>
                                 <li>Once when trip has been confirmed, the route should be mapped from the driver location to bin location.</li>
                                 <li>Vendor should be able track the driver on the trip.</li>
                                 <li>The client should also be able to track the driver</li>
                             </ol>
                         </div>
                    </div>
                  </div>
              </div>
            </div>
            
        )
    }
}
 
export default agri
