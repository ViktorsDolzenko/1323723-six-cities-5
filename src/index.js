import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {createApi} from "./api";
import {reducers} from "./store/root-reducer";
import {App} from "./components/app/app";
import {checkAuth, fetchOffers} from "./store/api-actions";
import {requiredAuthorization} from "./store/action";
import {AuthorizationStatus} from "./const";
import {composeWithDevTools} from "redux-devtools-extension";

const api = createApi(
    () => store.dispatch(requiredAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(reducers,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

store.dispatch(fetchOffers());
store.dispatch(checkAuth());

window.store = store;

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);

