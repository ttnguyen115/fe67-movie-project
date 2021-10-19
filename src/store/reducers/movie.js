import { actionTypes } from "../actions/type";

const initialState = {
  movieList: [],
  movieDetail: null,
  selectedMovie: null,
  error: null,
  loading: false,
};

const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_MOVIES_REQUEST:
      state.loading = true;
      return { ...state };
    case actionTypes.FETCH_MOVIES_SUCCESS:
      state.loading = false;
      state.error = null;
      state.movieList = payload;
      return { ...state };
    case actionTypes.FETCH_MOVIES_FAIL:
      state.loading = false;
      state.error = payload;
      return { ...state };
    
    case actionTypes.FETCH_MOVIE_REQUEST:
      state.loading = true;
      return { ...state };
    case actionTypes.FETCH_MOVIE_SUCCESS:
      state.loading = false;
      state.error = null;
      state.movieDetail = payload;
      return { ...state };
    case actionTypes.FETCH_MOVIE_FAIL:
      state.loading = false;
      state.error = payload;
      return { ...state };

    case actionTypes.FETCH_SHOWTIME_REQUEST:
      state.loading = true;
      return { ...state };
    case actionTypes.FETCH_SHOWTIME_SUCCESS:
      state.loading = false;
      state.error = null;
      state.selectedMovie = payload;
      return { ...state };
    case actionTypes.FETCH_SHOWTIME_FAIL:
      state.loading = false;
      state.error = payload;
      return { ...state };

    default:
      return state;
  }
};

export default reducers;
