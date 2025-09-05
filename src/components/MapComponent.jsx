import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

export default function MapComponent({ lat=14.5995, lng=120.9842 }){
  return (
    <div className='w-full h-[400px] rounded-2xl overflow-hidden shadow-lg'>
      <MapContainer center={[lat,lng]} zoom={15} scrollWheelZoom={false} style={{ width:'100%', height:'100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a>'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[lat,lng]}>
          <Popup>Property location</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
