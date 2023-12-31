import hero from "../../assets/about/mobile/image-about-hero.jpg"
import woman from "../../assets/about/mobile/image-world-class-talent.jpg"
import CapitalLocations from "../CapitalLocations"
import item3img from "../../assets/about/desktop/image-real-deal.jpg"

const About = ( {hamburger} ) => {
    return (
        <div className={hamburger === false ? "row" : "row blurry"}>
            <div id="hero-about" className="hero">
                <img src={hero} alt="hero" />
                <div>
                    <h1>About Us</h1>
                    <p>Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences.</p>
                </div>
            </div>
            <div className="about-item2area">
                <img src={woman} alt="picture with a woman" />
                <div>
                    <h1>World-class talent</h1>
                    <p>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.</p>
                    <br></br>
                    <p>Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.</p>
                </div>
            </div>
            <CapitalLocations />
            <div className="about-item3area">
                <img src={item3img} alt="The real deal" />
                <div>
                    <h1>The real deal</h1>
                    <p>As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.</p>
                    <br></br>
                    <p>We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>
                </div>
            </div>
        </div>
    )
}

export default About