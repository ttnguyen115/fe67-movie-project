import { Route, Switch } from "react-router";
<<<<<<< HEAD
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
=======
import Header from "./components/Header";
import Detail from './pages/Detail';
import Home from './pages/Home';
import NotFound from "./pages/NotFound";
>>>>>>> fb7773900aaece51b9676ee4868ff4afbeb837b7

const App = () => {
  return (
    <Switch>
<<<<<<< HEAD
      <Route path="/detail" component={Detail} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/" exact component={Home} />
=======
      <Header />
      <Route path="/" component={Home} />
      <Route path="/movie/:id" component={Detail} />

      <Route path="*" component={NotFound} />
>>>>>>> fb7773900aaece51b9676ee4868ff4afbeb837b7
    </Switch>
  );
};

export default App;
