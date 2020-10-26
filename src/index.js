import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offer";
import reviews from "./mocks/reviews";
import {createStore} from 'redux';
import {reducer} from "./store/reducer";
import {Provider} from "react-redux";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
      <App
        offers={offers}
        reviews={reviews}/>
    </Provider>,
    document.querySelector(`#root`)
);
