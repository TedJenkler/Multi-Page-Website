import phoneframe from "../../assets/home/desktop/image-hero-phone.png"

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

                </div>
            </div>
        </div>
    )
}

export default HomePage