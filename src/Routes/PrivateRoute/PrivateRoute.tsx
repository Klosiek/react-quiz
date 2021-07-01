import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { RoutesEnum } from "shared/enums";
import { selectLoggedIn } from "store/profile";

const PrivateRoute = (props: RouteProps) => {
  const isLoggedIn = useSelector(selectLoggedIn);

  return isLoggedIn ? <Route {...props} /> : <Redirect to={RoutesEnum.Login} />;
};

export default PrivateRoute;
