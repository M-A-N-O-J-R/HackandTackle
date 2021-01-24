import React, { Component } from 'react'
import aos from 'aos'
import {Link} from 'react-router-dom'
import logo from '../img/logo.png'
import logo1 from '../img/environment.png'
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
                   <div className="img-class">
                       <img src={logo} alt="logo" id="event-logo" width="180px"/>
                       <img src={logo1} alt="logo" id="event-logo" width="170px"/>
                   </div>
                   <div className=" title-des">
                     <p>💻 Hack and Tackle 2.0</p>
                     <p>Environment</p>
                   </div> 
              </div> 
              </div>
              <div className="agri-text" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                  <div className="container-fluid">
                    <div className="row row-agri">
                         <div className="col-xs-12">
                             <div className="agri-main">
                             Humanity is facing a crippling problem that has been destroying its home. The environment is collapsing due to global warming, pollution, climate changes, etc. We are responsible for the environment we live in. Now, more than ever, the advent of new technology has the potential to transform environmental protection. Our next course of action is to technologically transform the field of environment protection and conservation to ensure a sustainable environment for the future.Some of the major environmental concerns India is grappling with today.
                             </div>
                             <ul className="agri-list">
                                 <li>Air pollution is one of the worst scourges to have affected India</li>
                                 <li>Rapidly depleting levels of groundwater is one of the biggest threats to food security and livelihood in the country</li>
                                 <li>Increasingly tormenting heat waves in the past years</li>
                                 <li>Unrestrained use of plastics</li>
                                 <li>Garbage Disposal and Sanitation</li>
                                 <li>Loss of Biodiversity</li>
                             </ul>
                             <div className="agri-body">We look forward to the younger generations of the nation to remain conscientious and act in the best interests of future generations by providing ideas to improve the Environment.</div>
                         </div>
                    </div>
                  </div>
              </div>
            </div>
            
        )
    }
}
 
export default agri
