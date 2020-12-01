import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {OfferCard} from "./offer-card";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducers} from "../../store/root-reducer";
import {AuthorizationStatus} from "../../const";
import {mockOffers} from "../../util";

configure({adapter: new Adapter()});

const store = createStore(reducers);

describe(`OfferCard e2e test`, () => {
  it(`should call hover 1 time`, () => {
    const onOfferCardHover = jest.fn();

    const wrapper = mount(
        <Provider store={store}>
          <BrowserRouter>
            <OfferCard
              onOfferCardHover={onOfferCardHover}
              offer={mockOffers[0]}
              authorizationStatus={AuthorizationStatus.AUTH}
            />
          </BrowserRouter>
        </Provider>
    );

    wrapper.find(`.place-card`).simulate(`mouseenter`);

    expect(onOfferCardHover).toHaveBeenCalledTimes(1);
  });
});
