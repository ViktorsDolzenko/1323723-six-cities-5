import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offer";
import reviews from "./mocks/reviews";

ReactDOM.render(
    <App
      offers={offers}
      reviews={reviews}/>,
    document.querySelector(`#root`)
);
