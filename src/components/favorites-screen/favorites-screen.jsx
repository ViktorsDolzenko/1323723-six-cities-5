import React from "react";
import PropTypes from "prop-types";
import OfferCards from "../offer-cards/offer-cards";
import {OfferProps} from "../../property-types.js";
const FavoritesScreen = (props) =>{

  const {offers} = props;
  const bookmarkedOffers = offers.filter((offer) => offer.bookmarks);
  return (
    <div className="favorites__places">
      {bookmarkedOffers.map((offer) =>
        <OfferCards
          key={offer.id}
          offer={offer}
          imgClass={`favorites`}
          articleClass={`favorites__card`}
          isFavoriteScreen={true}
        />
      )}
    </div>
  );
};

FavoritesScreen.propTypes = {
  offers: PropTypes.arrayOf(OfferProps).isRequired
};

export default FavoritesScreen;
