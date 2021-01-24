import React, { Component } from 'react'

const style = {
    backgroundColor:"rgb(50,49,49)"
}

export class department extends Component {
    render() {
        return (
           <div style={style} id="about">
            <div className="dept-info">
             <div className="container-fluid">
                <div className="row"  data-aos="fade-left" data-aos-delay="150" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                  <div className="col-md-6 col-xs-12 img-cont img-cont-1">   
                  </div>
                  <div className="text-cont col-md-6  col-xs-12 item-text item-text-1">
                    <p className="dpt-title">SSN College of Engineering</p>
                    Founded by Dr. Shiv Nadar, Chairman, HCL Technologies, SSN Institutions stands out as a premier centre of higher learning with a mission to pursue excellence in education and research. The institution offers students a distinctive combination of the finest Undergraduate, Postgraduate and Research programs. The diverse student fraternity of SSN enjoy world class facilities and a residential campus set on a sprawling 250 acres of sylvan surroundings
                    </div>
                </div>
                

                <div className="row" data-aos="fade-right" data-aos-delay="150" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                  <div className="col-md-6 col-xs-12 img-cont img-cont-2">   
                  </div>
                  <div className="text-cont col-md-6 col-xs-12 item-text item-text-2">
                    <p className="dpt-title">Department of Information Technology</p>
                    The Department of Information Technology was established in the year 1999. Our mission is to provide quality education to the students and impart IT excellence in them. Apart from making them good technocrats, we also provide individual attention to make them good citizens of our nation to serve the industry and society constructively
                    </div>
                </div>


                <div className="row"  data-aos="fade-left" data-aos-delay="150" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                  <div className="col-md-6 col-xs-12 img-cont img-cont-3">   
                  </div>
                  <div className="text-cont col-md-6 col-xs-12 item-text item-text-3">
                    <p className="dpt-title">SSN IEEE Student Branch</p>
                    Founded by Dr. Shiv Nadar, Chairman, HCL Technologies, SSN Institutions stands out as a premier centre of higher learning with a mission to pursue excellence in education and research. The institution offers students a distinctive combination of the finest Undergraduate, Postgraduate and Research programs. The diverse student fraternity of SSN enjoy world class facilities and a residential campus set on a sprawling 250 acres of sylvan surroundings
                    </div>
                </div>


                <div className="row"  data-aos="fade-right" data-aos-delay="150" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                  <div className="col-md-6 col-xs-12 img-cont img-cont-4">   
                  </div>
                  <div className="text-cont col-md-6 col-xs-12 item-text item-text-4">
                    <p className="dpt-title">IEEE COMPUTER SOCIETY</p>
                    IEEE Computer Society is a professional society of the Institute of Electrical and Electronics Engineers (IEEE). Its purpose and scope is "to advance the theory, practice, and application of computer and information processing science and technology" and the professional standing of its members. It is the largest of 39 technical societies, supporting more than 200 chapters worldwide, organized under the IEEE Technical Activities Board.
                    </div>
                </div>


                
                </div>
            </div>
        </div>  
        )
    }
}

export default department
