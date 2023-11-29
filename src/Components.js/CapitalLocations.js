import canada from "../assets/shared/desktop/illustration-canada.svg"
import australia from "../assets/shared/desktop/illustration-australia.svg"
import unitedkingdom from "../assets/shared/desktop/illustration-united-kingdom.svg"

const CapitalLocations = () => {
    return (
        <>
            <div className="capitallocation-area">
                <div id="canada"><img id="canadarotateback" src={canada} alt="canada" /></div>
                <h2>CANADA</h2>
                <button className="btn">SEE LOCATION</button>
                <img src={australia} alt="australia" />
                <h2>AUSTRALIA</h2>
                <button className="btn">SEE LOCATION</button>
                <img src={unitedkingdom} alt="unitedkingdom" />
                <h2>UNITED KINGDOM</h2>
                <button className="btn">SEE LOCATION</button>
            </div>
        </>
    )
}

export default CapitalLocations