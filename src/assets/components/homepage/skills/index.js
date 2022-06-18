import React from "react"; 
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
import "./style.css" 
import Progress from "../progressbar";
 
 

function Skills() {
    const value = 0.66;
    // COMPUTER VISION 81%
    // AI DATA ANALYSIS 81%
    // MACHINE LEARNING 72%
    return(
        <div className="skills">
            <div className="container">
                <div className="row"> 
                    <div className="col-lg-6 offset-lg-3 text-center">
                        <div className="section-title" data-aos="zoom-out" data-aos-duration="1000">
                            <h1>Skills</h1>
                        </div>
                    </div> 
                </div>  
                <div className="row">
                    <div className="col-lg-12">
                        <div className="all_skills">
                            <div className="skillsBar" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">  
                                <Progress strokeWidth={5} percentage={81} />
                                <span>COMPUTER VISION</span>
                            </div>
                            <div className="skillsBar" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">  
                                <Progress strokeWidth={5} percentage={81} />
                                <span>AI DATA ANALYSIS </span>
                            </div>
                            <div className="skillsBar" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">  
                                <Progress strokeWidth={5} percentage={72} />
                                <span>MACHINE LEARNING </span>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Skills;