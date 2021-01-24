import React, { Component } from 'react'

export class timeline extends Component {
    render() {
        return (
            <div className="timeline" id="timeline" >
                <p className="time-title" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">TIMELINE</p>
                <div className="agri-text time-cont" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
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
                                     <td className="colu-1">1</td>
                                     <td className="colu-2">Phase 1 Submission(Problem statement)</td>
                                     <td className="colu-3">11-Jan-2020</td>
                                     <td className="colu-4">28-Jan-2020</td>
                                 </tr>
                                 <tr>
                                     <td className="colu-1">2</td>
                                     <td className="colu-2">Phase 1 Screening</td>
                                     <td className="colu-3">26-Jan-2020</td>
                                     <td className="colu-4">01-Feb-2020</td>
                                 </tr>
                                 <tr>
                                     <td className="colu-1">3</td>
                                     <td className="colu-2">Declaration of Shortlisted Candidates for Phase 2</td>
                                     <td className="colu-3">02-Feb-2020</td>
                                     <td className="colu-4">04-Feb-2020</td>
                                 </tr>
                                 <tr>
                                     <td className="colu-1">4</td>
                                     <td className="colu-2">Phase 2 Registration</td>
                                     <td className="colu-3">05-Feb-2020</td>
                                     <td className="colu-4">12-Feb-2020</td>
                                 </tr>
                                 <tr>
                                     <td className="colu-1">5</td>
                                     <td className="colu-2">Hack and Tackle 2.0</td>
                                     <td className="colu-3">20-Feb-2020</td>
                                     <td className="colu-4">21-Feb-2020</td>
                                 </tr>
                             </table>
                         </div>
                    </div>
                  </div>
              </div>
            </div>
        )
    }
}

export default timeline

