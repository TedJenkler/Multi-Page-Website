const LeafletItem = ({ country, address1, address2, address3, p, m }) => {
    return (
            <div className="leafletarea">
                <div className="leaflet-map">

                </div>
                <div className="leaflet-textarea">
                    <h2>{country}</h2>
                    <p>{address1}</p>
                    <p>{address2}</p>
                    <p>{address3}</p>
                    <h3>Contact</h3>
                    <p>{p}</p>
                    <p>{m}</p>
                </div>
            </div>
    )
}

export default LeafletItem