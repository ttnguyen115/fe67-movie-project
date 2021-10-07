import { actionTypes } from "../actions/type";

const initialState = {
  // state
  movieList: [],
};

const reducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    //
    case actionTypes.FETCH_MOVIES: {
      state.movieList = payload;
      return { ...state };
    }

    default:
      return state;
  }
};

export default reducers;
