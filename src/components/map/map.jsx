import React from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import {iconsPropTypes} from "../../property-types";

const inactiveIcon = leaflet.icon({
  iconUrl: `../img/pin.svg`,
  iconSize: [30, 30]
});

const activeIcon = leaflet.icon({
  iconUrl: `../img/pin-active.svg`,
  iconSize: [30, 30]
});

function getIcon(currentIcon, activeIconId) {
  return activeIconId === currentIcon.id ? activeIcon : inactiveIcon;
}

const getCityLocation = ([offer]) => {
  const {latitude, longitude, zoom} = offer.city.location;
  const city = [latitude, longitude];

  return {city, zoom};
};

export class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  renderMap() {
    const {city, zoom} = getCityLocation(this.props.icons);
    this.map = leaflet.map(this.mapRef.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView(city, zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this.map);
    this.renderMarkers();
  }

  renderMarkers() {
    const {icons, activeIconId} = this.props;
    this.layerGroup = leaflet.layerGroup(icons.map((currentIcon) => {
      const icon = getIcon(currentIcon, activeIconId);
      const coordinates = [currentIcon.location.latitude, currentIcon.location.longitude];
      return leaflet
      .marker(coordinates, {icon});
    }));
    this.layerGroup.addTo(this.map);
  }
  componentDidMount() {
    this.renderMap();
  }

  componentDidUpdate() {
    this.layerGroup.clearLayers();
    this.renderMarkers();
    const {city, zoom} = getCityLocation(this.props.icons);
    this.map.flyTo(city, zoom);
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <div ref={this.mapRef} style={{height: `100%`}}/>
    );
  }
}

Map.propTypes = {
  icons: PropTypes.arrayOf(iconsPropTypes).isRequired,
  activeIconId: PropTypes.number,
};
