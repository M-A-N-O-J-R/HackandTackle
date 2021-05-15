import React, { Component } from 'react'

export class timeline extends Component {
    render() {
        return (
            <div className="timeline" id="timeline" >
                <p className="time-title" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">TIMELINE</p>
                <div className="agri-text time-cont" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                  <div className="container-fluid">
                    <div className="row t-row">
                         <div className="col-xs-12 col-lg-12 col-md-12 timeline-table">
                             <table>
                               <thead>
                                 <tr className="rowu-1">
                                     <th className="colu-1">S.NO</th>
                                     <th className="colu-2">Activity</th>
                                     <th className="colu-3">Start Date</th>
                                     <th className="colu-4">End Date</th>
                                 </tr>
                                </thead>
                                <tbody>
                                 <tr>
                                     <td className="colu-1">1</td>
                                     <td className="colu-2">Phase 1 Submission(Problem statement)</td>
                                     <td className="colu-3">20-JAN-2021</td>
                                     <td className="colu-4">20-FEB-2021</td>
                                 </tr>
                                 </tbody>
                                 <tbody>
                                 <tr>
                                     <td className="colu-1">2</td>
                                     <td className="colu-2">Phase 1 Screening</td>
                                     <td className="colu-3">21-FEB-2021</td>
                                     <td className="colu-4">26-FEB-2021</td>
                                 </tr>
                                 </tbody>
                                 <tbody>
                                 <tr>
                                     <td className="colu-1">3</td>
                                     <td className="colu-2">Declaration of Shortlisted Candidates for Phase 2</td>
                                     <td className="colu-3">27-FEB-2021</td>
                                     <td className="colu-4">28-FEB-2021</td>
                                 </tr>
                                 </tbody>
                                 <tbody>
                                 <tr>
                                     <td className="colu-1">4</td>
                                     <td className="colu-2">Phase 2 Registration</td>
                                     <td className="colu-3">01-MAR-2021</td>
                                     <td className="colu-4">05-MAR-2021</td>
                                 </tr>
                                 </tbody>
                                 <tfoot>
                                 <tr>
                                     <td className="colu-1">5</td>
                                     <td className="colu-2">Hack and Tackle 3.0</td>
                                     <td className="colu-3">15-MAR-2021</td>
                                     <td className="colu-4">16-MAR-2021</td>
                                 </tr>
                                 </tfoot>
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

