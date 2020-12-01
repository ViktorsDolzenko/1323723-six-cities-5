import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {Favorites} from "./favorites";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it(`Component rendered correctly -> Favorites`, () => {
  const store = mockStore({});
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <Provider store={store}>
        <Favorites/>
      </Provider>
  );
  expect(tree).toMatchSnapshot();
});
