import React from "react";  
import "./style.css"

  

function WhyUs() { 
    return(
        <div className="whyUs">
            <div className="container">
                <div className="row"> 
                <div className="col-lg-6 offset-lg-3 text-center">
                    <div className="section-title">
                        <h1>WHY CHOOSE US</h1>
                    </div>
                </div>
                    <div className="col-lg-12">
                        <div className="why-chose-use"> 
                            <ul>
                                <li>
                                    <b>Since 2015</b>
                                    A companie with 5+ years of experience in Big Data, Machine Learning and Artificial Intelligence.
                                </li>
                                <li>
                                    <b>Value for Results</b>
                                    Our highly qualified team will take care of all your data needs ensuring high accuracy and quick turnaround.
                                </li>
                                <li>
                                    <b>Terms of Cooperation</b>
                                    We are always ready to offer flexible terms of cooperation and pricing that will be the most suitable for your project needs and goals.
                                </li>
                                <li>
                                    <b>Qualified Team</b>
                                    To create a game-changing product, you need a strong team. We believe that it’s vitally important for success.
                                </li>
                                <li>
                                    <b>Global Experience</b>
                                    A solid track record of successful Big Data and AI projects for a variety of companies over multiple industries.
                                </li>
                                <li>
                                    <b>High-Quality Results</b>
                                    Our focus is on compelling results. We build our solutions to address your unique requirements and business-specific challenges.
                                </li> 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs;