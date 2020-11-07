import React from "react";
import {OfferCards} from "../offer-cards/offer-cards";
import PropTypes from "prop-types";
import {offerProps} from "../../property-types";


export const NearPlaces = ({offers, onOfferCardHover, onOfferCardLeave, offer}) => {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {offers.map((offerInDetails) =>
            offer.id !== offerInDetails.id ?
              <OfferCards offer={offerInDetails} key={offerInDetails.id} onOfferCardHover={onOfferCardHover}
                onOfferCardLeave={onOfferCardLeave}/> : null
          )}</div>
      </section>
    </div>
  );
};

NearPlaces.propTypes = {
  offer: PropTypes.shape(offerProps.isRequired).isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(offerProps.isRequired)).isRequired,
  onOfferCardHover: PropTypes.func.isRequired,
  onOfferCardLeave: PropTypes.func.isRequired
};


