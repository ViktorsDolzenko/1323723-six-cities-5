import React from 'react';
import renderer from 'react-test-renderer';
import {CityList} from "./city-list";
import {Cities} from "../../const";


it(`Component rendered correctly -> CityList`, () => {
  const tree = renderer.create(
    <CityList currentCity={Cities.AMSTERDAM} handleCityClick={() => {}}/>
  );
  expect(tree).toMatchSnapshot();
});
