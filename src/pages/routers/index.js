import React from "react";

// IMPORT : React Router Dom
import { Switch, Route } from "react-router-dom";

// IMPORT : PAGE
import Home from "../home";
import Dunia from "../dunia";

export default function Routers() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dunia" component={Dunia} />
    </Switch>
  );
}
