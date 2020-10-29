import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import React, {PureComponent} from "react";
import {OfferProps} from "../../property-types.js";
import PropTypes from "prop-types";
import {CITIES_CORDINATES} from "../../const";

const INACTIVE_ICON = leaflet.icon({
  iconUrl: `../img/pin.svg`,
  iconSize: [30, 30]
});

const ACTIVE_ICON = leaflet.icon({
  iconUrl: `../img/pin-active.svg`,
  iconSize: [30, 30]
});

const ZOOM = 12;

export default class Map extends PureComponent {

  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }


  renderMap() {
    const city = CITIES_CORDINATES[this.props.currentCity];
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
    const {offers, offerActive} = this.props;
    const getIcon = (id) => offerActive === id ? ACTIVE_ICON : INACTIVE_ICON;
    this.layerGroup = leaflet.layerGroup(offers.map((offer)=>{
      const icon = getIcon(offer.id);
      return leaflet
      .marker(offer.coordinates, {icon});
    }));
    this.layerGroup.addTo(this.map);
  }
  componentDidMount() {
    this.renderMap();
  }

  componentDidUpdate() {
    this.layerGroup.clearLayers();
    this.renderMarkers();
    const city = CITIES_CORDINATES[this.props.currentCity];
    this.map.flyTo(city, ZOOM);
  }

  render() {

    return (
      <div ref={this.mapRef} style={{height: `100%`}}></div>
    );
  }
}


Map.propTypes = {
  offers: PropTypes.arrayOf(OfferProps).isRequired,
  className: PropTypes.string,
  currentCity: PropTypes.string.isRequired,
  offerActive: PropTypes.number,
};
