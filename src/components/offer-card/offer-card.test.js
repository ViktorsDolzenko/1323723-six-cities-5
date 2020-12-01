import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {OfferCard} from './offer-card';
import {AuthorizationStatus} from "../../const";
import {mockOffers} from "../../util";
import {NameSpace} from "../../store/root-reducer";


const noop = () => {};
const [offer] = mockOffers;
const mockStore = configureStore();

test(`OfferCard render correctly`, () => {
  const initialState = {
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH
    }
  };

  const store = mockStore(initialState);
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <OfferCard
              onCardHover={noop}
              offer={offer}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
