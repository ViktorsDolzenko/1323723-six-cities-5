import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {createApi} from "./api";
import {reducers} from "./store/root-reducer";
import {App} from "./components/app/app";
import {checkAuth, fetchOffers} from "./store/api-actions";
import {setAuthorization} from "./store/action";
import {AuthorizationStatus} from "./const";
import {composeWithDevTools} from "redux-devtools-extension";

const api = createApi(
    () => store.dispatch(setAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(reducers,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);


window.store = store;

Promise.all([
  store.dispatch(fetchOffers()),
  store.dispatch(checkAuth())
])
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <App/>
        </Provider>,
        document.querySelector(`#root`)
    );
  });
