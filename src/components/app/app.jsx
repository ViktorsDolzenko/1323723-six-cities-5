import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {MainPage} from "../main-page/main-page";
import {Favorites} from "../favorites/favorites";
import {Login} from "../login/login";
import {Property} from "../property/property";
import {offerProps, reviewProps} from "../../property-types";

export const App = (props) => {
  const {offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"
          render={({history}) => (
            <MainPage
              onEmailLinkClick={() => history.push(`/favorites`)}
            />
          )}>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/favorites">
          <Favorites
            offers={offers}
          />
        </Route>
        <Route exact path='/offer/:id'
          render={({match, history}) => {
            const offer = offers.find((offerCurrent) => offerCurrent.id === Number(match.params.id));
            return (
              <Property
                offer={offer}
                offers={offers}
                reviews={reviews}
                onEmailLinkClick={() => history.push(`/favorites`)}
              />
            );
          }
          }
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(offerProps),
};
