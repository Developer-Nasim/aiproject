import React from "react"; 
import FrmImg  from  "../../../img/framework.svg"
 
import "./style.css"
 

function Framework() {
    return(
        <div className="Framwork">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="contents-img" data-aos="zoom-out">
                            <img src={FrmImg} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="contents-wrp" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="300">
                            <span>FRAMEWORK</span>
                            <h3>WE ARE EXPERT TEAMS FOR ALL CONSULTANT WORK PLATFROM.</h3>
                            <p>We are not just a team of IT developers, we are a team of makers, thinkers, explorers and theatre singers.</p>
                            <p>At Neurones Labs we are building big data analytics solutions in the cloud by leveraging cutting edge approaches in Data Science such as Deep Learning, Probabilistic Machine Learning, etc and Big Data/NoSQL technologies such as Hadoop, Spark, Cassandra etc.</p>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Framework;