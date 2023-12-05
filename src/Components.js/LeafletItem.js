import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'

const LeafletItem = ({ margin, id, country, address1, address2, address3, p, m, cords }) => {
    useEffect(() => {

    },[])
    return (
            <div id={id} className="leafletarea">
                <div className="leaflet-map">
                <MapContainer id={id} center={cords} zoom={13} scrollWheelZoom={false}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                </MapContainer>
                </div>
                <div id={margin} className="leaflet-textarea">
                    <div className='responsive-leaflettextarea1'>
                        <h2>{country}</h2>
                        <p id='bold'>{address1}</p>
                        <p>{address2}</p>
                        <p>{address3}</p>
                    </div>
                    <div className='responsive-leaflettextarea2'>
                        <h3>Contact</h3>
                        <p>{p}</p>
                        <p>{m}</p>
                    </div>
                </div>
            </div>
    )
}

export default LeafletItem