import Navbar from "components/NavBar";
import {
  Attributes,
  ComponentClass,
  createElement,
  FunctionComponent,
} from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { RoutesEnum } from "shared/enums";
import { selectIsLoggedInAndIsEmailVerified } from "store/profile";

const PrivateRoute = (props: RouteProps) => {
  const isLoggedIn = useSelector(selectIsLoggedInAndIsEmailVerified);
  const { component, ...rest } = props;

  return isLoggedIn ? (
    <Route
      {...rest}
      render={(routeProps) => (
        <>
          <Navbar />
          {createElement(
            component as string | FunctionComponent | ComponentClass,
            routeProps as Attributes
          )}
        </>
      )}
    />
  ) : (
    <Redirect to={RoutesEnum.Login} />
  );
};

export default PrivateRoute;
