import React, {useEffect} from "react";
import {OfferCard} from "../offer-card/offer-card";
import PropTypes from "prop-types";
import {offerProps} from "../../property-types";
import {connect} from "react-redux";
import {fetchHotelsNearby} from "../../store/api-actions";
import {NameSpace} from "../../store/root-reducer";


export const NearPlacesComponent = ({offersNearby, onOfferCardHover, onOfferCardLeave, offerId, getNearbyOffers}) => {

  useEffect(() =>{
    getNearbyOffers(offerId);
  }, [offerId]);

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {offersNearby.map((offerInDetails) =>
            <OfferCard offer={offerInDetails} key={offerInDetails.id} onOfferCardHover={onOfferCardHover}
              onOfferCardLeave={onOfferCardLeave}/>
          )}</div>
      </section>
    </div>
  );
};

NearPlacesComponent.propTypes = {
  getNearbyOffers: PropTypes.func.isRequired,
  offersNearby: PropTypes.arrayOf(PropTypes.shape(offerProps.isRequired)).isRequired,
  onOfferCardHover: PropTypes.func.isRequired,
  onOfferCardLeave: PropTypes.func.isRequired,
  offerId: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  offersNearby: state[NameSpace.DATA].offersNearby
});

const mapDispatchToProps = (dispatch) => ({
  getNearbyOffers(id) {
    dispatch(fetchHotelsNearby(id));
  }
});

export const NearPlaces = connect(mapStateToProps, mapDispatchToProps)(NearPlacesComponent);


