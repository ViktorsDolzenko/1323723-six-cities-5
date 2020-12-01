import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FilterTypes} from "../../const";
import {createStore} from "redux";
import {BrowserRouter} from "react-router-dom";
import {reducers} from "../../store/root-reducer";
import {PlacesSorting} from "./places-sorting";
import {Provider} from "react-redux";

configure({adapter: new Adapter()});
const store = createStore(reducers);

it(`Sorting Options should call onSortingOptionChange 1 time`, () => {
  const toggleSortingPopup = jest.fn();
  const wrapper = shallow(
      <Provider store={store}>
        <BrowserRouter>
          <PlacesSorting
            filter={FilterTypes.POPULAR}
            onClick={toggleSortingPopup}
          />
        </BrowserRouter>
      </Provider>
  );
  wrapper.find(`.places__sorting-type`).at(1).simulate(`click`);
  expect(toggleSortingPopup).toBeCalledTimes(1);
});

