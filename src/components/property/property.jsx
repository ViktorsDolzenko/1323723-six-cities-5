import React from "react";
import PropTypes from "prop-types";

const Property = (props) => {
  const {offers, reviews} = props;


  const photoElements = offers.photo.map((image, index) => {
    return (
      <div className="property__image-wrapper" key={index}>
        <img className="property__image" src={image} alt="Photo studio" />
      </div>
    );
  });

  const featureElements = offers.features.map((feature, index) =>{
    return (
      <li className="property__inside-item" key={index}>
        {feature}
      </li>
    );
  });


  const reviewElements = reviews.map((review, index) =>{
    return (
      <li className="reviews__item" key={index}>
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src={review.reviewAvatar} width="54" height="54" alt="Reviews avatar"></img>
          </div>
          <span className="reviews__user-name">
            {review.reviewUsername}
          </span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: review.reviewStars}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            {review.reviewText}
          </p>
          <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
        </div>
      </li>
    );
  });

  return (
    <section className="property">
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {photoElements}
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          {offers.premium
            ?
            <div className="property__mark">
              <span>Premium</span>
            </div>
            :
            null
          }
          <div className="property__name-wrapper">
            <h1 className="property__name">
              {offers.title}
            </h1>
            <button className="property__bookmark-button button" type="button">
              <svg className="property__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{width: offers.stars}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{offers.rating}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {offers.type}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {offers.bedrooms} Bedrooms
            </li>
            <li className="property__feature property__feature--adults">
                  Max {offers.adultsCount} adults
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{offers.price}</b>
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
                <img className="property__avatar user__avatar" src={offers.hostAvatar} width="74" height="74" alt="Host avatar"></img>
              </div>
              <span className="property__user-name">
                {offers.hostName}
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
            <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount"></span></h2>
            <ul className="reviews__list">
              {reviewElements}
            </ul>
            <form className="reviews__form form" action="#" method="post">
              <label className="reviews__label form__label" htmlFor="review">Your review</label>
              <div className="reviews__rating-form form__rating">
                <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"></input>
                <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>

                <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"></input>
                <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>

                <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"></input>
                <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>

                <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"></input>
                <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>

                <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"></input>
                <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
              </div>
              <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
              <div className="reviews__button-wrapper">
                <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                </p>
                <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
              </div>
            </form>
          </section>
        </div>
      </div>
      <section className="property__map map"></section>
    </section>
  );
};


Property.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    photo: PropTypes.array.isRequired,
    premium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequred,
    rating: PropTypes.number .isRequired,
    stars: PropTypes.string.isRequired,
    bookmarks: PropTypes.bool.isRequired,
    features: PropTypes.array.isRequired,
    adultsCount: PropTypes.number .isRequired,
    bedrooms: PropTypes.number.isRequired,
    hostName: PropTypes.string.isRequired,
    hostAvatar: PropTypes.string.isRequired
  })).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    reviewId: PropTypes.number.isRequired,
    reviewAvatar: PropTypes.string.isRequired,
    reviewText: PropTypes.string.isRequired,
    reviewStars: PropTypes.string.isRequired,
    reviewUsername: PropTypes.string.isRequired
  })).isRequired
};

export default Property;
