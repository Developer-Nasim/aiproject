import React from "react"; 

import AiImg  from  "../../../img/aiSoftware.png"
import FaceRecog  from  "../../../img/faceRecog.png"
import ImgRecog  from  "../../../img/imgRecog.png"
import "./style.css"


function ServicesBlk({img,heading,content}) {
    return(
        <div className="srv_blk">
            <img src={img} alt="" />
            <h4>{heading}</h4>
            <p>{content}</p>
            <a href="#">Read More</a>
        </div> 
    )
}




function Services() {
    return(
        <div className="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section_title">
                            <h1>Services</h1>
                        </div>
                    </div> 
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <ServicesBlk 
                            img={AiImg} 
                            heading="AI Software Development" 
                            content="Transform Your Business With Custom-Built AI Software"
                        /> 
                    </div>
                    <div className="col-lg-4"> 
                        <ServicesBlk 
                            img={FaceRecog} 
                            heading="Image Recognition" 
                            content="Robust custom solutions to serve your business needs"
                        /> 
                    </div>
                    <div className="col-lg-4"> 
                        <ServicesBlk 
                            img={ImgRecog} 
                            heading="Face Recognition" 
                            content="We are ready to design and build your facial recognition system based on intelligent algorithms"
                        />  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;