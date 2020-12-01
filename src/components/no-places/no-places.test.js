import React from 'react';
import renderer from 'react-test-renderer';
import {Cities} from "../../const";
import {NoPlaces} from "./no-places";


it(`Component rendered correctly -> CityList`, () => {
  const tree = renderer.create(
      <NoPlaces currentCity={Cities.AMSTERDAM}/>
  );
  expect(tree).toMatchSnapshot();
});
