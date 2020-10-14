import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


export default class OfferCards extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      bookmark: false
    };

    this.bookmarkActive = this.bookmarkActive.bind(this);
  }

  bookmarkActive() {
    this.setState(({bookmark}) =>{
      return {
        bookmark: !bookmark
      };
    });
  }

  render() {

    const {onOfferCardHover, offer} = this.props;
    const {bookmark} = this.state;
    const offerUrl = `offer/` + offer.id;
    let bookmarkClass = `place-card__bookmark-button ` + `button`;
    if (bookmark) {
      bookmarkClass += ` place-card__bookmark-button--active`;
    }

    return (
      <article
        key={`${offer.id}-${offer.title}`}
        className="cities__place-card place-card"
        onMouseEnter={() =>{
          onOfferCardHover(offer.id);
        }}>
        {offer.premium ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
          : null
        }
        <div className="cities__image-wrapper place-card__image-wrapper">
          <Link to={offerUrl}>
            <img className="place-card__image" src={offer.photo[0]} width="260" height="200" alt="Place image"></img>
          </Link >
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className={bookmarkClass} onClick={this.bookmarkActive} type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: offer.stars}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={offerUrl}>{offer.title}</Link>
          </h2>
          <p className="place-card__type">{offer.type}</p>
        </div>
      </article>);
  }
}

OfferCards.propTypes = {
  onOfferCardHover: PropTypes.func.isRequired,
  offer: PropTypes.shape({
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


