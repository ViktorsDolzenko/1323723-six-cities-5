import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {OfferCard} from "../offer-card/offer-card";
import {offerProps} from "../../property-types.js";
import {connect} from "react-redux";
import {NameSpace} from "../../store/root-reducer";
import {fetchFavoriteOffers} from "../../store/api-actions";

export const FavoritesScreenComponent = (props) =>{
  const {offers, getFavoriteOffers} = props;

  useEffect(() => {
    getFavoriteOffers();
  }, [offers]);

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
  offers: PropTypes.arrayOf(offerProps).isRequired,
  getFavoriteOffers: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  offers: state[NameSpace.DATA].favoriteOffers,
});

const mapDispatchToProps = (dispatch) => ({
  getFavoriteOffers() {
    dispatch(fetchFavoriteOffers());
  }
});

export const FavoritesScreen = connect(mapStateToProps, mapDispatchToProps)(FavoritesScreenComponent);
