import "./App.css";
import {APIProvider, Map} from '@vis.gl/react-google-maps';


function App() {
  return (
    <>
      <h1>React Google Map</h1>

    <Map
      style={{width: '100vw', height: '100vh'}}
      defaultCenter={{lat: 22.54992, lng: 0}}
      defaultZoom={3}
      gestureHandling='greedy'
      disableDefaultUI
    />

    
    </>
  );
}

export default App;
