import React from 'react';
import renderer from 'react-test-renderer';
import {PlacesSorting} from "./places-sorting";
import {FilterTypes} from "../../const";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {createStore} from "redux";
import {reducers} from "../../store/root-reducer";

const store = createStore(reducers);
const props = {
  filter: FilterTypes.POPULAR,
  opened: true,
  onToggleClick: () => {},
  onFilterChange: () => {},
};

describe(`CitiesFilter render correctly`, () => {
  it(`CitiesFilter toggle opened`, () => {

    props.opened = true;

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <PlacesSorting {...props} />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`CitiesFilter toggle closed`, () => {

    props.opened = false;

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <PlacesSorting {...props} />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
