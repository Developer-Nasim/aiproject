import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';

import Logo  from  "../../../img/logo.png"
import HeroShape  from  "../../../img/heroShape.png"
import "./style.css"

function useStickyHeader(offset = 0) {
    const [stick, setStick] = useState(false);
    
    const handleScroll = () => {
      setStick( window.scrollY > offset );
    };
    
    useLayoutEffect(() => {
      window.addEventListener('scroll', handleScroll);
      
      return(() => {
        window.removeEventListener('scroll', handleScroll);
      });
    });
    
    return stick;
  }
function Header() {  
 

    const ref = useRef();
    let [check, setCheck] = useState(true);
    const sticky = useStickyHeader( 50 );
    const headerClasses = `${(sticky && check) ? 'sticky' : ''}`
    const { clientHeight } = ref;
     
    return(
        <div className="header"> 

            {/* header top */}
            <div className={"header-top "+headerClasses} ref={ref}> 
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <a className="logo" href="#"><img src={Logo} alt="" /></a>
                        </div>
                        <div className="col-lg-9">
                            <div className="menu">
                                <ul>
                                    <li><a href="#">HOME</a></li>
                                    <li><a href="#" className="subMenu">SERVICES</a>
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
            {/* <div className="header-bottom" style={{background: "url("+backg+")",backgroundSize: "cover",backgroundPosition: "left center"}}> */}
            <div className="header-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="header-bottom-wrp" data-aos="fade-in">
                                <h2>BUSINESS DEVELOP IN MACHINE LEARNING Reduction of Human Error </h2>
                                <p>EMPOWERING YOUR BUSINESS WITH AI TECHNOLOGY Make IA working for you robot assembly line DIGITAL ENGINEERING EXPERTISE Bring your ideas to life with us</p>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <img data-aos="fade-in" data-aos-delay="300" src={HeroShape} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;