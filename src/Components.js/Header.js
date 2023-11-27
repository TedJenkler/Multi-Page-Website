import Logo from "../assets/shared/desktop/logo-dark.png"
import hamburger from "../assets/shared/mobile/icon-hamburger.svg"

const Header = () => {
    return (
        <div className="header">
            <div className="logo-area">
                <img className="logo" src={Logo} alt="logo" />
            </div>
            <div className="menu-area">
                <img className="hamburger-menu" src={hamburger} alt="hamburger" />
            </div>
        </div>
    )
}

export default Header