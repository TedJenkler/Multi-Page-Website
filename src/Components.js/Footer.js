import logo from "../assets/shared/desktop/logo-light.png"
import facebook from "../assets/shared/desktop/icon-facebook.svg"
import youtube from "../assets/shared/desktop/icon-youtube.svg"
import twitter from "../assets/shared/desktop/icon-twitter.svg"
import pintrest from "../assets/shared/desktop/icon-pinterest.svg"
import instagram from "../assets/shared/desktop/icon-instagram.svg"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="row">
                <div className="footer">
                    <div className="hero-footer">
                        <div className="hero-footertextfield">
                            <h1>Let’s talk about your project</h1>
                            <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
                            <Link to="/contact">GET IN TOUCH</Link>
                        </div>
                    </div>
                    <div className="footer-textfield">
                        <Link to="/"><img src={logo} alt="logo" /></Link>
                        <div className="stylefooter"></div>
                        <Link to="about"><h2 id="h2-1">OUR COMPANY</h2></Link>
                        <Link to="locations"><h2 id="h2-2">LOCATIONS</h2></Link>
                        <Link to="contact"><h2 id="h2-3">CONTACT</h2></Link>
                        <div className="footertext">
                            <p>Designo Central Office</p>
                            <p>3886 Wellington Street</p>
                            <p>Toronto, Ontario M9C 3J5</p>
                        </div>
                        <div className="footertext">
                            <p>Contact Us (Central Office)</p>
                            <p>P : +1 253-863-8967</p>
                            <p>M : contact@designo.co</p>
                        </div>
                        <div className="socialicon-area">
                            <img className="socialicon" src={facebook} alt="facebook" />
                            <img className="socialicon" src={youtube} alt="youtube" />
                            <img className="socialicon" src={twitter} alt="twitter" />
                            <img className="socialicon" src={pintrest} alt="pintrest" />
                            <img className="socialicon" src={instagram} alt="instagram" />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Footer