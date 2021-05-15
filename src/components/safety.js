import React, { Component } from 'react'
import logo from '../img/logo.png'
import logo1 from '../img/women-safety.png'
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
                     <img src={logo} alt="logo" id="event-logo" width="200px"/>
                       <img src={logo1} alt="logo" className="track-logo" width="170px" />
                   </div>
                   <div className=" title-des">
                     <p>💻 Hack and Tackle 2.0</p>
                     <p>👧Women Safety</p>
                   </div> 
              </div> 
              </div>
              <div className="agri-text" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                  <div className="container-fluid">
                    <div className="row row-agri">
                         <div className="col-xs-12">
                             <div className="agri-main">
                             Safety is a basic right that the women of today are being denied. Women's safety has become an increasingly alarming issue throughout the world. Removing the barriers of an unsafe environment allows women fulfil their potential as individuals and as contributors to work, communities and economies. Some of the most common crimes against women are given below:
                             </div>
                             <ul className="agri-list">
                                 <li>Harassment at workplace</li>
                                 <li>Dowry deaths</li>
                                 <li>Kidnapping</li>
                                 <li>Abduction leading to rape</li>
                                 <li>Family problems</li>
                                 <li>Assault on a woman</li>
                                 <li>Trafficking</li>
                                 <li>Safe social media for women</li>
                             </ul>
                             <div className="agri-body">Can your idea supports safe guarding women and offers a helping hand in resolving harassment issues and help in achieving a sustainable society?</div>
                         </div>
                    </div>
                  </div>
              </div>
            </div>
            
        )
    }
}
 
export default agri
