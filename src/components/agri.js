import React, { Component } from 'react'
import aos from 'aos'
import {Link} from 'react-router-dom'
import logo from '../img/logo.png'
import logo1 from '../img/Agriculture.png'


export class agri extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <div className="agri">
             <div className="agri-intro">
              <div className="intro-text" data-aos="fade-down" data-aos-delay="150" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true" >        
              <p id="">SSN College of Engineering</p>
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
                     <p>🌾Agriculture</p>
                   </div> 
              </div> 
              </div>
              <div className="agri-text" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                  <div className="container-fluid">
                    <div className="row row-agri">
                         <div className="col-xs-12">
                             <div className="agri-main">
                             Agriculture is the 
                             backbone of the Indian economy. Though it is the main source of livelihood for a majority of the Indian population, it still stands as a technologically backward sector. We are currently living in a world of technology which affects every aspect of our life. Technological advances coupled with new financial and environmental policies are the need of the hour. Boosting rural growth and agricultural productivity are the main goals here. Some of the major contributing factors for decline in healthy yield are given below:
                             </div>
                             <ul className="agri-list">
                                 <li>Poor quality of soil</li>
                                 <li>Usage of non-permissible fertilizers</li>
                                 <li>Improper rainfall during cultivation of seasonal crops</li>
                                 <li>Non-identification of diseased plants at an early stage</li>
                                 <li>Inefficient training to farmers</li>
                                 <li>Mismatch of demand and supply</li>
                                 <li>Strategies used in transportation</li>
                                
                             </ul>
                             <div className="agri-body">
                             Can your idea maximize returns and lower risks in agriculture, or perhaps find a better balance between production and consumption?
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
