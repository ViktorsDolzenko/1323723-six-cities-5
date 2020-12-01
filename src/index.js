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

store.dispatch(checkAuth());

Promise.all([
  store.dispatch(fetchOffers()),
])
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <App/>
        </Provider>,
        document.querySelector(`#root`)
    );
  });
