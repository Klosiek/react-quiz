import { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { useAuth, AuthCheck } from "reactfire";

const NotFound = () => <Typography align="center">404 Not Found</Typography>;

const Routes = () => {
  const auth = useAuth();
  const LoginPage = lazy(() => import("pages/LoginPage"));
  const HomePage = lazy(() => import("pages/HomePage"));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <AuthCheck fallback={<LoginPage />} auth={auth}>
          <Route path="/" exact component={HomePage} />
          <Route component={NotFound} />
        </AuthCheck>
      </Switch>
    </Suspense>
  );
};

export default Routes;
