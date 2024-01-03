import logo from "../assets/shared/desktop/logo-light.png"
import facebook from "../assets/shared/desktop/icon-facebook.svg"
import youtube from "../assets/shared/desktop/icon-youtube.svg"
import twitter from "../assets/shared/desktop/icon-twitter.svg"
import pintrest from "../assets/shared/desktop/icon-pinterest.svg"
import instagram from "../assets/shared/desktop/icon-instagram.svg"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
                <div className="bg-black text-white pt-64 px-6 pb-16 md:pt-40 md:px-10 md:pb-20 w-full">
                    <div className="relative w-full">
                        <div className="absolute w-11/12 bottom-16 mx-auto left-0 right-0 bg-peach text-white py-16 px-6 rounded-2xl text-center bg-hero-mobile-footer bg-center bg-no-repeat bg-cover md:bg-hero-tablet-footer lg:w-4/5 lg:bg-right lg:bg-hero-desktop-footer lg:flex lg:items-center lg:justify-between lg:px-24 lg:py-20">
                            <div className="text-center lg:w-1/2">
                                <h1 className="text-3xl mb-2 md:mx-52 lg:mx-0 lg:text-start lg:mr-10 xl:mr-40">Let’s talk about your project</h1>
                                <p className="mb-8 md:mx-20 lg:mx-0 lg:text-start">Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
                            </div>
                            <Link className="bg-white rounded-lg text-black py-3 px-4" to="/contact">GET IN TOUCH</Link>
                        </div>
                    </div>
                    <div className="lg:w-4/5 lg:mx-auto">
                        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center">
                            <Link className="mb-8 md:mb-0" to="/"><img className="h-7" src={logo} alt="logo" /></Link>
                            <div className="border-t border-bordergrey/[.4] w-11/12 mb-8 md:hidden"></div>
                            <div className="flex flex-col items-center md:flex-row md:gap-10">
                                <Link className="hover:underline mb-8 md:mb-0" to="about"><h2 className="text-sm">OUR COMPANY</h2></Link>
                                <Link className="hover:underline mb-8 md:mb-0" to="locations"><h2 className="text-sm">LOCATIONS</h2></Link>
                                <Link className="hover:underline mb-10 md:mb-0" to="contact"><h2 className="text-sm">CONTACT</h2></Link>
                            </div>
                        </div>
                        <div className="md:border-t md:border-bordergrey/[.4] md:w-full md:mt-12 md:mb-8"></div>
                        <div className="flex flex-col items-center md:flex-row md:justify-between">
                        <div className="mb-10 text-center md:text-start">
                            <p className="md:text-left">Designo Central Office</p>
                            <p className="md:text-left">3886 Wellington Street</p>
                            <p className="md:text-left">Toronto, Ontario M9C 3J5</p>
                        </div>
                        <div className="mb-10 text-center">
                            <p className="md:text-left">Contact Us (Central Office)</p>
                            <p className="md:text-left">P : +1 253-863-8967</p>
                            <p className="md:text-left">M : contact@designo.co</p>
                        </div>
                        <div className="flex gap-3">
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