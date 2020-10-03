import React from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Favorites from "../favorites/favorites";
import Login from "../login/login";
import Property from "../property/property";

const App = (props) => {
  const {offersCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage offersCount={offersCount}/>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/property">
          <Property />
        </Route>
      </Switch>
    </BrowserRouter>

  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
};
export default App;
