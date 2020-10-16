import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCards from "../offer-cards/offer-cards";
export default class OffersScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offerActive: null
    };

    this._handleOfferCardHover = this._handleOfferCardHover.bind(this);
  }

  _handleOfferCardHover(offerId) {
    this.setState({offerActive: offerId});
  }
  render() {
    const {offers} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) =>
          <OfferCards
            key={offer.id}
            offer={offer}
            onOfferCardHover={this._handleOfferCardHover}/>
        )}
      </div>
    );
  }

}
OffersScreen.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
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

