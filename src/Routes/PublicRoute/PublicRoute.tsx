import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { RoutesEnum } from "shared/enums";
import { selectUser } from "store/user";

const PublicRoute = (props: RouteProps) => {
  const isLoggedIn = useSelector(selectUser);

  return !isLoggedIn ? (
    <Route {...props} />
  ) : (
    <Redirect to={RoutesEnum.HomePage} />
  );
};

export default PublicRoute;
