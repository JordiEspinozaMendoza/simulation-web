import React from "react";
import { Switch, Route } from "react-router-dom";

// ? Components for this router
import { LoaderDots, NavigationBar } from "../components";
import { homeRoutes as routes } from "../routes";

export const HomeRouter = () => {
  return (
    <>
      <NavigationBar />
      <React.Suspense fallback={<LoaderDots />}>
        <Switch>
          {routes.map((route, index) => {
            return route.component ? (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={(props) => <route.component {...props} />}
              />
            ) : null;
          })}
        </Switch>
      </React.Suspense>
    </>
  );
};
