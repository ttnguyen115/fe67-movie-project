import { useEffect } from "react";
import { Route, Switch } from "react-router";

import { movieApi } from "./api/movieApi";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import TicketRoom from "./pages/TicketRoom";

import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import Header from "./components/Header";

const App = () => {
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        await movieApi.getAll();
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovie();
  }, []);

  return (
    <Switch>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />

      {/* <Header /> */}
      <Route exact path="/" component={Home} />
      <Route path="/movie/:id" component={Detail} />
      <Route path="/ticketroom/:id" component={TicketRoom} />

      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default App;
