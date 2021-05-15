import React, { Component } from 'react'
import logo from '../img/ssn1.png'
import logo1 from '../img/ieeel.png'
import logo2 from '../img/logo.png'
import * as AiIcons from 'react-icons/ai';
export class contact extends Component {
    render() {
        return (
           <div id="contact"  style={{backgroundColor:"rgb(50,50,50)"}}>
               <div className="container-fluid">
                   <div className="row row1" >
                       <div className="col-lg-3 col-md-3 col-sm-3 logo-div col-6" >
                         <img src={logo} alt="logo" id="ssn-img"  width="100px"/>
                         <img src={logo1} alt="logo" id="ieee-img"  width="100px"/>
                       </div>
                       <div className="col-lg-3 col-md-4 col-sm-4 col-6 event-div" >
                         <p>Hack and Tackle 3.0</p>
                         <img src={logo2} alt="logo" id="hack"  width="90px"/>
                       </div>
                   </div>
                   <div className="row row2" >
                       <div className="col-lg-3 col-md-4 col-sm-4  col-6 add-div" >
                         SSN College of Engineering<br></br>
                         Old Mahabalipuram Road<br></br>
                         Kalavakkam - 603 110<br></br>
                         Tamil Nadu, India<br></br>
                       </div>
                       <div className="col-lg-3 col-md-4 col-sm-4 col-6 number-div" >
                       <p>Dr. T. Sree Sharmila<br></br>
                       +91 - 9940582630</p>
                       <p>Dr. V. Thanikachalam<br></br>
                       +91-9962453600</p>
                        <p>Ms. J. K. Josephine Julina<br></br>
                        +91 - 9962580503</p>
                       </div>
                       <div className="col-lg-3 col-md-3 col-sm-3 col-6 icon-div" >
                        <a href="https://www.instagram.com/ieee_ssn/" id="insta"><AiIcons.AiOutlineInstagram /></a>
                        <a href="https://www.facebook.com/ssnieee/" id="face"><AiIcons.AiFillFacebook /></a>
                        <a href="mailto:hackathon.ssnieee@gmail.com" id="mail"><AiIcons.AiFillMail /></a>
                        <a href="" id="what"><AiIcons.AiOutlineWhatsApp /></a>
                       </div>
                   </div>
                   <div className="info-div">
                      <p><a href="http://manoj-ravichandran.surge.sh/" id="create">Created by Manoj ravichandran😊</a></p>
                       <p>Copyrights  2021 All Rights Reserved By SSNHackandTackle</p>
                   </div>
               </div>
           </div>
        )
    }
}

export default contact
