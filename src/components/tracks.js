import React, { Component } from 'react'
import {Link}from 'react-router-dom'
const style={
    width:"90px",
    height:"50px",
    color:"rgb(240,235,235)",
    backgroundColor:"rgb(3,3,3,0.8)",
    textDecoration:"none",
    padding:"10px",
    borderRadius:"5px",
    
}

export class tracks extends Component {
    render() {
        return (
        <div >
            <div className="track" id="track" >
                <p className="info-title info-track" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">TRACKS</p>
                <div className="container-fluid">
                  <div className="row row-track">
                     <div className="col-xs-12  col-sm-5 col-md-4 col-track col-lg-3" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                         <div className="track-img-1 track-img">
                            
                         </div>
                        <div className="link"> 
                         <Link to="/agri" style={style}>More Info</Link>
                        </div>
                     </div>
                     <div className="col-xs-12  col-sm-5 col-md-4 col-track col-lg-3" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true" >
                         <div className="track-img-2 track-img">
                            
                         </div>
                        <div className="link"> 
                         <a href="/safety" style={style}>More Info</a>
                        </div>
                     </div>
                     <div className="col-xs-12  col-sm-5 col-md-4 col-track col-lg-3" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true" >
                         <div className="track-img-3 track-img">
                            
                         </div>
                        <div className="link"> 
                         <Link to="/environment" style={style}>More Info</Link>
                        </div>
                     </div>
                     <div className="col-xs-12  col-sm-5 col-md-4 col-track col-lg-3" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                         <div className="track-img-4 track-img">
                            
                         </div>
                        <div className="link"> 
                         <Link to="/health" style={style}>More Info</Link>
                        </div>
                     </div>
                     <div className="col-xs-12  col-sm-5 col-md-4 col-track col-lg-3" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true" >
                         <div className="track-img-5 track-img">
                            
                         </div>
                        <div className="link"> 
                         <Link to="/social" style={style}>More Info</Link>
                        </div>
                     </div>
                    
                  </div>
                  <p style={{color:"red",}}>NOTE: If your solution doesn't fit in the above track, fear not. You can apply with the open track expressing any suitable idea or concept that solves a real - world problem.</p>
                </div>
            </div>
        </div>  
        )
    }
}

export default tracks
