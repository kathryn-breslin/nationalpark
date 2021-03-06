import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from "react-google-maps";

class Map extends Component {
    render() {
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
            defaultCenter={props.latLong}
            defaultZoom = { 13 } >
            </GoogleMap>
        ));
        return(
            <div>
              <GoogleMapExample
                containerElement={ <div style={{ height: `500px`, width: '1000px' }} /> }
                mapElement={ <div style={{ height: `100%` }} /> }
              />
            </div>
         );
         }
      };

export default Map;