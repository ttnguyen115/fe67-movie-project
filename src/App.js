import { Route, Switch } from "react-router";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";

const App = () => {
  return (
    <Switch>
      <Route path="/detail" component={Detail} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/" exact component={Home} />
    </Switch>
  );
};

export default App;
