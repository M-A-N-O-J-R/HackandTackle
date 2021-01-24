import React, { Component } from 'react'
import aos from 'aos'
import {Link} from 'react-router-dom'
import logo from '../img/logo.png'
import logo1 from '../img/Social-welfare.png'


export class agri extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <div className="agri">
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
                     <p>Social Welfare</p>
                   </div> 
              </div> 
              </div>
              <div className="agri-text" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                  <div className="container-fluid">
                    <div className="row row-agri">
                         <div className="col-xs-12">
                             <div className="agri-main">
                             With the rapid advancement of technology, it is important to use its power in ways that benefit the society. Stoke a new digital revolution to drive intelligent choices for a better nation. We need to battle the many evils of the society, be it corruption, homelessness, unemployment or child labour. The following problems are prevalent in the society</div>
                             <ul className="agri-list">
                                 <li>Poverty</li>
                                 <li>Unemployment</li>
                                 <li>Medical care to senior citizens</li>
                                 <li>Women and child developmen</li>
                                 <li>Inefficient training to farmers</li>
                                 <li>Mismatch of demand and supply</li>
                                 <li>Disaster management</li>
                                
                             </ul>
                             <div className="agri-body">Can your idea create state-of-the-art devices to create, improve or manage workable solutions that address social issues?

Suggest your ideas to overcome these problems.</div>
                         </div>
                    </div>
                  </div>
              </div>
            </div>
            
        )
    }
}
 
export default agri
