import React, { useState, useRef, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { listChurches } from '../components/Api';
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css"





function Map() {
  const [churches, setChurches] = useState([]);
  const [viewport, setViewport] = useState({
    longitude: -86.1746933,
    latitude: 40.3270127,
    width: '60vw',
    height: '70vh',
    zoom: 6
  });

  const mapRef = useRef();


    useEffect(() => {
    (async () => {
      const churches = await listChurches();
      setChurches(churches);
      console.log(churches);
    })();

    return () => {
      // clean up things ...
      // is like a componentUnmount()
    };
  }, []);

  return (
    <div >
      <ReactMapGL
        className='mapContainer'
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        maxZoom={20}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(newViewport) => {
          setViewport({ ...newViewport });
        }}
        ref={mapRef}
      >
        
        {/* {

        churches.map(church => (
          <Marker 
            key={church.id}
            // latitude={41.0799898}
            longitude={parseFloat(church.Longitude)}
            latitude={parseFloat(church.Latitude)}
            // longitude={-85.1386015}
            
            offsetLeft={-20}
            offsetTop={-10}>
            <div>
              <h1>Church</h1>
            <button className='marker-btn'>
              <img src='/colorchurch.svg' alt='church' />
            </button>
          </div>  

          </Marker>

        ))
      } */}

        {/* <Marker
          latitude={41.07776110}
          longitude={-85.14752470}
        >
          <div>
            <button className='marker-btn'>
              <img src='/colorchurch.svg' alt='church' />
            </button>
          </div>          
        </Marker> */}

      </ReactMapGL>

    </div>

  )
}

export default Map;