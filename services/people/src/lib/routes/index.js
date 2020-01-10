import { Route, Switch } from "react-router-dom";
import List from "../../components/List";
import Details from "../../components/Details";

const Routes = () => (
  <Switch>
    <Route exact path="/people" component={List} />
    <Route exact path="/people/:id" component={Details} />
  </Switch>
);

export default Routes;
