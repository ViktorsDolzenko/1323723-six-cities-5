import React from "react";

export const withOfferActive = (Component) => {
  class WithOfferActive extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        offerActive: null,
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
      const {offerActive} = this.state;
      return (
        <Component
          {...this.props}
          offerActive = {offerActive}
          onOfferCardHover={this._handleOfferCardHover}
          onOfferCardLeave={this._handleOfferCardLeave}
        />
      );
    }
  }
  return WithOfferActive;
};
