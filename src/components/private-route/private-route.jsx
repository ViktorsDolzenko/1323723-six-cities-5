import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {AuthorizationStatus} from "../../const";


const PrivateRouteComponent = (props) => {
  const {render, path, exact, authorizationStatus} = props;
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(routeProps)
            : <Redirect to={`/login`}/>
        );
      }}
    />
  );
};

PrivateRouteComponent.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.USER.authorizationStatus,
});

export const PrivateRoute = connect(mapStateToProps)(PrivateRouteComponent);
