import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'

const LeafletItem = ({ country, address1, address2, address3, p, m, cords }) => {
    useEffect(() => {

    },[])
    return (
            <div className="leafletarea">
                <div className="leaflet-map">
                <MapContainer center={cords} zoom={13} scrollWheelZoom={false}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                </MapContainer>
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