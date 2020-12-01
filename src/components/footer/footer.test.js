import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {Footer} from "./footer";

it(`Component rendered correctly -> Footer`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <Footer/>
  );
  expect(tree).toMatchSnapshot();
});
