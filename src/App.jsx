

import './App.css'
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_API_KEY,
  })
  console.log(import.meta.VITE_API_KEY)

  if (!isLoaded) return <div>Loading...</div>
  return (
    <>
      <div>MAP</div>
    </>
  )
}

export default App
