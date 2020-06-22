import "mapbox-gl/dist/mapbox-gl.css"
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css"
import React from 'react'
import MapGL from "react-map-gl";
import DeckGL, { GeoJsonLayer } from "deck.gl";
import Geocoder from "react-map-gl-geocoder";

class Map extends React.Component { 

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 41.07963180541992,
        longitude: -85.13732147216797,
        zoom: 10
      },
      searchResultLayer: null
    }
  }

  mapRef = React.createRef()

  handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    })
  }
  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    });
  };


  handleOnResult = event => {
    this.setState({
      searchResultLayer: new GeoJsonLayer({
        id: "search-result",
        data: event.result.geometry,
        getFillColor: [255, 0, 0, 128],
        getRadius: 1000,
        pointRadiusMinPixels: 10,
        pointRadiusMaxPixels: 10,
      })      
    })
  }

  render() {
    const { viewport, searchResultLayer } = this.state
    return (
      <div style={{ height: '100vh' }}>
        <MapGL className="mapContainer"
          ref={this.mapRef}
          {...viewport}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          width="50%"
          height="70%"
          onViewportChange={this.handleViewportChange}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        >
          <Geocoder
            mapRef={this.mapRef}
            onResult={this.handleOnResult}
            onViewportChange={this.handleGeocoderViewportChange}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            position='top-left'
          />
        </MapGL>
        <DeckGL {...viewport} layers={[searchResultLayer]} />
      </div>
    )
  }
}

export default Map;