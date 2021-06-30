import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { RoutesEnum } from "shared/enums";
import { selectLoggedIn } from "store/user";

const PublicRoute = (props: RouteProps) => {
  const isLoggedIn = useSelector(selectLoggedIn);
  console.log(isLoggedIn);

  return !isLoggedIn ? (
    <Route {...props} />
  ) : (
    <Redirect to={RoutesEnum.HomePage} />
  );
};

export default PublicRoute;
