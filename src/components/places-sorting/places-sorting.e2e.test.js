import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FilterTypes} from "../../const";
import {createStore} from "redux";
import {reducers} from "../../store/root-reducer";
import {PlacesSorting} from "./places-sorting";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

configure({adapter: new Adapter()});
const store = createStore(reducers);

it(`SortingOprtions should call onSortingOptionChange 1 time`, () => {
  const handleFilterClick = jest.fn();

  const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <PlacesSorting
            filter={FilterTypes.POPULAR}
            handleFilterClick={handleFilterClick}
          />
        </BrowserRouter>
      </Provider>
  );

  wrapper.find(`.places__option`).at(1).simulate(`click`);

  expect(handleFilterClick).toHaveBeenCalledTimes(1);
});

