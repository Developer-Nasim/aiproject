import React from "react"; 

import Logo  from  "../../../img/logo.png"
import HeroBack  from  "../../../img/hero.jpg"
import "./style.css"

function Header() {
    return(
        <div className="header">
            {/* header top */}
            <div className="header-top"> 
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <a className="logo" href="#"><img src={Logo} alt="" /></a>
                        </div>
                        <div className="col-lg-9">
                            <div className="menu">
                                <ul>
                                    <li><a href="#">HOME</a></li>
                                    <li><a href="#">SERVICES</a>
                                        <ul>
                                            <li><a href="#">Computer Vision</a></li>
                                            <li><a href="#">Face Recognition</a></li>
                                            <li><a href="#">Visual Search</a></li>
                                            <li><a href="#">AI Software Development</a></li>
                                            <li><a href="#">Machine Learning</a></li>
                                            <li><a href="#">Image Recognition</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="">CAREERS</a></li>
                                    <li><a href="">CONTACT US</a></li>
                                    <li><a className="btn" href="">REQUEST MEETING</a></li>
                                </ul> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Header bottom */}
            <div className="header-bottom" style={{background: "url("+HeroBack+")",backgroundSize: "cover",backgroundPosition: "left center"}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="header-bottom-wrp">
                                <h1>Artificial Intelligence for Business Applications</h1>
                                <p>Ipsum amet aptent molestie finibus euismod sociosqu hac duis curae in</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;