import React from "react"; 
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
import "./style.css"

 
 

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
                        <div className="section-title">
                            <h1>Skills</h1>
                        </div>
                    </div> 
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="skillsBar"> 
                            <div className="prg">
                                {/* <CircularProgressbar value={.81} strokeWidth={5} maxValue={1} text={`${.81 * 100}%`} />  */}
                            </div>
                            <span>COMPUTER VISION</span>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="skillsBar"> 
                            <div className="prg">
                                {/* <CircularProgressbar value={.81} strokeWidth={5} maxValue={1} text={`${.81 * 100}%`} />  */}
                            </div>
                            <span>AI DATA ANALYSIS </span>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="skillsBar"> 
                            <div className="prg">
                                {/* <CircularProgressbar value={.72} strokeWidth={5} maxValue={1} text={`${.72 * 100}%`} /> */}
                            </div>
                            <span>MACHINE LEARNING </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;