import React from "react";
// import { connect } from "react-redux";
import { Redirect, Route } from "react-router";

const ProtectedRoute = props => {
  const { login } = props;
  if (login==null){
      return <Redirect to="/" />;
  }
  return <Route {...props} />;
};

// const mapStateToProps = ({ login }) => ({
//   login
// });

//export default connect(mapStateToProps)(ProtectedRoute);
export default ProtectedRoute;