import phoneframe from "../../assets/home/desktop/image-hero-phone.png"
import passionate from "../../assets/home/desktop/illustration-passionate.svg"
import resourceful from "../../assets/home/desktop/illustration-resourceful.svg"
import friendly from "../../assets/home/desktop/illustration-friendly.svg"
import logo from "../../assets/shared/desktop/logo-light.png"
import facebook from "../../assets/shared/desktop/icon-facebook.svg"


const HomePage = () => {
    return (
        <div className="row">
            <div className="hero">
                <div className="textfield-hero">
                    <h1>Award-winning custom designs and digital branding solutions</h1>
                    <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
                    <button type="button" className="btn hero-btn">Learn more</button>
                </div>
                <div className="phoneimg-area">
                    <img className="phoneimg-hero" src={phoneframe} alt="phoneframe" />
                </div>
            </div>
            <div className="row">
                <div className="project-btn-area">
                    <button type="button" className="btn project-btn project-btn-first">
                        <h1>WEB DESIGN</h1>
                        <h2>VIEW PROJECTS</h2>
                    </button>
                    <button type="button" className="btn project-btn project-btn-second">
                        <h1>App Design</h1>
                        <h2>VIEW PROJECTS</h2>
                    </button>
                    <button type="button" className="btn project-btn project-btn-third">
                        <h1>Graphic Design</h1>
                        <h2>VIEW PROJECTS</h2>
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="keyword-area">
                    <div className="passionate-card">
                        <img src={passionate} alt="passionate" />
                        <h2>Passionate</h2>
                        <p>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
                    </div>
                    <div className="resourceful-card">
                        <img src={resourceful} alt="resourceful" />
                        <h2>Resourceful</h2>
                        <p>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
                    </div>
                    <div className="friendly-card">
                        <img src={friendly} alt="friendly" />
                        <h2>Friendly</h2>
                        <p>We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="footer">
                    <div className="footer-textfield">
                        <img src={logo} alt="logo" />
                        <h2 id="h2-1">OUR COMPANY</h2>
                        <h2 id="h2-2">LOCATIONS</h2>
                        <h2 id="h2-3">CONTACT</h2>
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
                            <img src={facebook} alt="facebook" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage