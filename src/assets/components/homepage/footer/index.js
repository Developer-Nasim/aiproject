import React from "react";  
import "./style.css"

  

function Footer() { 
    return(
        <div className="footer">
            <div className="container">
                <div className="row">  
                    <div className="col-lg-12">
                        <div className="contact-details">
                            74 Bd Zerktouni Etage 5, Maarif Casablanca <br />
                            +212 767 174 360<br />
                            info@neurones-lab.com
                        </div>
                        <div className="footer-wrp">
                            <p>© Neurones Labs 2021 – All Rights Reserved</p>
                            <ul>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Term of Use  </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;