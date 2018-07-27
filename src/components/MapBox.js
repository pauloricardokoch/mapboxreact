import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoicGF1bG9yaWNhcmRva29jaCIsImEiOiJjampyaWdnZ3QwMDBhM2tvMGdvOGhlNmg4In0.RoTIYl025qE3exFMMxJX5g",
    minZoom: 5,
    maxZoom: 9,
});

class MapBox extends Component {

    zoom = [7];
    bearing = [0];
    pitch = [45];
    center = [-52.406672, -28.26278];

    onStyleLoad = map => {
        const { onStyleLoad } = this.props;
        return onStyleLoad && onStyleLoad(map);
    }

    render() {
        return (
            <Map
                style="mapbox://styles/mapbox/light-v9"
                onStyleLoad={this.onStyleLoad}
                zoom={this.zoom}
                center={this.center}
                pitch={this.pitch}
                bearing={this.bearing}
                containerStyle={{
                    width: "100vw",
                    height: this.props.height,
                }}>
            </Map>
        );
    }
}

export default MapBox;