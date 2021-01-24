import React, { Component } from 'react'
import aos from 'aos'
import {Link} from 'react-router-dom'
import logo from '../img/logo.png'
import logo1 from '../img/HEALTH-CARE.png'


export class agri extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <div className="agri">
             <div className="agri-intro">
              <div className="intro-text" data-aos="fade-down" data-aos-delay="150" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true" >        
              <p>SSN College of Engineering</p>
              <p id="dpt">Information Technology</p>
              <p style={{fontSize:"16px"}}>KALAVAKKAM-603110</p>
              </div> 
              <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                   <div className="img-class">
                       <img src={logo} alt="logo" id="event-logo" width="180px"/>
                       <img src={logo1} alt="logo" id="event-logo" width="150px"/>
                   </div>
                   <div className=" title-des">
                     <p>💻 Hack and Tackle 2.0</p>
                     <p>❤️Health Care</p>
                   </div> 
              </div> 
              </div>
              <div className="agri-text" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                  <div className="container-fluid">
                    <div className="row row-agri">
                         <div className="col-xs-12">
                             <div className="agri-main">
                             From small innovations like adhesive bandages, to larger, more complex technologies like MRI machines and artificial organs, technology has undoubtedly made an incredible impact on medicine and health care. Better health is central to human happiness and well-being. We are in constant need for advancements in the medical technology field. The following are the major problems of health services:
                             </div>
                             <ul className="agri-list">
                                 <li>Lack of remote access to medical care of Rural Population</li>
                                 <li>Shortage of trained personnel</li>
                                 <li>Unsafe biomedical disposal practices</li>
                                 <li>Inefficient management of voluminious patient data</li>
                                 <li>Inefficient training to farmers</li>
                                 <li>Expensive and complex equipment</li>
                             </ul>
                             <div className="agri-body">
                             Suggest your ideas to overcome these problems.
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
