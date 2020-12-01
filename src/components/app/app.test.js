import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {App} from "./app";
import {makeInitialStateMock} from "../../util";

it(`Should App render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>,
        {createNodeMock: () => {
          return document.createElement(`div`);
        }}
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
