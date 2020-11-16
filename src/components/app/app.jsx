import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {MainPage} from "../main-page/main-page";
import {Favorites} from "../favorites/favorites";
import {Login} from "../login/login";
import {Property} from "../property/property";
import {offerProps, reviewProps} from "../../property-types";
import {connect} from "react-redux";

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
          render={({history}) => {
            return (
              <Property
                onEmailLinkClick={() => history.push(`/favorites`)}
                reviews={reviews}
                {...props}
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
  offers: PropTypes.arrayOf(offerProps).isRequired,
  reviews: PropTypes.arrayOf(reviewProps).isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.DATA.offers,
});

export default connect(mapStateToProps)(App);
