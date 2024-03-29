import phoneframe from "../../assets/home/desktop/image-hero-phone.png"
import passionate from "../../assets/home/desktop/illustration-passionate.svg"
import resourceful from "../../assets/home/desktop/illustration-resourceful.svg"
import friendly from "../../assets/home/desktop/illustration-friendly.svg"
import { Link } from "react-router-dom"
import PageLinkButton from "../PageLinkButton"
const HomePage = ({hamburger}) => {
    return (
        <div className={hamburger === false ? "row" : "row blurry"}>
            <div className="pt-20 px-6 bg-peach bg-hero-mobile-oval bg-no-repeat bg-bottom">
                <div className="text-center text-white">
                    <h1 className="mb-4 text-3xl">Award-winning custom designs and digital branding solutions</h1>
                    <p className="mb-6">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
                    <Link to="/about" className="text-black bg-white py-2 px-4 rounded-lg mb-20">Learn more</Link>
                </div>
                <div className="w-full h-96 bg-hero-mobile-mobile bg-center bg-no-repeat bg-contain">
                </div>
            </div>
            <div id="DD1" className="hidden DD"></div>
            <div className="row">
                <div className="project-btn-area">
                    <PageLinkButton page="webdesign" h1="Web Design" c="btn project-btn project-btn-first" />
                    <div className="desktop-responsive">
                    <PageLinkButton page="app" h1="App Design" c="btn project-btn project-btn-second" />
                    <PageLinkButton page="graphicdesign" h1="GRAPHIC DESIGN" c="btn project-btn project-btn-third" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="keyword-area mb-80">
                    <div className="passionate-card">
                        <div className="keyimg">
                            <img src={passionate} alt="passionate" />
                        </div>
                        <div className="responsive-keywords">
                        <h2>Passionate</h2>
                        <p>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
                        </div>
                    </div>
                    <div className="resourceful-card">
                        <div className="keyimg">
                            <img src={resourceful} alt="resourceful" />
                        </div>
                        <div className="responsive-keywords">
                        <h2>Resourceful</h2>
                        <p>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
                        </div>
                    </div>
                    <div className="friendly-card">
                        <div className="keyimg">
                            <img src={friendly} alt="friendly" />
                        </div>
                        <div className="responsive-keywords">
                        <h2>Friendly</h2>
                        <p>We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage