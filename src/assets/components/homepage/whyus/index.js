import React from "react";  
import "./style.css"
import Since  from  "../../../img/since.png"
import Value  from  "../../../img/value.png"
import Terms  from  "../../../img/terms.png"
import Team  from  "../../../img/team.png"
import Global  from  "../../../img/global.png"
import Quality  from  "../../../img/quality.png"


  

function WhyUs() { 
    return(
        <div className="whyUs">
            <div className="container">
                <div className="row"> 
                    <div className="col-lg-6 offset-lg-3 text-center">
                        <div className="section-title" data-aos="zoom-out" data-aos-duration="1000">
                            <h1>WHY CHOOSE US</h1>
                        </div>
                    </div>

                    <div className="col-lg-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
                        <div className="whyUsBlk"> 
                            <img src={Since} alt="" />
                            <b>Since 2015</b>
                            A companie with 5+ years of experience in Big Data, Machine Learning and Artificial Intelligence.
                        </div> 
                    </div>
                    <div className="col-lg-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                        <div className="whyUsBlk"> 
                            <img src={Value} alt="" />
                            <b>Value for Results</b>
                            Our highly qualified team will take care of all your data needs ensuring high accuracy and quick turnaround.
                        </div> 
                    </div>
                    <div className="col-lg-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                        <div className="whyUsBlk"> 
                            <img src={Terms} alt="" />
                            <b>Terms of Cooperation</b>
                            We are always ready to offer flexible terms of cooperation and pricing that will be the most suitable for your project needs and goals.
                        </div> 
                    </div>
                    <div className="col-lg-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                        <div className="whyUsBlk"> 
                            <img src={Team} alt="" />
                            <b>Qualified Team</b>
                            To create a game-changing product, you need a strong team. We believe that it’s vitally important for success.
                        </div> 
                    </div>
                    <div className="col-lg-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                        <div className="whyUsBlk"> 
                            <img src={Global} alt="" />
                            <b>Global Experience</b>
                            A solid track record of successful Big Data and AI projects for a variety of companies over multiple industries.
                        </div> 
                    </div>
                    <div className="col-lg-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                        <div className="whyUsBlk"> 
                            <img src={Quality} alt="" />
                            <b>High-Quality Results</b>
                            Our focus is on compelling results. We build our solutions to address your unique requirements and business-specific challenges.
                        </div> 
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default WhyUs;