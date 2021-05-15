import React, { Component } from 'react'
import logo from '../img/logo.png'
import logo2 from '../img/ieeesp.png'


    class agri extends Component {
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
                 <p>💻 Hack and Tackle 2.0</p>
                 
               </div> 
          </div> 
          </div>
          <div className="timeline" id="timeline" >
                <p className="time-title" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">SHORTLISTED TEAMS</p>
                <div className="agri-text " data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                  <div className="container-fluid">
                    <div className="row t-row">
                         <div className="col-xs-12 col-lg-12 col-md-12">
                             <table>
                                 <tr>
                                     <th className="colu-1">S.NO</th>
                                     <th className="colu-2">Activity</th>
                                     <th className="colu-3">Start Date</th>
                                     <th className="colu-4">End Date</th>
                                 </tr>
                                 <tr>
                                     <td className="colu-1">-</td>
                                     <td className="colu-2">-</td>
                                     <td className="colu-3">-</td>
                                     <td className="colu-4">-</td>
                                 </tr>
                                 
                             </table>
                         </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
        
    )
}
}

export default agri

