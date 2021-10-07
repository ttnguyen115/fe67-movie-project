import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import CarouselList from "./reducers/carousel";
import movieList from "./reducers/movie";
import cinema from "./reducers/cinema";

const rootReducer = combineReducers({
  CarouselList,
  movieList,
  cinema,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
