import { useState } from "react";
import CapitalLocations from "../CapitalLocations"
import alert from "../../assets/circle-exclamation-solid.svg"

const Contact = ( {hamburger} ) => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [textArea, setTextArea] = useState(null);
    const handleclick = (e) => {
        e.preventDefault();
        if(name !== "" && name !== null){
        } else {
            setName("")
        }
        if(email !== "" && email !== null){

        } else {
            setEmail("")
        }
        if(phone !== "" && phone !== null){

        } else {
            setPhone("")
        }
        if(textArea !== "" && textArea !== null){

        }else {
            setTextArea("")
        }
    }
    return (
        <div className={hamburger === false ? "row" : "row blurry"}>
            <div className="hero hero-contact">
                <form className="contact" onSubmit={handleclick}>
                    <div className="form-textarea">
                        <h1>Contact Us</h1>
                        <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
                    </div>
                    <div className="inputarea">
                        <div className="input"><input value={name} onChange={(e) => {setName(e.target.value)}} id="name" type="name" placeholder="Name"></input><span className={name === "" ? "error" : "correct"}>Can’t be empty<img className="alerticon" src={alert} alt="alert" /></span></div>
                        <div className="input"><input value={email} onChange={(e) => {setEmail(e.target.value)}} id="email" type="email" placeholder="Email Address"></input><span className={email === "" ? "error" : "correct"}>Can’t be empty<img className="alerticon" src={alert} alt="alert" /></span></div>
                        <div className="input"><input value={phone} onChange={(e) => {setPhone(e.target.value)}} id="phone" type="phone" placeholder="Phone"></input><span className={phone === "" ? "error" : "correct"}>Can’t be empty<img className="alerticon" src={alert} alt="alert" /></span></div>
                        <div className="input"><input value={textArea} onChange={(e) => {setTextArea(e.target.value)}} id="textarea" type="textarea" placeholder="Your Message"></input><span className={textArea === "" ? "error" : "correct"}>Can’t be empty<img className="alerticon" src={alert} alt="alert" /></span></div>
                        <button id="submit" type="submit" >SUBMIT</button>
                    </div>
                </form>
            </div>
            <CapitalLocations />
        </div>
    )
}

export default Contact