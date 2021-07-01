import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { RoutesEnum } from "shared/enums";
import { selectIsLoggedInAndIsEmailVerified } from "store/profile";

const PrivateRoute = (props: RouteProps) => {
  const isLoggedIn = useSelector(selectIsLoggedInAndIsEmailVerified);

  return isLoggedIn ? <Route {...props} /> : <Redirect to={RoutesEnum.Login} />;
};

export default PrivateRoute;
