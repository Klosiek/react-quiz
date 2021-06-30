import { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { RoutesEnum } from "shared/enums";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const NotFound = () => <Typography align="center">404 Not Found</Typography>;

const Routes = () => {
  const LoginPage = lazy(() => import("pages/LoginPage"));
  const RegisterPage = lazy(() => import("pages/RegisterPage"));
  const HomePage = lazy(() => import("pages/HomePage"));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <PublicRoute path={RoutesEnum.Login} exact component={LoginPage} />
        <PublicRoute
          path={RoutesEnum.Register}
          exact
          component={RegisterPage}
        />
        <PrivateRoute path={RoutesEnum.HomePage} exact component={HomePage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
