import React from "react";
import renderer from "react-test-renderer";
import {FilterTypes} from "../../const";
import {PlacesSorting} from "./places-sorting";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducers} from "../../store/root-reducer";

const store = createStore(reducers);
describe(`SortingOptions render`, () => {
  it(`should render with popular`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <PlacesSorting
                sortOption={FilterTypes.POPULAR}
                handleFilterClick={() => {}}
                toggleSortingPopup={() => {}}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
