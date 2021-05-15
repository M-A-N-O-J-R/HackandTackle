import React, { Component } from 'react'

 class faq extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            details:[
                {
                  id:1,
                  question:"How will the event be conducted?",
                  answer:"Hack and Tackle 3.0 will take place in two phases. In phase 1, the participants will upload the solution of the problem statement along with the registration form. The ideas and the solutions can be based on any of the aforementioned tracks. The plausible solutions will be judged based on the scope, novelty, feasibility, technology, utility and social relevance. Then, the best proposals will be chosen for phase 2.",
                  alignment:"justify"
                },
                {
                    id:2,
                    question:"What is the team size requirement for registration?",
                    answer:"A maximum of 3 students can participate.",
                    alignment:"none"

                },
                {
                    id:3,
                    question:"How is this event beneficial to students?",
                    answer:"Hack and Tackle 3.0 will help the students to develop critical thinking and team playing. It will also help students to look into real world problems and learn more about implementing ideas in real life. In addition, they can network with industry delegates.",
                    alignment:"justify"
                },
                {
                    id:4,
                    question:"Do you have more questions?",
                    answer:"Mail us to : hackathon.ssnieee@gmail.com",
                    alignment:"none"
                }
            ]
             
        }
    }
    
    
    render() {
        let list=<div>EMPTY</div>
        list=this.state.details.map(detail=>{
           return(
            <div className="col-xs-3 col-sm-5 col-md-4 col-lg-3 col-faq" key={detail.id} data-aos="flip-right" data-aos-delay="150" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
            <p style={{fontSize:"15px"}}>{detail.question}</p>
            <p style={{textAlign:detail.alignment}}>{detail.answer}</p>
            </div>
           )
        })
        return (
           <div id="faq" style={{backgroundColor:"rgb(50,50,50)"}}> 
            <div className="faq-container">
            <div className="container-fluid">
            
                <div className="row row-faq">
                <p className="info-title" id="faq-title">FAQs</p>
                {list}
                </div>
            </div>
            </div>
            </div>  
        )
    }
}

export default faq



{/* <div className="col-xs-3 col-sm-5 col-md-4 col-lg-3 col-faq">
<p>How will the event be conducted?</p>
The hackathon will take place in two phases. In phase 1, the participants will upload the solution of the problem statement along with the registration form. The ideas and the solutions can be based on any of the aforementioned tracks. The plausible solutions will be judged based on the scope, novelty, feasibility, technology, utility and social relevance. Then, the best proposals will be chosen for phase 2.
</div>
<div className="col-xs-3 col-sm-5 col-md-4 col-lg-3 col-faq">
<p>Will the participants be provided accomodation and food during Phase II?</p>
Yes, the participants will be provided accommodation and food.
Accomodation charges : INR 175 per day (Shared room)
</div>
<div className="col-xs-3 col-sm-5 col-md-4 col-lg-3 col-faq">
<p>What is the team size requirement for registraton?</p>
A team should have 4 people to participate.
</div>
<div className="col-xs-3 col-sm-5 col-md-4 col-lg-3 col-faq">
<p>What are the things that have be brought?</p>
College ID card, required software and hardware devices, chargers, extension cables, bedding and any other additional gear, if necessary. No pre-assembled protoypes and modules are permitted in the event.
</div>
<div className="col-xs-3 col-sm-5 col-md-4 col-lg-3 col-faq">
<p>What are the things that have be brought?</p>
College ID card, required software and hardware devices, chargers, extension cables, bedding and any other additional gear, if necessary. No pre-assembled protoypes and modules are permitted in the event.
</div> */}