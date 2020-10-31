import React from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import {OfferProps} from "../../property-types.js";
import {CITIES_COORDINATES} from "../../const";

const inactiveIcon = leaflet.icon({
  iconUrl: `../img/pin.svg`,
  iconSize: [30, 30]
});

const activeIcon = leaflet.icon({
  iconUrl: `../img/pin-active.svg`,
  iconSize: [30, 30]
});

const ZOOM = 12;

export class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  renderMap() {
    const city = CITIES_COORDINATES[this.props.city];
    this.map = leaflet.map(this.mapRef.current, {
      center: city,
      zoom: ZOOM,
      zoomControl: false,
      marker: true
    });
    this.map.setView(city, ZOOM);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this.map);
    this.renderMarkers();
  }

  renderMarkers() {
    const {offers, offer} = this.props;
    const getIcon = (id) => offer === id ? activeIcon : inactiveIcon;
    this.layerGroup = leaflet.layerGroup(offers.map((offerOnMap)=>{
      const icon = getIcon(offerOnMap.id);
      return leaflet
      .marker(offerOnMap.coordinates, {icon});
    }));
    this.layerGroup.addTo(this.map);
  }
  componentDidMount() {
    this.renderMap();
  }

  componentDidUpdate() {
    this.layerGroup.clearLayers();
    this.renderMarkers();
    const city = CITIES_COORDINATES[this.props.city];
    this.map.flyTo(city, ZOOM);
  }

  render() {
    return (
      <div ref={this.mapRef} style={{height: `100%`}}/>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(OfferProps).isRequired,
  className: PropTypes.string,
  city: PropTypes.string.isRequired,
  offer: PropTypes.number,
};
