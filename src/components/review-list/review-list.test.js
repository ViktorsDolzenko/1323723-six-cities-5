import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {makeInitialStateMock, mockReviews} from "../../util";
import {ReviewList} from "./review-list";

it(`Should ReviewForm render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());
  const tree = renderer
    .create(
        <Provider store={store}>
          <ReviewList
            reviews={mockReviews}
            offerId={1}
          />
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
