import React from "react";
import { Switch, Route } from "react-router-dom";

import NotFound from "../../pages/NotFoundPage";

const CoreRouter = ({ children }) => {
  return (
    <Switch>
      {children}
      <Route component={NotFound} />
    </Switch>
  );
};

export default CoreRouter;
