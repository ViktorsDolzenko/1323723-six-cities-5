import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Map} from "../map/map";
import {PlacesSorting} from "../places-sorting/places-sorting";
import {OfferCards} from "../offer-cards/offer-cards";
import {offerProps, iconsCoordinatesPropTypes} from "../../property-types.js";
import {withActiveOffer} from "../../hocs/withOfferActive/withActiveOffer";
import {selectIcons} from "../../selectors/selectors";
import {CitiesCoordinates} from "../../const";
import {compose} from "redux";


const OffersScreenComponent = ({offers, city, activeOffer, onOfferCardHover, onOfferCardLeave, icons}) =>{

  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {city}</b>
        <PlacesSorting/>
        <div className="cities__places-list places__list tabs__content">
          {offers.map((offer) =>
            <OfferCards
              key={offer.id}
              offer={offer}
              articleClass={`cities__place-card`}
              imgClass={`cities`}
              onOfferCardHover={onOfferCardHover}
              onOfferCardLeave={onOfferCardLeave}/>
          )}
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map center={CitiesCoordinates[city]} icons={icons} activeIconId={activeOffer} />
        </section>
      </div>
    </>
  );
};

OffersScreenComponent.propTypes = {
  offers: PropTypes.arrayOf(offerProps).isRequired,
  city: PropTypes.string.isRequired,
  activeOffer: PropTypes.number,
  onOfferCardHover: PropTypes.func.isRequired,
  onOfferCardLeave: PropTypes.func.isRequired,
  icons: PropTypes.arrayOf(iconsCoordinatesPropTypes).isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
  filter: state.filter,
  icons: selectIcons(state),
});

export const OffersScreen = compose(withActiveOffer, connect(mapStateToProps))(OffersScreenComponent);

