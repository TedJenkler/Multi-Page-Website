import CapitalLocations from "../CapitalLocations"

const Contact = ( {hamburger} ) => {
    return (
        <div className={hamburger === false ? "row" : "row blurry"}>
            <div className="hero hero-contact">
                <form className="contact">
                    <h1>Contact Us</h1>
                    <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
                    <div className="inputarea">
                        <input type="name"></input>
                        <input type="email"></input>
                        <input type="phone"></input>
                        <input type="textarea"></input>
                    </div>
                </form>
            </div>
            <CapitalLocations />
        </div>
    )
}

export default Contact