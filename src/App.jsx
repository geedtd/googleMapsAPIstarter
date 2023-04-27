import './App.css'
import { useLoadScript, GoogleMap, Marker} from '@react-google-maps/api';

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_API_KEY,
  })
  // console.log(import.meta.VITE_API_KEY)

  if (!isLoaded) return <div>Loading...</div>
  return <GMap />
}

function GMap() {
  return <GoogleMap zoom={10} center={{lat: 44, lng: -80}} mapContainerClassName='map-container' >
    <Marker position={{lat:44, lng: -80}} />
  </GoogleMap>
}
export default App
