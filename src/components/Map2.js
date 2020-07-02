import React, { useState, useRef, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { listChurches } from './Api';
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

function Map() {
  const [churches, setChurches] = useState([]);
  const [viewport, setViewport] = useState({
    longitude: -85.1386015,
    latitude: 41.0799898,
    width: '97vw',
    height: '70vh',
    zoom: 8
  });

  const mapRef = useRef();


  useEffect(() => {
    (async () => {
      const churchList = await listChurches();
      setChurches(churchList);
    })();
    console.log(churches);

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

         {
          churches.map(church =>
            
              <Marker
                key={church.id}
                longitude={parseFloat(church.Longitude)}
                latitude={parseFloat(church.Latitude)}
                offsetLeft={-20}
                offsetTop={-10}
                >
                <div>
                  <button className='marker-btn'>
                    <img src='/colorchurch.svg' alt='church' />
                  </button>
                </div>

              </Marker>

            )
        } 

      </ReactMapGL>
    </div>
  )
}

export default Map;