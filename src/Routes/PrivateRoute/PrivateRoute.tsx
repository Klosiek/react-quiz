import HomeAppBar from "components/HomeAppBar";
import NavBar from "components/NavBar";
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
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <HomeAppBar />
          <div style={{ display: "flex", height: "100%" }}>
            <NavBar />
            {createElement(
              component as string | FunctionComponent | ComponentClass,
              routeProps as Attributes
            )}
          </div>
        </div>
      )}
    />
  ) : (
    <Redirect to={RoutesEnum.Login} />
  );
};

export default PrivateRoute;
