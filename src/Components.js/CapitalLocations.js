import canada from "../assets/shared/desktop/illustration-canada.svg"
import australia from "../assets/shared/desktop/illustration-australia.svg"
import unitedkingdom from "../assets/shared/desktop/illustration-united-kingdom.svg"
import { Link } from "react-router-dom"

const CapitalLocations = () => {
    return (
        <>
            <div className="capitallocation-area">
                <div className="capitallocation-item">
                    <div id="canada"><img id="canadarotateback" src={canada} alt="canada" /></div>
                    <h2 id="canadah2">CANADA</h2>
                    <Link to="/locations"><button className="btn">SEE LOCATION</button></Link>
                </div>
                <div className="capitallocation-item">
                    <img src={australia} alt="australia" />
                    <h2>AUSTRALIA</h2>
                    <Link to="/locations"><button className="btn">SEE LOCATION</button></Link>
                </div>
                <div className="capitallocation-item">
                    <img src={unitedkingdom} alt="unitedkingdom" />
                    <h2>UNITED KINGDOM</h2>
                    <Link to="/locations"><button className="btn">SEE LOCATION</button></Link>
                </div>
            </div>
        </>
    )
}

export default CapitalLocations