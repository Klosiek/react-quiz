import { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { Typography } from "@material-ui/core";

const NotFound = () => <Typography align="center">404 Not Found</Typography>;

const Routes = () => {
  const LoginPage = lazy(() => import("pages/LoginPage"));
  const HomePage = lazy(() => import("pages/HomePage"));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
