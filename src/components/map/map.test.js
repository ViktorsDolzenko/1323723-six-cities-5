import React from 'react';
import renderer from 'react-test-renderer';
import {Map} from './map';
import {mockOffers} from "../../util";

describe(`Should Map render correctly`, () => {
  it(`Should Map render correctly`, () => {
    const tree = renderer
      .create(
          <Map
            icons={mockOffers}
          />,
          {createNodeMock: () => {
            return document.createElement(`div`);
          }}
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
