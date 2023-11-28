import phoneframe from "../../assets/home/desktop/image-hero-phone.png"
import passionate from "../../assets/home/desktop/illustration-passionate.svg"
import resourceful from "../../assets/home/desktop/illustration-resourceful.svg"
import friendly from "../../assets/home/desktop/illustration-friendly.svg"

const HomePage = ({ hamburger }) => {
    return (
        <div className={hamburger === false ? "row" : "row blurry"}>
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
                        <div>
                            <img src={passionate} alt="passionate" />
                        </div>
                        <h2>Passionate</h2>
                        <p>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
                    </div>
                    <div className="resourceful-card">
                        <div>
                            <img src={resourceful} alt="resourceful" />
                        </div>
                        <h2>Resourceful</h2>
                        <p>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
                    </div>
                    <div className="friendly-card">
                        <div>
                            <img src={friendly} alt="friendly" />
                        </div>
                        <h2>Friendly</h2>
                        <p>We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage