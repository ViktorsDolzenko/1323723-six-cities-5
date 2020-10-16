import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const FavoritesCard = (props) =>{

  const {bookmarkedOffer} = props;
  const offerUrl = `offer/` + bookmarkedOffer.id;
  return (
    <article className="favorites__card place-card" key={`${bookmarkedOffer.id}-${bookmarkedOffer.title}`}>
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={offerUrl} href="#" >
          <img className="place-card__image" src={bookmarkedOffer.photo[0]} width="150" height="110" alt="Place image"></img>
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro; {bookmarkedOffer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: bookmarkedOffer.stars}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerUrl} href="#">{bookmarkedOffer.title}</Link>
        </h2>
        <p className="place-card__type">{bookmarkedOffer.type}</p>
      </div>
    </article>
  );
};

FavoritesCard.propTypes = {
  bookmarkedOffer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    photo: PropTypes.array.isRequired,
    premium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequred,
    rating: PropTypes.number.isRequired,
    stars: PropTypes.string.isRequired,
    bookmarks: PropTypes.bool.isRequired
  }).isRequired
};

export default FavoritesCard;
