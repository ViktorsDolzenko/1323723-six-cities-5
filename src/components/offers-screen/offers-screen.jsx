import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCards from "../offer-cards/offer-cards";
import {OfferProps} from "../../property-types.js";
export default class OffersScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offerActive: null
    };

    this._handleOfferCardHover = this._handleOfferCardHover.bind(this);
    this._handleOfferCardLeave = this._handleOfferCardLeave.bind(this);
  }

  _handleOfferCardLeave() {
    this.setState({offerActive: null});
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
            articleClass={`cities__place-card`}
            imgClass={`cities`}
            onOfferCardHover={this._handleOfferCardHover}
            onOfferCardLeave={this._handleOfferCardLeave}/>

        )}
      </div>
    );
  }

}
OffersScreen.propTypes = {
  offers: PropTypes.arrayOf(OfferProps).isRequired
};
