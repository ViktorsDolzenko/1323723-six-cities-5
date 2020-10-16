import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offer";
import reviews from "./mocks/reviews";
const Settings = {
  OFFERS_COUNT: 250
};

ReactDOM.render(
    <App
      offersCount={Settings.OFFERS_COUNT}
      offers={offers}
      reviews={reviews}/>,
    document.querySelector(`#root`)
);
