import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {createApi} from "./api";
import {reducers} from "./store/root-reducer";
import {App} from "./components/app/app";
import {reviews} from "./mocks/reviews";
import {fetchOffers} from "./store/api-actions";

const api = createApi();

const store = createStore(reducers, applyMiddleware(thunk.withExtraArgument(api)));

store.dispatch(fetchOffers());

ReactDOM.render(
    <Provider store={store}>
      <App
        reviews={reviews}/>
    </Provider>,
    document.querySelector(`#root`)
);
