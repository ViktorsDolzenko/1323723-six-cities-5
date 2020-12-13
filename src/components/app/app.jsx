import React from "react";
import {Switch, Route, HashRouter} from "react-router-dom";
import {MainPage} from "../main-page/main-page";
import {Favorites} from "../favorites/favorites";
import {Login} from "../login/login";
import {Property} from "../property/property";
import {PrivateRoute} from "../private-route/private-route";

export function App() {
  return (
    <HashRouter basename={`/1323723-six-cities-5`}>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/login" component={Login}/>
        <PrivateRoute exact path="/favorites" render={() =>(<Favorites/>)}/>
        <Route exact path="/offer/:id" component={Property}/>
      </Switch>
    </HashRouter>
  );
}

