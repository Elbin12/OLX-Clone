import React from "react";
import './Footer.css'

function Footer(){
    return(
        <div className="footer">
            <div className="first">
                <section>
                    <h5>POPULAR LOCATIONS</h5>
                    <ul>
                        <li>Kolkata</li>
                        <li>Mumbai</li>
                        <li>Chennai</li>
                        <li>Pune</li>
                    </ul>
                </section>
                <section>
                    <h5>TRENDING LOCATIONS</h5>
                    <ul>
                        <li>Bhubaneshwar</li>
                        <li>Hyderabad</li>
                        <li>Chandigarh</li>
                        <li>Nashik</li>
                    </ul>
                </section>
                <section>
                    <h5>ABOUT US</h5>
                    <ul>
                        <li>Contact Us</li>
                    </ul>
                </section>
                <section>
                    <h5>OLX</h5>
                    <ul>
                        <li>Blog</li>
                        <li>Help</li>
                        <li>Sitemap</li>
                        <li>Legal & Privacy information</li>
                        <li>Vulnerability Disclosure Program</li>
                    </ul>
                </section>
                <section>
                    <h5>FOLLOW US</h5>
                    <div className="logos">
                        
                    </div>
                </section>
            </div>
            <div className="second">
                <div className="CTTG">
                    <img src="https://statics.olx.in/external/base/img/cartrade/logo/cartrade_tech.svg?v=1" alt="" />
                </div>
                <div className="olx">
                    <img src="https://statics.olx.in/external/base/img/cartrade/logo/olx.svg?v=1" alt="" />
                </div>
                <div className="links">
                <a href="https://www.carwale.com" target="_blank">
                    <div className="carwale">
                        <img src="https://statics.olx.in/external/base/img/cartrade/logo/carwale.svg?v=1" alt="" />
                    </div>
                </a>
                <a href="https://www.bikewale.com" target="_blank">
                    <div className="bikewale">
                        <img src="https://statics.olx.in/external/base/img/cartrade/logo/bikewale.svg?v=1" alt="" />
                    </div>
                </a>
                <a href="https://www.cartrade.com" target="_blank">
                    <div className="Ctrade">
                        <img src="https://statics.olx.in/external/base/img/cartrade/logo/cartrade.svg?v=1" alt="" />
                    </div>
                </a>
                <a href="https://www.mobilityoutlook.com" target="_blank">
                    <div className="MO">
                        <img src="	https://statics.olx.in/external/base/img/cartrade/logo/mobility.svg?v=1" alt="" />
                    </div>
                </a>
                </div>
            </div>
        </div>
    )
}

export default Footer