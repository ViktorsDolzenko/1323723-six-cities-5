import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {makeInitialStateMock, mockReview} from "../../util";
import {ReviewItem} from "./review-item";

it(`Should ReviewForm render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());
  const tree = renderer
    .create(
        <Provider store={store}>
          <ReviewItem review={mockReview}/>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
