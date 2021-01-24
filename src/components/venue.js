import React, { Component } from 'react'

export class information extends Component {
    render() {
        return (
           <div>
            <div className="o-cont">
                <div className="container-fluid">
                    <div className="row map row-item"  data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                        <div className="col-xs-12 col-item" >
                            <p className="info-title">HACK AND TACKLE 2.0</p>
                            <iframe className="gmap" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8015.910917324658!2d80.197159!3d12.751496!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbc4ea0ae50ca1aaa!2sSSN%20College%20of%20Engineering!5e1!3m2!1sen!2sin!4v1611184301868!5m2!1sen!2sin" width="600" height="450" frameborder="0" style={{border:"0px"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                       </div> 
                </div>
            </div>
         </div> 
        )
    }
}

export default information
