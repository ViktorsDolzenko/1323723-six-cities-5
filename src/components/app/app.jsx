import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {MainPage} from "../main-page/main-page";
import {Favorites} from "../favorites/favorites";
import {Login} from "../login/login";
import {Property} from "../property/property";
import {PrivateRoute} from "../private-route/private-route";

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <PrivateRoute
          exact
          path="/login"
          render={() =>(
            <Login/>
          )}
        />
        <PrivateRoute
          exact
          path="/favorites"
          render={() =>(
            <Favorites/>
          )}
        />
        <Route exact path="/offer/:id" component={Property}/>
      </Switch>
    </BrowserRouter>
  );
}

