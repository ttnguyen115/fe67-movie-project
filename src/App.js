import { useEffect } from "react";
import { Route, Switch } from "react-router";
import { movieApi } from "./api/movieApi";
import Detail from './pages/Detail';
import Home from './pages/Home';
import NotFound from "./pages/NotFound";
import TicketRoom from "./pages/TicketRoom";

const App = () => {
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

  return (
    <Switch>
      <Route path="/movie/:id" component={Detail} />
      <Route path="/ticketroom/:id" component={TicketRoom} />
      <Route path="/" component={Home} />

      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default App;
