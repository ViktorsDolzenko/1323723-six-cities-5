import React from 'react';
import renderer from 'react-test-renderer';
import {CityList} from "./city-list";
import {mockCity} from "../../util";


it(`Component rendered correctly -> CityList`, () => {
  const tree = renderer.create(
      <CityList currentCity={mockCity} handleCityClick={() => {}}/>
  );
  expect(tree).toMatchSnapshot();
});
