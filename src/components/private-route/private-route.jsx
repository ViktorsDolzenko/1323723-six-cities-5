import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {AuthorizationStatus} from "../../const";
import {NameSpace} from "../../store/root-reducer";


const PrivateRouteComponent = (props) => {
  const {render, path, exact, authorizationStatus} = props;
  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render()
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
  authorizationStatus: state[NameSpace.USER].authorizationStatus,
});

export const PrivateRoute = connect(mapStateToProps)(PrivateRouteComponent);
