import { useEffect } from "react";
import { Route, Switch } from "react-router";

import { movieApi } from "./api/movieApi";
import Detail from './pages/Detail';
import Home from './pages/Home';
import NotFound from "./pages/NotFound";
import TicketRoom from "./pages/TicketRoom";

import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import Header from "./components/Header";
import { AuthRoute } from "./HOCs/Routes";
import { useDispatch } from "react-redux";
import { refreshToken } from "./store/actions/user";


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        await movieApi.getAll();
      } catch (err) {
        console.log(err);
      }
    }

    fetchMovie();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!!token) dispatch(refreshToken(token));
  }, [dispatch]);

  return (
    <Switch>
      <AuthRoute path="/signin" component={SignIn} redirectPath="/" />
      <AuthRoute path="/signup" component={SignUp} redirectPath="/" />

      {/* <Header /> */}
      <Route exact path="/" component={Home} />
      <Route path="/movie/:id" component={Detail} />
      <Route path="/ticketroom/:id" component={TicketRoom} />

      <Route path="*" component={NotFound} />

    </Switch>
  );
};

export default App;
