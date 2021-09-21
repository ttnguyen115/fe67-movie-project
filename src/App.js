import { Route, Switch } from "react-router";
import Detail from './pages/Detail';
import Home from './pages/Home';

const App = () => {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/" component={Detail} />
    </Switch>
  );
}

export default App;
