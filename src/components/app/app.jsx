import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {MainPage} from "../main-page/main-page";
import {Favorites} from "../favorites/favorites";
import {Login} from "../login/login";
import {Property} from "../property/property";

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage}>
        </Route>
        <Route exact path="/login" component={Login}>
        </Route>
        <Route exact path="/favorites" component={Favorites}>
        </Route>
        <Route exact path="/offer/:id" component={Property}/>
      </Switch>
    </BrowserRouter>
  );
}

