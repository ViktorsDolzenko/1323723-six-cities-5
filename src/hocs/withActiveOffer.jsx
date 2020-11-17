import React from "react";

export const withActiveOffer = (Component) => {
  class WithOfferActive extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeOffer: null,
      };
      this._handleOfferCardHover = this._handleOfferCardHover.bind(this);
      this._handleOfferCardLeave = this._handleOfferCardLeave.bind(this);
    }

    _handleOfferCardLeave() {
      this.setState({activeOffer: null});
    }

    _handleOfferCardHover(offerId) {
      this.setState({activeOffer: offerId});
    }

    render() {
      const {activeOffer} = this.state;
      return (
        <Component
          {...this.props}
          activeOffer = {activeOffer}
          onOfferCardHover={this._handleOfferCardHover}
          onOfferCardLeave={this._handleOfferCardLeave}
        />
      );
    }
  }
  return WithOfferActive;
};
