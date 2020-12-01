import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducers} from "../../store/root-reducer";
import {CityList} from "./city-list";
import {mockCity} from "../../util";

configure({adapter: new Adapter()});

const store = createStore(reducers);

describe(`cityList test`, () => {
  it(`should call handleCityClick `, () => {
    const handleCityClick = jest.fn();

    const wrapper = mount(
        <Provider store={store}>
          <BrowserRouter>
            <CityList currentCity={mockCity} handleCityClick={handleCityClick}/>
          </BrowserRouter>
        </Provider>
    );

    wrapper.find(`.locations__item-link`).at(1).simulate(`click`);
    expect(handleCityClick).toHaveBeenCalledTimes(1);
  });
});
