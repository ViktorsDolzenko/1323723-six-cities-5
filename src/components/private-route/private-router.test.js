import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {PrivateRoute} from './private-route';
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it(`Component rendered correctly -> PrivateRouter`, () => {
  const store = mockStore({});
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <Provider store={store}>
        <PrivateRoute
          exact={ true }
          path={`/`}
          render={ () => {} }
        />
      </Provider>
  );
  expect(tree).toMatchSnapshot();
});
