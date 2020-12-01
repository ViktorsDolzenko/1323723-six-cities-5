import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {withActiveOffer} from "./withActiveOffer";

configure({adapter: new Adapter()});
const MockComponent = () => <div />;
const MockComponentWrapped = withActiveOffer(MockComponent);

test(`withActiveCardId work correctly`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  expect(wrapper.props().activeOffer).toEqual(null);
  wrapper.props().onOfferCardHover(1);
  expect(wrapper.props().activeOffer).toEqual(1);
});
