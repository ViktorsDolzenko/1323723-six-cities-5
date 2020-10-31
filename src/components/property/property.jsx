import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {ReviewForm} from "../review-form/review-form";
import {ReviewList} from "../review-list/review-list";
import {Map} from "../map/map";
import {OfferProps} from "../../property-types";
import {connect} from "react-redux";
import {OfferCards} from "../offer-cards/offer-cards";

const PropertyComponent = (props) => {
  const {offer, reviews, onEmailLinkClick, city, filteredOffers} = props;

  const photoElements = offer.photo.map((image, index) => {
    return (
      <div className="property__image-wrapper" key={index}>
        <img className="property__image" src={image} alt="Photo studio" />
      </div>
    );
  });

  const featureElements = offer.features.map((feature, index) =>{
    return (
      <li className="property__inside-item" key={index}>
        {feature}
      </li>
    );
  });

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={`/`}>
                <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#" onClick={onEmailLinkClick}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {photoElements}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {offer.premium
              ?
              <div className="property__mark">
                <span>Premium</span>
              </div>
              :
              null
            }
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {offer.title}
              </h1>
              <button className="property__bookmark-button button" type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"/>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: offer.stars}}/>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{offer.rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {offer.type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {offer.bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                  Max {offer.adultsCount} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{offer.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {featureElements}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src={offer.hostAvatar} width="74" height="74" alt="Host avatar"/>
                </div>
                <span className="property__user-name">
                  {offer.hostName}
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                </p>
                <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                </p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <ReviewList
                reviews={reviews}
              />
              <ReviewForm />
            </section>
          </div>
        </div>
        <section className="property__map map" style={{padding: `0 15rem`}}>
          {<Map offers={filteredOffers} city={city}/>}
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {filteredOffers.map((offerInDetails) =>
              <OfferCards offer={offerInDetails} key={offerInDetails.id} />
            )}</div>
        </section>
      </div>
      <footer className="footer container">
        <Link className="footer__logo-link" to={`/`}>
          <img className="footer__logo" src="/img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
};

PropertyComponent.propTypes = {
  onEmailLinkClick: PropTypes.func.isRequired,
  offer: PropTypes.shape(OfferProps.isRequired).isRequired,
  reviews: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  filteredOffers: PropTypes.arrayOf(PropTypes.shape(OfferProps.isRequired)).isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  filteredOffers: state.filteredOffers,
});

export const Property = connect(mapStateToProps)(PropertyComponent);
