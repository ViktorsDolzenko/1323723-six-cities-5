import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {makeInitialStateMock} from "../../util";
import {ReviewForm} from "./review-form";

it(`Should ReviewForm render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());
  const tree = renderer
    .create(
        <Provider store={store}>
          <ReviewForm/>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
