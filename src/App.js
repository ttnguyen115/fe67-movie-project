import { Route, Switch } from "react-router";
import Header from "./components/Header";
import Detail from './pages/Detail';
import Home from './pages/Home';
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Switch>
      <Header />
      <Route path="/" component={Home} />
      <Route path="/movie/:id" component={Detail} />

      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default App;
