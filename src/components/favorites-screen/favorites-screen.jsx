import React from "react";
import PropTypes from "prop-types";
import FavoritesCard from "../favorites-card/favorites-card";
const FavoritesScreen = (props) =>{

  const {bookmarkedOffers} = props;

  return (
    <div className="favorites__places">
      {bookmarkedOffers.map((bookmarkedOffer) =>
        <FavoritesCard
          key={bookmarkedOffer.id}
          bookmarkedOffer={bookmarkedOffer}
        />
      )}
    </div>
  );
};

FavoritesScreen.propTypes = {
  bookmarkedOffers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    photo: PropTypes.array.isRequired,
    premium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequred,
    rating: PropTypes.number.isRequired,
    stars: PropTypes.string.isRequired,
    bookmarks: PropTypes.bool.isRequired
  })).isRequired
};

export default FavoritesScreen;
