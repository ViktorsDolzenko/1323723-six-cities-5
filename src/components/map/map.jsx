import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import React, {PureComponent} from "react";
import {OfferProps} from "../../property-types.js";
import PropTypes from "prop-types";

export default class CitiesMap extends PureComponent {

  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    const {offers} = this.props;
    const offersCords = offers.map((offer)=> offer.coordinates);

    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `../img/pin.svg`,
      iconSize: [30, 30]
    });


    const zoom = 12;
    const map = leaflet.map(this.mapRef.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(map);

    offersCords.forEach((offerCords) =>{
      leaflet
      .marker(offerCords, {icon})
      .addTo(map);
    });


  }


  render() {

    return (
      <div ref={this.mapRef} style={{height: `100%`}}></div>
    );
  }
}


CitiesMap.propTypes = {
  offers: PropTypes.arrayOf(OfferProps).isRequired,
  className: PropTypes.string
};