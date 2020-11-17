import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import Loader from "react-loader-spinner";
import PropTypes from "prop-types";

import {withActiveOffer} from "../../hocs/withActiveOffer";
import {iconsPropTypes, offerProps} from "../../property-types";
import {getOffersByCities, selectIcons, selectOfferById} from "../../selectors/selectors";

import {Header} from "../header/header";
import {Footer} from "../footer/footer";
import {Map} from "../map/map";
import {ReviewForm} from "../review-form/review-form";
import {ReviewList} from "../review-list/review-list";
import {NearPlaces} from "../near-places/nearPlaces";
import {reviews} from "../../mocks/reviews";

const PropertyComponent = (props) => {
  const {
    offer,
    offers,
    icons,
    activeOffer,
    onOfferCardHover,
    onOfferCardLeave,
    history,
  } = props;
  const onUserNameClick = () => history.push(`/favorites`);

  return (
    <div className="page">
      <Header onUserNameClick={onUserNameClick} />
      {!offer && (
        <h1 className="property__name">
          <Loader type="ThreeDots" color="#4873FA" height={200} width={200} />
        </h1>
      )}
      {offer && (
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.map((image, index) => {
                return (
                  <div className="property__image-wrapper" key={index}>
                    <img
                      className="property__image"
                      src={image}
                      alt="Photo studio"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.is_premium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">{offer.title}</h1>
                <button
                  className="property__bookmark-button button"
                  type="button"
                >
                  <svg
                    className="property__bookmark-icon"
                    width="31"
                    height="33"
                  >
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${offer.rating * 20}%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {offer.rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.max_adults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.goods.map((feature, index) => {
                    return (
                      <li className="property__inside-item" key={index}>
                        {feature}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src={offer.host.avatar_url}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">{offer.host.name}</span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    A quiet cozy and picturesque that hides behind a a river by
                    the unique lightness of Amsterdam. The building is green and
                    from 18th century.
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand
                    Square and National Opera, but where the bustle of the city
                    comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewList reviews={reviews} />
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="property__map map" style={{padding: `0 15rem`}}>
            {<Map icons={icons} activeIconId={activeOffer} />}
          </section>
        </section>
      )}
      {offer && (
        <NearPlaces
          offer={offer}
          offers={offers}
          onOfferCardHover={onOfferCardHover}
          onOfferCardLeave={onOfferCardLeave}
        />
      )}
      {offer && <Footer />}
    </div>
  );
};

PropertyComponent.propTypes = {
  offer: PropTypes.shape(offerProps.isRequired),
  offers: PropTypes.arrayOf(PropTypes.shape(offerProps.isRequired)).isRequired,
  activeOffer: PropTypes.number,
  onOfferCardHover: PropTypes.func.isRequired,
  onOfferCardLeave: PropTypes.func.isRequired,
  icons: PropTypes.arrayOf(iconsPropTypes).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state, props) => ({
  city: state.city,
  offers: getOffersByCities(state),
  offer: selectOfferById(state, props.match.params.id),
  icons: selectIcons(state),
});
export const Property = compose(
    withRouter,
    withActiveOffer,
    connect(mapStateToProps)
)(PropertyComponent);
