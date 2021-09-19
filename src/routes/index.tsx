import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../screens/Login";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Login} exact />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
