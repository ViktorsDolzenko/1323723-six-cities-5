import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {OfferCard} from "../offer-card/offer-card";
import {offerProps} from "../../property-types.js";
import {connect} from "react-redux";
import {NameSpace} from "../../store/root-reducer";
import {fetchFavoriteOffers} from "../../store/api-actions";
import {Link} from "react-router-dom";

export const FavoritesScreenComponent = (props) =>{
  const {offers, getFavoriteOffers} = props;

  useEffect(() => {
    getFavoriteOffers();
  }, [offers]);

  if (offers.length === 0) {
    return (
      <div className="favorites__places">
        <Link to={`/`}><p className="favorite__places-empty">You have not marked any offer, click here to to redirect to homepage</p></Link>
      </div>
    );
  }

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
