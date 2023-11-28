
import Logo from "../assets/shared/desktop/logo-dark.png"
import hamburgerimg from "../assets/shared/mobile/icon-hamburger.svg"
import closehamburger from "../assets/shared/mobile/icon-close.svg"

const Header = ({ hamburger, sethamburger }) => {
    return (<>
        <div className="header">
            <div className="logo-area">
                <img className="logo" src={Logo} alt="logo" />
            </div>
            <div className="menu-area">
               {hamburger === false ? <img onClick={(e) => {sethamburger(true)}} className="hamburger-menu" src={hamburgerimg} alt="hamburger" /> : <img onClick={(e) => {sethamburger(false)}} className="hamburger-menu" src={closehamburger} alt="closehamburger" /> }
            </div>
        </div>
        <div className={hamburger === false ? "menu menu-hidden" : "menu"} >
            <ul>
                <li>OUR COMPANY</li>
                <li id="hamburger-menu-item2">LOCATIONS</li>
                <li>CONTACT</li>
            </ul>
        </div>
        </>)
}

export default Header