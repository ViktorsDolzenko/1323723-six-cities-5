import React from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import {coordinatesPropTypes, iconsCoordinatesPropTypes} from "../../property-types";

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

const ZOOM_LEVEL = 12;

export class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  renderMap() {
    this.map = leaflet.map(this.mapRef.current, {
      center: this.props.center,
      zoom: ZOOM_LEVEL,
      zoomControl: false,
      marker: true
    });
    this.map.setView(this.props.center, ZOOM_LEVEL);

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
      return leaflet
      .marker(currentIcon.coordinates, {icon});
    }));
    this.layerGroup.addTo(this.map);
  }
  componentDidMount() {
    this.renderMap();
  }

  componentDidUpdate() {
    this.layerGroup.clearLayers();
    this.renderMarkers();
    this.map.flyTo(this.props.center, ZOOM_LEVEL);
  }

  render() {
    return (
      <div ref={this.mapRef} style={{height: `100%`}}/>
    );
  }
}

Map.propTypes = {
  icons: PropTypes.arrayOf(iconsCoordinatesPropTypes).isRequired,
  center: coordinatesPropTypes,
  activeIconId: PropTypes.number,
};
