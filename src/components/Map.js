import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";

const Map = ({ eventData, center, zoom }) => {
  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === "wildfires") {
      return (
        <LocationMarker
          lat={ev.features[0].geometry.coordinates[1]}
          lng={ev.features[0].geometry.coordinates[0]}
        />
      );
    }
    return null;
  });

  console.log(markers);
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCEC61-3Jfou2DOH3quO4tRTVnNVuwEiC4" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
