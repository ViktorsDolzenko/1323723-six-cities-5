import React from "react";
import PropTypes from "prop-types";
import {OfferCard} from "../offer-cards/offer-cards";
import {offerProps} from "../../property-types.js";
import {connect} from "react-redux";
import {NameSpace} from "../../store/root-reducer";

export const FavoritesScreenComponent = (props) =>{
  const {offers} = props;
  return (
    <div className="favorites__places">
      {offers &&
        offers.map((offer) =>
          <OfferCard
            key={offer.id}
            offer={offer}
            imgClass={`favorites`}
            articleClass={`favorites__card`}
            isFavoriteScreen={true}
          />
        )
      }
    </div>
  );
};

FavoritesScreenComponent.propTypes = {
  offers: PropTypes.arrayOf(offerProps).isRequired
};

const mapStateToProps = (state) => ({
  offers: state[NameSpace.DATA].favoriteOffers,
});

export const FavoritesScreen = connect(mapStateToProps)(FavoritesScreenComponent);
