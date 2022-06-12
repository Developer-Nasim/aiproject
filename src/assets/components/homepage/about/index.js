import React from "react"; 

import aboutImg  from  "../../../img/about.jpg" 
import "./style.css"


function AboutBLk({numnber,heading,content}) {
    return(
        <div className="aboutBlk">
            <h1>{numnber}</h1>
            <h4>{heading}</h4>
            <p>{content}</p>
        </div>
    )
}




function About() {
    return(
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="contents-img">
                            <img src={aboutImg} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="contents-wrp">
                            <span>ABOUT US</span>
                            <h3>WE WORK WITH YOU TO ADDRESS</h3>
                            <p>We help you extract valuable business insights from data to better understand audience, forecast demand, reduce risks, prevent cost overruns, and much more.</p>
                            <p>If you are looking for a data science consultancy or a reliable technology partner to create innovative, market-leading solutions, we are here to help!</p>
                            <div className="more-about">
                                <AboutBLk  
                                    numnber="6"
                                    heading="YEARS OF EXPERIENCE"
                                    content="Years of applied experience in data science, AI consulting and development."
                                /> 
                                <AboutBLk  
                                    numnber="37"
                                    heading="PROJECT DONE TOGETHER"
                                    content="Implemented projects EMEA with different sector key customers."
                                />  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;