import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {makeInitialStateMock, mockCity, mockOffer, mockOffers} from "../../util";
import {MainPage} from "./main-page";


it(`Should main page render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <MainPage
              offers={mockOffers}
              getOfferByCityAction={mockOffer}
              city={mockCity}/>
          </BrowserRouter>
        </Provider>,
        {createNodeMock: () => {
          return document.createElement(`div`);
        }}
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
