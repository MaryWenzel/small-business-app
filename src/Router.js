import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Login from "./components/Login";
import Listings from "./containers/Listings";
import cookie from "cookie";

import AddListing from "./containers/AddListing";
import Details from "./containers/Details";
import history from "./history";

// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"
const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

// Write ProtectedRoute function here
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const Router = () => {
  return (
    <Switch>
      <Route path="/listings" component={Listings} />
      <Route path="/login" component={Login} />

      <Route path="/details/:id" component={Details} />
      <Route exact path="/" component={Listings} />

      <ProtectedRoute path="/add" history={history} component={AddListing} />
    </Switch>
  );
};

export default Router;
