import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {Header} from "./header";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it(`Component rendered correctly -> Header`, () => {
  const store = mockStore({});
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <Provider store={store}>
        <Header/>
      </Provider>
  );
  expect(tree).toMatchSnapshot();
});
