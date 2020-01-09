import { Route, Switch } from "react-router-dom";
import ServiceRoutes from "../service/ServiceRoutes";
import Page from "../../components/Page";

const Routes = () => (
  <Switch>
    <Route path="/page" render={Page} />
    <ServiceRoutes />
  </Switch>
);

export default Routes;
